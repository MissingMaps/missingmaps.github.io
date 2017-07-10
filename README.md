## [Missing Maps](http://www.missingmaps.org/)

### Adding events

Events are managed in the events.csv in the [events](https://github.com/MissingMaps/events) repo. Please update all new events there. Be sure to follow the instructions in the [Readme](https://github.com/MissingMaps/events/blob/master/README.md).

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

## Development

### Environment
To set up the development environment for this website, you'll need to install the following on your system:

- [Node and npm](http://nodejs.org/)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)
- Gulp ( $ npm install -g gulp )

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```
Will also run `bundle install`

### Getting started

```
$ gulp serve
```
Compiles the compass files, javascripts, and launches the server making the site available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

The `_config-dev.yml` file will be loaded alongside `_config.yml`.

### Other commands
Clean the compiled site. I.e. the `_site` folder
```
$ gulp clean
```

Compile the compass files, javascripts, and builds the jekyll site using `_config-dev.yml`.
Use this instead of ```gulp serve``` if you don't want to watch.
```
$ gulp
```

Compiles the site loading the `_config-stage.yml` alongside `_config.yml`. The javascript files will be minified.
```
$ gulp stage
```

Compiles the site loading the `_config-prod.yml` alongside `_config.yml`. The javascript files will be minified.
```
$ gulp prod
```
