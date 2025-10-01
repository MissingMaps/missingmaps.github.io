const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const cleaner = require('gulp-clean');
const concat = require('gulp-concat');
const cp = require('child_process');
const fs = require('fs');
const git = require('gulp-git');
const { mdToPdf } = require('md-to-pdf');
const path = require('path');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const zip = require('gulp-zip');

async function grabEvents () {
  // First try to fetch from osmcal.org
  try {
    console.log('Fetching events from osmcal.org...');
    const fetchEvents = require('./fetch-events.cjs');
    await fetchEvents();
    console.log('Successfully fetched events from osmcal.org');
    return;
  } catch (error) {
    console.error('Failed to fetch events from osmcal.org:', error.message);
    // Create empty events file on error
    const eventsFile = path.join(__dirname, 'app', 'assets', 'data', 'events.json');
    fs.writeFileSync(eventsFile, JSON.stringify([], null, 2));
  }
}

function clean () {
  return gulp.src(['_site', '.tmp', 'app/_data/events', 'app/_posts'], {read: false, allowEmpty: true})
    .pipe(cleaner());
}
exports.clean = clean;

function copyAssets () {
  return gulp.src('.tmp/assets/**')
    .pipe(gulp.dest('_site/assets'));
}
exports.copyAssets = copyAssets;

function styles () {
  const sassInput = 'app/assets/styles/*.scss';
  const sassOptions = {
    includePaths: [
      'node_modules/foundation-sites/scss',
      'node_modules/@fortawesome/fontawesome-free/scss',
      '.tmp/assets/styles',
      'app/assets/styles'
    ],
    errLogToConsole: true,
    outputStyle: 'expanded',
    quietDeps: true, // Suppress deprecation warnings from dependencies like Foundation Sites
    verbose: false,  // Reduce verbose output
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions', 'slash-div']
  };
  
  let stream = gulp.src(sassInput)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'));
  
  // Only call browserSync.reload if browserSync is active and properly configured
  try {
    if (browserSync.active) {
      stream = stream.pipe(browserSync.reload({stream:true}));
    }
  } catch (error) {
    console.log('BrowserSync stream error (non-fatal):', error.message);
  }
  
  return stream.pipe(gulp.dest('.tmp/assets/styles'));
}
exports.styles = styles;

function icons () {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/**.*')
    .pipe(gulp.dest('.tmp/assets/fonts'));
}
exports.icons = icons;

function javascripts () {
  const javascriptPaths = [
    // the order of these matter
    'app/assets/scripts/*.js',
    'node_modules/@fortawesome/fontawesome-free/js/all.min.js'
  ];
  /* https://github.com/Foundation-for-Jekyll-sites/jekyll-foundation/blob/master/gulp/tasks/javascript.js */
  return gulp.src(javascriptPaths)
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('.tmp/assets/scripts'));
}
exports.javascripts = javascripts;

function zipMaterials () {
  return gulp.src('app/assets/downloads/mapathon-materials/**', { base : 'app/assets/downloads/' })
    .pipe(zip('mapathon-materials.zip'))
    .pipe(gulp.dest('.tmp/assets/downloads'));
}
exports.zipMaterials = zipMaterials;

async function AdvJosmPdfEN () {
  try {
    await mdToPdf({
      path: 'app/assets/sources/JOSM_Advanced_Mapping_EN.md'
    }, {
      dest: '.tmp/assets/downloads/JOSM_Advanced_Mapping_EN.pdf',
      stylesheet: 'app/assets/styles/github-markdown.css',
      pdf_options: {
        format: 'Letter'
      }
    });
    console.log('Done converting JOSM_Advanced_Mapping_EN.md to PDF.');
  } catch (error) {
    console.error('Error converting PDF:', error);
    throw error;
  }
}
exports.AdvJosmPdfEN = AdvJosmPdfEN;

async function AdvJosmPdfFR () {
  try {
    await mdToPdf({
      path: 'app/assets/sources/JOSM_Advanced_Mapping_FR.md'
    }, {
      dest: '.tmp/assets/downloads/JOSM_Advanced_Mapping_FR.pdf',
      stylesheet: 'app/assets/styles/github-markdown.css',
      pdf_options: {
        format: 'Letter'
      }
    });
    console.log('Done converting JOSM_Advanced_Mapping_FR.md to PDF.');
  } catch (error) {
    console.error('Error converting PDF:', error);
    throw error;
  }
}
exports.AdvJosmPdfFR = AdvJosmPdfFR;

async function AdvJosmPdfES () {
  console.log('Skipping PDF generation for JOSM_Advanced_Mapping_ES.md');
}
exports.AdvJosmPdfES = AdvJosmPdfES;

async function validationPdfEN () {
  console.log('Skipping PDF generation for Validating_Data_EN.md');
}
exports.validationPdfEN = validationPdfEN;

async function validationPdfFR () {
  console.log('Skipping PDF generation for Validating_Data_FR.md');
}
exports.validationPdfFR = validationPdfFR;

function cloneBlog (cb) {
  git.clone('https://github.com/MissingMaps/blog', {args: './app/_posts'}, (err) => {
    if (err) {console.log('Blog clone error (non-fatal):', err.message);}
    cb(); // Continue even if clone fails
  });
}

exports.cloneBlog = cloneBlog;

/* Build the jekyll website. */
function jekyll (done) {
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

function watching () {
  function browserReload (cb) { 
    // Add error handling for browserSync reload
    try {
      if (browserSync.active) {
        browserSync.reload(); 
      }
    } catch (error) {
      console.log('BrowserSync reload error (non-fatal):', error.message);
    }
    cb(); 
  }
  
  // Improved BrowserSync configuration with stability options
  browserSync({
    server: {
      baseDir: '_site',
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    port: 3000,
    ui: {
      port: 3001
    },
    open: false,
    notify: false,
    ghostMode: false,
    reloadOnRestart: true,
    injectChanges: false,
    logLevel: 'info',
    // Add stability options
    watchOptions: {
      ignoreInitial: true,
      ignored: [
        'node_modules/**',
        '.git/**',
        '.tmp/**',
        '**/*.log'
      ]
    },
    // Prevent crashes on file errors
    reloadDelay: 100,
    reloadDebounce: 500
  });
  
  // Watch with debouncing to prevent overwhelming browserSync
  gulp.watch(['./app/**/*', './_config*'], { 
    ignoreInitial: true,
    delay: 500 
  }, gulp.series(
    jekyll,
    gulp.parallel(javascripts, styles, icons),
    copyAssets,
    browserReload));
}
exports.serve = gulp.series(
  clean,
  gulp.parallel(cloneBlog, grabEvents),
  jekyll,
  gulp.parallel(javascripts, styles, icons, zipMaterials),
  copyAssets,
  watching);

// Alternative serve command without BrowserSync (more stable)
function simpleServe () {
  const http = require('http');
  const fs = require('fs');
  const path = require('path');
  
  const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, '_site', req.url === '/' ? 'index.html' : req.url);
    
    // If no extension, try adding .html
    if (!path.extname(filePath)) {
      filePath += '.html';
    }
    
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404);
          res.end('File not found');
        } else {
          res.writeHead(500);
          res.end('Server error');
        }
      } else {
        const ext = path.extname(filePath);
        const contentType = {
          '.html': 'text/html',
          '.js': 'text/javascript',
          '.css': 'text/css',
          '.json': 'application/json',
          '.png': 'image/png',
          '.jpg': 'image/jpg',
          '.gif': 'image/gif',
          '.svg': 'image/svg+xml'
        }[ext] || 'text/plain';
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
  
  server.listen(3000, () => {
    console.log('Simple server running at http://localhost:3000');
  });
}

exports.serve_stable = gulp.series(
  clean,
  gulp.parallel(cloneBlog, grabEvents),
  jekyll,
  gulp.parallel(javascripts, styles, icons, zipMaterials),
  copyAssets,
  simpleServe);let environment = 'development';
function setProd (cb) { environment = 'production'; cb(); }
exports.prod = gulp.series(
  clean,
  gulp.parallel(cloneBlog, grabEvents),
  setProd,
  jekyll,
  gulp.parallel(javascripts, styles, icons, zipMaterials),
  copyAssets);
