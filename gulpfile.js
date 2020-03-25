const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const cleaner = require('gulp-clean');
const concat = require('gulp-concat');
const cp = require('child_process');
const fs = require('fs');
const git = require('gulp-git');
const markdownpdf = require("markdown-pdf");
const plumber = require('gulp-plumber');
const request = require('request');
const runSequence = require('run-sequence').use(gulp);
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');


function clean() {
  return gulp.src(['_site', '.tmp', 'app/_data/events', 'app/_posts'], {read: false, allowEmpty: true})
    .pipe(cleaner());
}
exports.clean = clean;

function copyAssets() {
  return gulp.src('.tmp/assets/**')
    .pipe(gulp.dest('_site/assets'));
}
exports.copyAssets = copyAssets;

function styles() {
  const sassInput = 'app/assets/styles/*.scss';
  const sassOptions = {
    includePaths: ['node_modules/foundation-sites/scss','node_modules/@fortawesome/fontawesome-free/scss','.tmp/assets/styles' ],
    errLogToConsole: true,
    outputStyle: 'expanded'
  };
  return gulp.src(sassInput)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('.tmp/assets/styles'));
}
exports.styles = styles;

function icons() {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/**.*')
    .pipe(gulp.dest('.tmp/assets/fonts'));
}
exports.icons = icons

function javascripts() {
  const javascriptPaths = [
    // the order of these matter
    'app/assets/scripts/*.js',
    'node_modules/@fortawesome/fontawesome-free/js/all.min.js'
  ]
  /* https://github.com/Foundation-for-Jekyll-sites/jekyll-foundation/blob/master/gulp/tasks/javascript.js */
  return gulp.src(javascriptPaths)
    .pipe(concat('main.min.js'))
    // .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('.tmp/assets/scripts'))  
}
exports.javascripts = javascripts;

function zipMaterials() {
  return gulp.src('app/assets/downloads/mapathon-materials/**', { base : "app/assets/downloads/" })
      .pipe(zip('mapathon-materials.zip'))
      .pipe(gulp.dest('.tmp/assets/downloads'))
}
exports.zipMaterials = zipMaterials;

function validationPdf(cb) {
  markdownpdf({
        cssPath: 'app/assets/styles/github-markdown.css',
        paperFormat: 'Letter'})
    .from('app/assets/sources/MissingMaps_validation_josm_en.md')
    .to(".tmp/assets/downloads/MissingMaps_validation_josm_en.pdf", function () { 
      console.log("Done converting MissingMaps_validation_josm_en.md to PDF.")
      cb();
    }) 
}
exports.validationPdf = validationPdf;

function cloneEvents(cb) {
  git.clone('https://github.com/MissingMaps/events', {args: './app/_data/events'}, function(err) {
    // handle err
    cb();
  });
}
exports.cloneEvents = cloneEvents

function cloneBlog(cb) {
  git.clone('https://github.com/MissingMaps/blog', {args: './app/_posts'}, function(err) {
    // handle err
    cb();
  });
}

exports.cloneBlog = cloneBlog

/* Build the jekyll website. */
function jekyll(done) {
  const args = ['exec', 'jekyll', 'build'];

  switch (environment) {
    case 'development':
      args.push('--config=_config.yml,_config-dev.yml');
    break;
    case 'production':
      args.push('--config=_config.yml');
    break;
  }
  return cp.spawn('bundle', args, {stdio: 'inherit'})
    .on('close', done);
}
exports.jekyll = jekyll;


/* different build options */
/* ======================= */

function watching() {
  function browserReload(cb) { browserSync.reload(); cb(); }
  browserSync({
    server: '_site'
  });
  gulp.watch(['./app', './_config*'], gulp.series(
    jekyll, 
    gulp.parallel(javascripts, styles, icons), 
    copyAssets, 
    browserReload));   
}
exports.serve = gulp.series(
  clean,
  gulp.parallel(cloneEvents, cloneBlog),
  jekyll, 
  gulp.parallel(javascripts, styles, icons, zipMaterials, validationPdf), 
  copyAssets, 
  watching);

var environment = 'development';
function setProd(cb) { environment = 'production'; cb(); }
exports.prod = gulp.series(
  clean, 
  gulp.parallel(cloneEvents, cloneBlog), 
  setProd, 
  jekyll, 
  gulp.parallel(javascripts, styles, icons, zipMaterials, validationPdf), 
  copyAssets);


///////////////////////////////////////////////////////////////////////////////
//--------------------------- Humans task -----------------------------------//
//---------------------------------------------------------------------------//
// gulp.task('get-humans', function(){
// 
//   var getHumans = function(callback){
//     var options = {
//       url: 'https://api.github.com/repos/MissingMaps/missingmaps.github.io/contributors',
//       headers: {
//         'User-Agent': 'request'
//       }
//     };
// 
//     request(options, function (err, res) {
//       var humans = JSON.parse(res.body).map(function(human){
//         return {login: human.login, html_url: human.html_url, contributions: human.contributions}
//       });
//       humans.sort(function(a,b){
//         return b.contributions - a.contributions;
//       })
//       callback(humans);
//     });
//   }
// 
//   getHumans(function(humans){
//     fs.readFile('./docs/humans-tmpl.txt', 'utf8', function (err, doc) {
//       if (err) throw err;
//       //Do your processing, MD5, send a satellite to the moon, etc.
//       for (i = 0; i < humans.length; i++) {
//         doc = doc + '\nContributor: '+humans[i].login + '\nGithub: '+humans[i].html_url +'\n';
//       }
//       fs.writeFile('./app/humans.txt', doc, function(err) {
//         if (err) throw err;
//         console.log('complete');
//       });
//     });
//   });
// });
