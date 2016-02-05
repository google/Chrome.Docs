var AVAILABLE = "# %s\n\nIssue: [%s](%s)\n\n[MDN documentation is already available]() for this feature. An appropriate Chrome version numnber will be added when this featuere reaches a stable release.";
var CODEPATH = "https://bugs.chromium.org/p/v8/issues/detail?id="
var CR_CODEPATH = "https://code.google.com/p/chromium/issues/detail?id=%s";
var DEFUNCT_MSG = 'This page is deprecated. It\'s contents have been moved to [Mozilla Developer Network](https://developer.mozilla.org/en-US/)\n\n';

module.exports = {
	available: AVAILABLE,
	codepath: CODEPATH,
	crcodepath: CR_CODEPATH,
	defunct: DEFUNCT_MSG
};