## Contributing to Missing Maps

Thanks for joining in on the development of Missing Maps. Below is a quick outline for how to either add an event, report an issue, edit content, or contribute code. 

### Adding Events

To add an event, edit the `/_data/events.csv` file and then make a pull request. 

When updating the csv of events: 

  - Use `yyyy-mm-dd` format for date. The year must be 4 digits (may need to adjust display settings in Microsoft Excel). Otherwise, 15 may be interpreted as 1915 instead of 2015.
  - Fields can be left blank if data does not exist or is TBD
  - Include the two letter country code to include the correct flag

Remember to use `yyyy-mm-dd` format for the date. Country codes use ISO 3166-1 Alpha-2 and can be looked up on the [ISO website](https://www.iso.org/obp/ui/#search/code/) or on [Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

### Report an Issue

Here's a quick list of things to consider before submitting an issue:

  - Please search for your issue before filing it: many bugs and improvements have already been reported
  - Write specifically what browser this is reported to be found in
  - Write out the steps to replicate the error: when did it happen? What did you expect to happen? What happened instead?
  - Please keep bug reports professional and straightforward: trust us, we share your dismay of software breaking.
  - For bonus points, enable web developer extensions and report the Javascript error message.
  - And when in doubt, be over-descriptive of the bug and how you discovered it.

### Editing Content

All content is contained within each page. To edit content, make edits to each `index.html`. 

  - Landing page: https://github.com/MissingMaps/missingmaps.github.io/blob/publish/app/index.html
  - About: https://github.com/MissingMaps/missingmaps.github.io/blob/publish/app/about/index.html
  - Contribute: https://github.com/MissingMaps/missingmaps.github.io/blob/publish/app/contribute/index.html
  - Host: https://github.com/MissingMaps/missingmaps.github.io/blob/publish/app/host/index.html

### Submitting Pull Requests

All pull requests should be proposed to the [`publish`](https://github.com/MissingMaps/missingmaps.github.io/tree/publish) branch. Travis CI manages rebuilds of the `publish` branch to the `master` branch. `master` is used by Github Pages. 

### Development 

#### Environment
To set up the development environment for this website, you'll need to install the following on your system:

- [Node and npm](http://nodejs.org/)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)
- Gulp ( $ npm install -g gulp )

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```
Will also run `bundle install`

#### Building locally

```
$ gulp serve
```
Compiles the compass files, javascripts, and launches the server making the site available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

The `_config-dev.yml` file will be loaded alongside `_config.yml`.

#### Other commands

Clean the compiled site. I.e. the `_site` folder
```
$ gulp clean
```

Compile the compass files, javascripts, and builds the jekyll site using `_config-dev.yml`.
Use this instead of ```gulp serve``` if you don't want to watch.
```
$ gulp
```

Compiles the site loading the `_config-prod.yml` alongside `_config.yml`. The javascript files will be minified.
```
$ gulp prod
```

### Managing the deploy process

Missing Maps uses the service Travis CI to manage the deployment process. Access to this service is available on Travis: https://travis-ci.org/MissingMaps/missingmaps.github.io. A Github account with admin access is required to make changes. 

Travis deployment settings are stored in the `.travis.yml` file. 

Travis performs the following to deploy: 

1. Installs required node modules
2. Builds the site running `gulp prod`
3. Deploys the built site by pushing the `_site` folder to the `master` branch. 


