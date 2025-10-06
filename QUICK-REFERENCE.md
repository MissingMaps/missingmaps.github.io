# Quick Reference: Jekyll Polyglot System

## Essential Commands

```bash
# Development
npm run serve                 # Start development server (localhost:3000)
bundle exec jekyll build     # Manual Jekyll build
npm test                     # Full test suite (linting + build)

# Asset management
npm run build                # Production build with all assets
npm run clean                # Clean compiled assets
npm run lint                 # Check JavaScript code quality

# Testing
./test-multilingual.sh       # Run comprehensive multilingual tests
```

## File Structure

```
app/
├── _data/
│   ├── en.yml              # English translations 
│   ├── fr.yml              # French translations
│   ├── es.yml              # Spanish translations
│   └── cs.yml              # Czech translations
├── _includes/
│   ├── get_locale.html     # Sets locale variable
│   └── header.html         # Language switcher
├── index.html              # Homepage template
├── about.html              # About page template
├── beginner.html           # Tutorial pages
├── validate.html           # Validation guides  
├── host.html               # Mapathon hosting
└── *.html                  # Other page templates (13 total)
```

## Basic Development Workflow

### 1. Start Development
```bash
npm run serve               # Starts Jekyll + Gulp + Browsersync
# Site available at: http://localhost:3000
```

### 2. Make Changes
- Edit templates in `/app/`
- Modify styles in `/app/assets/styles/`
- Update scripts in `/app/assets/scripts/`
- Auto-reload in browser when files change

### 3. Test Changes
```bash
npm test                    # Run full test suite
./test-multilingual.sh     # Test translation system
```

### 4. Build for Production
```bash
npm run build              # Create optimized production build
```

## Troubleshooting

### Build Failures
```bash
# Clean and rebuild
npm run clean && npm run serve

# Build with verbose output  
bundle exec jekyll build --trace --verbose

# Check dependencies
npm install && bundle install
```

### Server Issues
- Use `http://localhost:3000` (Browsersync) not `http://127.0.0.1:4000` (Jekyll only)
- Ensure both Node.js 20+ and Ruby 3.3+ are installed
- Check that all dependencies are up to date

## Documentation Links

- **[README.md](./README.md)** - Complete setup and development guide
- **[INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md)** - Translation system documentation
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contributor guidelines