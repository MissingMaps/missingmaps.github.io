const gulp = require('gulp');

// const autoprefixer = require('gulp-autoprefixer'); // Will be dynamically imported
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const cp = require('child_process');
const fs = require('fs');
const git = require('gulp-git');
const { mdToPdf } = require('md-to-pdf');
const path = require('path');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
// const zip = require('gulp-zip'); // Will be dynamically imported

async function grabEvents () {
  // First try to fetch from osmcal.org
  try {
    console.log('Fetching events from osmcal.org...');
    const fetchEvents = require('./fetch-events.cjs');
    await fetchEvents();
    console.log('Successfully fetched events from osmcal.org');
    return;
  } catch (error) {
    console.error('Error fetching events:', error);
    // Create empty events file on error
    const eventsFile = path.join(__dirname, 'app', 'assets', 'data', 'events.json');
    const emptyEvents = {
      events: [],
      build_time: new Date().toISOString(),
      total_events: 0
    };
    fs.writeFileSync(eventsFile, JSON.stringify(emptyEvents, null, 2));
    console.log('Created empty events file due to error');
  }
}

async function clean () {
  const { deleteAsync } = await import('del');
  return deleteAsync(['_site', '.tmp', 'app/_data/events', 'app/_posts']);
}
exports.clean = clean;

function copyAssets () {
  console.log('🔍 copyAssets: Starting asset copy process');
  
  // Check source directory
  if (!fs.existsSync('.tmp/assets')) {
    console.error('❌ Source directory .tmp/assets does not exist');
    return Promise.resolve();
  }
  
  // List source files
  try {
    const sourceFiles = fs.readdirSync('.tmp/assets', { recursive: true });
    console.log(`📁 Source files found: ${sourceFiles.length}`);
    sourceFiles.forEach(file => console.log(`  - ${file}`));
  } catch (err) {
    console.error('❌ Error reading source directory:', err.message);
  }
  
  // Ensure destination directory exists
  if (!fs.existsSync('_site')) {
    console.log('📁 Creating _site directory');
    fs.mkdirSync('_site', { recursive: true });
  }
  if (!fs.existsSync('_site/assets')) {
    console.log('📁 Creating _site/assets directory');
    fs.mkdirSync('_site/assets', { recursive: true });
  }
  
  let fileCount = 0;
  
  return gulp.src('.tmp/assets/**', { allowEmpty: true })
    .pipe(plumber({
      errorHandler: function(err) {
        console.error('❌ Error in copyAssets pipe:', err.message);
        console.error('Stack:', err.stack);
        this.emit('end');
      }
    }))
    .on('data', function(file) {
      fileCount++;
      console.log(`📄 Copying file ${fileCount}: ${file.relative}`);
    })
    .pipe(gulp.dest('_site/assets'))
    .on('end', function() {
      console.log(`✅ copyAssets: Completed copying ${fileCount} files`);
      
      // Verify destination files
      try {
        if (fs.existsSync('_site/assets')) {
          const destFiles = fs.readdirSync('_site/assets', { recursive: true });
          console.log(`📁 Destination files created: ${destFiles.length}`);
          destFiles.forEach(file => console.log(`  ✓ ${file}`));
        } else {
          console.error('❌ Destination directory _site/assets was not created');
        }
      } catch (err) {
        console.error('❌ Error verifying destination:', err.message);
      }
    });
}
exports.copyAssets = copyAssets;

async function styles () {
  console.log('🎨 styles: Starting CSS compilation');
  const autoprefixer = (await import('gulp-autoprefixer')).default;
  
  const sassInput = 'app/assets/styles/main.scss'; // Only compile main entry point
  const sassOptions = {
    includePaths: [
      'app/assets/styles',
      'node_modules/foundation-sites/scss',
      'node_modules/@fortawesome/fontawesome-free/scss',
      '.tmp/assets/styles'
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
    .pipe(autoprefixer({ cascade: false }))
    .pipe(sourcemaps.write('.'));
  
  // Only call browserSync.reload if browserSync is active and properly configured
  try {
    if (browserSync.active) {
      stream = stream.pipe(browserSync.reload({stream:true}));
    }
  } catch (error) {
    console.log('BrowserSync stream error (non-fatal):', error.message);
  }
  
  return stream
    .pipe(gulp.dest('.tmp/assets/styles'))
    .on('end', function() {
      console.log('✅ styles: CSS compilation completed and written to .tmp/assets/styles');
    });
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

async function zipMaterials () {
  const zip = (await import('gulp-zip')).default;
  
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
    buildAssets,
    copyAssets,
    browserReload));
}

// Create a task that builds all assets and ensures they're ready before copying
const buildAssets = gulp.parallel(javascripts, styles, icons, zipMaterials);
exports.buildAssets = buildAssets;

exports.serve = gulp.series(
  clean,
  gulp.parallel(cloneBlog, grabEvents),
  jekyll,
  buildAssets,
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
  buildAssets,
  copyAssets,
  simpleServe);

let environment = 'development';
function setProd (cb) { environment = 'production'; cb(); }
exports.prod = gulp.series(
  clean,
  gulp.parallel(cloneBlog, grabEvents),
  setProd,
  jekyll,
  buildAssets,
  copyAssets);
