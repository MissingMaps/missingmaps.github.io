/*
 * App configuration.
 *
 * Uses settings in config/production.js, with any properties set by
 * config/staging.js or config/local.js overriding them depending upon the
 * environment.
 *
 * This file should not be modified.  Instead, modify one of:
 *
 *  - config/production.js - production settings
 *  - config/staging.js - overrides to production settings for staging server
 *  - config/local.js - local (development) overrides to production settings.
 *    This last file is gitignored, so you can safely change it without
 *    polluting the repo.
 *
 *
 */

// var configurations = require('./config/*.js', {mode: 'hash'});
// var config = configurations[process.env.DS_ENV];
// var local = configurations.local || {};

// for (var p in config) {
//   module.exports[p] = config[p];
// }

// for (var p in local) {
//   module.exports[p] = local[p];
// }