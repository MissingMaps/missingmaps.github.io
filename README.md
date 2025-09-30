## [Missing Maps](http://www.missingmaps.org/)

### Adding events

Events have been deprecated and no longer show on the site.

### Adding Blog Post

Blog posts are managed in the [blog](https://github.com/MissingMaps/blog) repo. Add a post following the instructions in the [Readme](https://github.com/MissingMaps/blog/blob/master/README.md).

### Updating 'Mapathon Materials' zip folder

During the regularly occurring site build process, any files in the `app/assets/downloads/mapathon-materials/` folder will be zipped together and made available for download at http://www.missingmaps.org/assets/downloads/mapathon-materials.zip. Make sure the file at `host.materials_list[0].asset` in each `app/_data/{{language_code}}.yml` file exists in the `downloads` folder (e.g. `mapathon-materials/english/How_to_Host_a_Mapathon_EN.pdf`).

### Adding Language support

The site is configured to support 2-letter core language codes. So english is 'en' not 'en-US' and/or 'en-GB'. Using a longer code will not function.

There are four main steps in incorporating a language:

1. tell app config the language exists
    1. add 2-letter language code to ```authorized_locales``` array in \_config.yml
2. include locale file (to support date/time localization)
    1. several already in place (in \_locales dir), otherwise get from [here](https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale)
3. include \_data/```2-letter code```.yml to support site content translations
    1. copy \_data/en.yml, then update text values
    2. note that the url for the nav items can be updates for your language. this needs to align with the permalink in the page frontmatter (see item 4.2 below)
4. create folder of page templates
    1. copy 'en' dir, rename copy as your 2-letter language code
    2. in frontmatter for all templates there within, you need to add the language code and pagename to the ```permalink``` (i.e. /about/ becomes /fr/apropos/ for the french translation)
5. create folder of blog posts
    1. copy the \_posts/en dir, rename folder as your 2-letter language code
    2. in frontmatter for all templates there within, you need to change the ```language``` to the correct code and add the language code to the ```permalink``` (i.e. /blog/:year/:month/:day/:title/ becomes /fr/blog/:year/:month/:day/:title/ for the french translation)
6. (OPTIONAL) Add translations of pdf assets
    1. add documents to assets/downloads
    2. update \_data/```2-letter code```.yml host.materials_list.asset(s) with the filename you created

If the Jeykll build is failing when parsing one of the `/app/_data/*.yml` files, it can be useful to install and use [`yamllint`](https://yamllint.readthedocs.io/en/stable/). Running, for example, `yamllint ./app/_data/fr.yml` will output a large number of errors but you can find the critical ones base on the description, such as:
```
  138:73    error    syntax error: expected <block end>, but found '<scalar>' (syntax)
```

## Development

### Environment
To set up the development environment for this website, you'll need to install the following on your system:

- [Node and npm](http://nodejs.org/) (version in `.nvmrc` file - currently Node.js 20+)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/) (version in `.ruby-version` file)
- Gulp

```bash
$ gem install bundler -v 2.6.9
$ npm install -g gulp-cli
```

After these basic requirements are met, run the following commands in the website's folder:
```bash
$ npm install
$ bundle install
```

If you get a `jekyll-4.0.0 requires rubygems version >= 2.7.0, which is incompatible with the current version` error then try running: `gem update --system`

### Getting started

```bash
$ npm run serve
# or
$ gulp serve
```
Compiles the compass files, javascripts, and launches the server making the site available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

### Other commands

Build for production:
```bash
$ npm run build
# or
$ gulp prod
```

Clean the compiled site:
```bash
$ npm run clean
# or  
$ gulp clean
```

Run tests and linting:
```bash
$ npm test
$ npm run lint
```

## CI/CD

### GitHub Actions
This project uses GitHub Actions for continuous integration and deployment, replacing the previous Travis CI setup.

**Workflows:**
- **CI/CD Pipeline** (`.github/workflows/deploy.yml`): Builds and deploys to GitHub Pages on `publish` branch
- **Pull Request Tests** (`.github/workflows/test.yml`): Runs tests on all PRs
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
