var gulp = require('gulp');
var cp = require('child_process');
var runSequence = require('run-sequence');
var compass = require('gulp-compass');
var uglify = require('gulp-uglifyjs');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var cp = require('child_process');

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

gulp.task('compass', function() {
  return gulp.src('app/assets/styles/*.scss')
    .pipe(plumber())
    .pipe(compass({
      css: '.tmp/assets/styles',
      sass: 'app/assets/styles',
      style: 'expanded',
      sourcemap: true,
      require: ['sass-css-importer'],
      bundle_exec: true
    }))
    .on('error', function(err) {
      this.emit('end');
    })
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('compress:main', function() {
  // main.min.js
  var task = gulp.src([
      'app/assets/scripts/*.js',
    ])
    .pipe(plumber());

    if (environment == 'development') {
      task = task.pipe(concat('main.min.js'));
    }
    else {
      task = task.pipe(uglify('main.min.js', {
        outSourceMap: true,
        mangle: false
      }));
    }

    return task.pipe(gulp.dest('.tmp/assets/scripts'));
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

// Main build task
// Builds the site. Destination --> _site
gulp.task('build', function(done) {
  runSequence(['jekyll', 'compress:main', 'compass'], ['copy:assets'], done);
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
    runSequence('compass');
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
  return gulp.src(['_site', '.tmp'], {read: false})
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