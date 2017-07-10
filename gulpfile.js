var gulp = require('gulp');
var cp = require('child_process');
var runSequence = require('run-sequence').use(gulp);
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var cp = require('child_process');
var fs = require('fs');
var request = require('request');
var git = require('gulp-git');
var zip = require('gulp-zip');

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//-------------------------- Copy tasks --------------------------------------//
//----------------------------------------------------------------------------//

// Copy from the .tmp to _site directory.
// To reduce build times the assets are compiles at the same time as jekyll
// renders the site. Once the rendering has finished the assets are copied.
gulp.task('copy:assets', function(done) {
  return gulp.src('.tmp/assets/**')
    .pipe(gulp.dest('_site/assets'));
});

////////////////////////////////////////////////////////////////////////////////
//--------------------------- Assets tasks -----------------------------------//
//----------------------------------------------------------------------------//

var sassInput = 'app/assets/styles/*.scss';
var sassOptions = {
  includePaths: ['node_modules/foundation-sites/scss','node_modules/font-awesome/scss','.tmp/assets/styles' ],
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
};

gulp.task('sass', function() {
  return gulp.src(sassInput)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('.tmp/assets/styles'));
});

gulp.task('icons', function() {
  return gulp.src('node_modules/font-awesome/fonts/**.*')
    .pipe(gulp.dest('.tmp/assets/fonts'));
});

gulp.task('compress:main', function() {
  // main.min.js
  var task = gulp.src([
      'app/assets/scripts/*.js',
    ])
    .pipe(plumber());

    // if (environment == 'development') {
    //   task = task.pipe(concat('main.min.js'));
    //   console.log("concat scripts");
    //
    // }
    // else {
    //   task = task.pipe(uglify('main.min.js', {
    //     mangle: false
    //   }));
    //   console.log("uglify scripts");
    //
    // }

    //new version of uglify is breaking things this is a hotfix DK
      task = task.pipe(concat('main.min.js'));
      console.log("concat scripts");

    return task.pipe(gulp.dest('.tmp/assets/scripts'));
});

gulp.task('zipmaterials', function() {
  gulp.src('app/assets/downloads/mapathon-materials/**', { base : "app/assets/downloads/" })
      .pipe(zip('mapathon-materials.zip'))
      .pipe(gulp.dest('.tmp/assets/downloads'))
});

// Clone remote repo to sub folder ($CWD/sub/folder/git-test)
gulp.task('cloneevents', function(cb) {
  git.clone('https://github.com/MissingMaps/events', {args: './app/_data/events'}, function(err) {
    // handle err
    cb();
  });

});

gulp.task('cloneblog', function(cb) {
  git.clone('https://github.com/MissingMaps/blog', {args: './app/_posts'}, function(err) {
    // handle err
    cb();
  });
});


// Build the jekyll website.
gulp.task('jekyll', function (done) {
  var args = ['exec', 'jekyll', 'build'];

  switch (environment) {
    case 'development':
      args.push('--config=_config.yml,_config-dev.yml');
    break;
    case 'stage':
      args.push('--config=_config.yml,_config-stage.yml');
    break;
    case 'production':
      args.push('--config=_config.yml');
    break;
  }

  return cp.spawn('bundle', args, {stdio: 'inherit'})
    .on('close', done);
});

// Build the jekyll website.
// Reload all the browsers.
gulp.task('jekyll:rebuild', ['jekyll'], function () {
  browserSync.reload();
});

gulp.task('build', function(done) {
  runSequence(['cloneevents', 'cloneblog'],['jekyll', 'compress:main', 'sass', 'icons', 'zipmaterials'], ['copy:assets'], done);
});

// Default task.
gulp.task('default', function(done) {
  runSequence('build', done);
});

gulp.task('serve', ['build'], function () {
  browserSync({
    port: 3000,
    server: {
      baseDir: ['.tmp', '_site']
    }
  });

  gulp.watch(['./app/assets/fonts/**/*', './app/assets/images/**/*'], function() {
    runSequence('jekyll', browserReload);
  });

  gulp.watch('app/assets/styles/**/*.scss', function() {
    runSequence('sass');
  });

  gulp.watch(['./app/assets/scripts/**/*.js', '!./app/assets/scripts/vendor/**/*'], function() {
    runSequence('compress:main', browserReload);
  });

  gulp.watch(['app/**/*.html', 'app/**/*.md', 'app/**/*.json', 'app/**/*.geojson', '_config*'], function() {
    runSequence('jekyll', browserReload);
  });

});

var shouldReload = true;
gulp.task('no-reload', function(done) {
  shouldReload = false;
  runSequence('serve', done);
});

var environment = 'development';
gulp.task('prod', function(done) {
  environment = 'production';
  runSequence('clean', 'build', done);
});
gulp.task('stage', function(done) {
  environment = 'stage';
  runSequence('clean', 'build', done);
});

// Removes jekyll's _site folder
gulp.task('clean', function() {
  return gulp.src(['_site', '.tmp', 'app/_data/events', 'app/_posts'], {read: false})
    .pipe(clean());
});

////////////////////////////////////////////////////////////////////////////////
//------------------------- Helper functions ---------------------------------//
//----------------------------------------------------------------------------//

function browserReload() {
  if (shouldReload) {
    browserSync.reload();
  }
}

///////////////////////////////////////////////////////////////////////////////
//--------------------------- Humans task -----------------------------------//
//---------------------------------------------------------------------------//
gulp.task('get-humans', function(){

  var getHumans = function(callback){
    var options = {
      url: 'https://api.github.com/repos/MissingMaps/missingmaps.github.io/contributors',
      headers: {
        'User-Agent': 'request'
      }
    };

    request(options, function (err, res) {
      var humans = JSON.parse(res.body).map(function(human){
        return {login: human.login, html_url: human.html_url, contributions: human.contributions}
      });
      humans.sort(function(a,b){
        return b.contributions - a.contributions;
      })
      callback(humans);
    });
  }

  getHumans(function(humans){
    fs.readFile('./docs/humans-tmpl.txt', 'utf8', function (err, doc) {
      if (err) throw err;
      //Do your processing, MD5, send a satellite to the moon, etc.
      for (i = 0; i < humans.length; i++) {
        doc = doc + '\nContributor: '+humans[i].login + '\nGithub: '+humans[i].html_url +'\n';
      }
      fs.writeFile('./app/humans.txt', doc, function(err) {
        if (err) throw err;
        console.log('complete');
      });
    });
  });
});
