## [Missing Maps](http://www.missingmaps.org/)

### 📚 Documentation

- **[Quick Reference](./QUICK-REFERENCE.md)** - Essential commands and patterns for developers
- **[Internationalization Guide](./INTERNATIONALIZATION.md)** - Complete multilingual system documentation
- **[Test Suite](./test-multilingual.sh)** - Automated testing for multilingual functionality

### Adding events

Events have been deprecated and no longer show on the site.

### Adding Blog Post

Blog posts are managed in the [blog](https://github.com/MissingMaps/blog) repo. Add a post following the instructions in the [Readme](https://github.com/MissingMaps/blog/blob/master/README.md).

### Updating 'Mapathon Materials' zip folder

During the regularly occurring site build process, any files in the `app/assets/downloads/mapathon-materials/` folder will be zipped together and made available for download at http://www.missingmaps.org/assets/downloads/mapathon-materials.zip. Make sure the file at `host.materials_list[0].asset` in each `app/_data/{{language_code}}.yml` file exists in the `downloads` folder (e.g. `mapathon-materials/english/How_to_Host_a_Mapathon_EN.pdf`).

### Adding Language support

** The site uses Jekyll Polyglot for modern internationalization!**

📚 **Quick Start**: See [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) for essential commands and syntax

📖 **Complete Guide**: See [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md) for full documentation

#### Current Languages Supported
- **English** (`en`) - `/` (root)
- **French** (`fr`) - `/fr/`  
- **Spanish** (`es`) - `/es/`
- **Czech** (`cs`) - `/cs/`

#### Modern Architecture (Jekyll Polyglot)
The site now uses a **single set of templates** with **automatic language generation**:

- ✅ **13 centralized templates** (instead of 65+ duplicate files)
- ✅ **Automatic URL generation** for all languages  
- ✅ **Data-driven translations** via `_data/{lang}.yml` files
- ✅ **Testing suite** for multilingual functionality

#### Quick Language Addition
1. **Add language code** to `_config.yml`:
   ```yaml
   languages: ["en", "fr", "cs", "es", "de"]
   ```

2. **Create translation file** `_data/de.yml`:
   ```yaml
   about:
     title: "Über uns"
     # ... copy structure from _data/en.yml
   ```

3. **Test**: Run `./test-multilingual.sh` to verify

#### Testing Multilingual Functionality
```bash
./test-multilingual.sh    # Run comprehensive tests
npm run serve            # Start development server
```

If the Jeykll build is failing when parsing one of the `/app/_data/*.yml` files, it can be useful to install and use [`yamllint`](https://yamllint.readthedocs.io/en/stable/). Running, for example, `yamllint ./app/_data/fr.yml` will output a large number of errors but you can find the critical ones base on the description, such as:
```
  138:73    error    syntax error: expected <block end>, but found '<scalar>' (syntax)
```

## Development

### Environment
To set up the development environment for this website, you'll need to install the following on your system:

- **Node.js and npm** (version 20+ LTS - see `.nvmrc` file)
- **Ruby** (version 3.3+ - see `.ruby-version` file) and [Bundler](http://bundler.io/)
  - Recommended: Install via [rbenv](https://github.com/rbenv/rbenv) or [rvm](https://rvm.io/)

**Global dependencies:**
```bash
$ gem install bundler
$ npm install -g gulp-cli  # Optional - npm scripts work without global gulp
```

**Project setup:**
```bash
$ npm install    # Installs Node.js dependencies and automatically runs bundle install
$ bundle install # Installs Ruby gems (if not already run by npm install)
```

**Version managers (recommended):**
```bash
# For Node.js version management
$ nvm use        # Uses version specified in .nvmrc

# For Ruby version management  
$ rbenv install  # Installs version specified in .ruby-version
$ rbenv shell    # Activates the correct Ruby version
```

If you encounter a `jekyll-4.0.0 requires rubygems version >= 2.7.0` error, try: `gem update --system`

### Getting started

To build and serve the site locally with all assets:

```bash
$ npm run serve
```

This command will:
1. **Clean** previous builds
2. **Clone blog posts** from the blog repository
3. **Fetch events** data and helpers
4. **Build Jekyll** site with both `_config.yml` and `_config-dev.yml`
5. **Compile JavaScript** and process all scripts
6. **Process CSS/Styles** with modern dependencies
7. **Generate icons** and optimize images
8. **Create downloadable materials** (zip files)
9. **Copy assets** to the build directory
10. **Start Browsersync** server with file watching

The site will be available at:
- **Primary (Browsersync)**: `http://localhost:3000` - *Recommended for development*
- **Browsersync UI**: `http://localhost:3001` - Controls and sync options
- **Jekyll only**: `http://127.0.0.1:4000` - Basic Jekyll server

The system automatically watches files and rebuilds when changes are detected. The site will auto-refresh in your browser.

### Manual asset building

If you need to run specific build steps manually:

**Build all assets for production:**
```bash
$ npm run build
# Equivalent to: gulp prod
```

**Clean compiled assets:**
```bash
$ npm run clean
# Equivalent to: gulp clean
```

**Development build (same as serve but without server):**
```bash
$ npm run build:dev
# Equivalent to: gulp serve (without server)
```

### Code quality and testing

**Run full test suite:**
```bash
$ npm test
# Runs linting + production build to verify everything works
```

**Test multilingual functionality:**
```bash
$ ./test-multilingual.sh
# Comprehensive tests for Jekyll Polyglot system:
# - Build verification
# - Language directory structure  
# - Translation content verification
# - Feed generation verification
# - Asset exclusion verification
# - Polyglot configuration validation
```

**Lint JavaScript code:**
```bash
$ npm run lint          # Check for issues
$ npm run lint:fix      # Auto-fix issues where possible
```

### Troubleshooting

**Assets not loading properly:**
- Make sure you ran `npm run serve` (not just Jekyll)
- Check that both Gulp and Jekyll servers are running
- Use `http://localhost:3000` (Browsersync) instead of `http://127.0.0.1:4000` (Jekyll only)

**Build failures:**
- Try `npm run clean` then `npm run serve` to start fresh
- Ensure Node.js 20+ and Ruby 3.3+ are installed
- Check that all dependencies are up to date: `npm install && bundle install`

**Jekyll warnings about missing gems:**
- Run `bundle install` to ensure all Ruby gems are installed
- Check `.ruby-version` and use the correct Ruby version

## CI/CD

### GitHub Actions
This project uses GitHub Actions for continuous integration and deployment, replacing the previous Travis CI setup.

**Workflows:**
- **CI/CD Pipeline** (`.github/workflows/deploy.yml`): Builds and deploys to GitHub Pages on `publish` branch
- **Pull Request Tests** (`.github/workflows/test.yml`): Runs tests on all PRs
- **Multilingual Tests** (`.github/workflows/test-multilingual.yml`): Tests Jekyll Polyglot functionality
- **Security Checks** (`.github/workflows/security.yml`): Weekly security and dependency audits
- **Manual Deploy** (`.github/workflows/manual-deploy.yml`): On-demand deployments

**Automated Dependency Updates:**
- Dependabot is configured to automatically update npm, Ruby gems, and GitHub Actions
- Updates are scheduled weekly and automatically assigned to maintainers

**Deployment:**
- **Production**: Push to `publish` branch automatically deploys to GitHub Pages
- **Testing**: All PRs are automatically built and tested
- **Security**: Weekly scans for vulnerabilities and outdated dependencies

### Branch Strategy
- `publish`: Production deployment branch (auto-deploys to missingmaps.org)
- `main`/`master`: Main development branch
- Feature branches: Create PRs for review and testing
