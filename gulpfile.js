const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const cleaner = require('gulp-clean');
const concat = require('gulp-concat');
const cp = require('child_process');
const fs = require('fs');
const git = require('gulp-git');
const markdownpdf = require("markdown-pdf");
const path = require('path');
const plumber = require('gulp-plumber');
const request = require('request');
const runSequence = require('run-sequence').use(gulp);
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');

function grabEvents(cb){
  var options = {
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSENK52p0o0dEpEfEH-qvloWEkILbcf-X8aSWdStVHKZuAF-G8-80NsRcouqBlB3DSsqerzVvPmnxDu/pub?gid=469941282&single=true&output=csv'
  };
  request(options, function (err, res) {
    var fileName = "events.csv";
    const outputFile = path.join(__dirname,'app','assets','google-sheets',fileName);
    if (fs.existsSync(outputFile)) {
      fs.unlinkSync(outputFile);
    }
    fs.writeFileSync(outputFile, res.body, 'utf8');
    cb();
  });
}
exports.grabEvents = grabEvents;

function grabEventHelpers(cb){
  var options = {
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT12UwGG1A10zICCvRL5tcd4uF89xXNOQ9RS4R9vDLax7H2vMKOUV3kODbFAA5RPP6LQathslaUIO-9/pub?gid=1040223163&single=true&output=csv'
  };
  request(options, function (err, res) {
    var fileName = "eventHelpers.csv";
    const outputFile = path.join(__dirname,'app','assets','google-sheets',fileName);
    if (fs.existsSync(outputFile)) {
      fs.unlinkSync(outputFile);
    }
    fs.writeFileSync(outputFile, res.body, 'utf8');
    cb();
  });
}
exports.grabEventHelpers = grabEventHelpers;


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
    .from('app/assets/sources/JOSM_Advanced_Mapping_EN.md')
    .to(".tmp/assets/downloads/JOSM_Advanced_Mapping_EN.pdf", function () { 
      console.log("Done converting JOSM_Advanced_Mapping_EN.md to PDF.")
      cb();
    }) 
}
exports.validationPdf = validationPdf;

function josmPdf(cb) {
  markdownpdf({
        cssPath: 'app/assets/styles/github-markdown.css',
        paperFormat: 'Letter'})
    .from('app/assets/sources/Validating_Data_EN.md')
    .to(".tmp/assets/downloads/Validating_Data_EN.pdf", function () { 
      console.log("Done converting Validating_Data_EN.md to PDF.")
      cb();
    }) 
}
exports.josmPdf = josmPdf;


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
      args.push('--trace');
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
  gulp.parallel(cloneBlog, grabEvents, grabEventHelpers),
  jekyll, 
  gulp.parallel(javascripts, styles, icons, zipMaterials, validationPdf, josmPdf), 
  copyAssets, 
  watching);

var environment = 'development';
function setProd(cb) { environment = 'production'; cb(); }
exports.prod = gulp.series(
  clean, 
  gulp.parallel(cloneBlog, grabEvents, grabEventHelpers), 
  setProd, 
  jekyll, 
  gulp.parallel(javascripts, styles, icons, zipMaterials, validationPdf, josmPdf), 
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
