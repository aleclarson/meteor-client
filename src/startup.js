
var Meteor = require('./meteor');

/**
 * @summary Run code when a client or a server starts.
 * @locus Anywhere
 * @param {Function} func A function to run on startup.
 */
Meteor.startup = function (cb) {
  cb();
};
