var fs = require('fs');
var gulp = require('gulp');
var path = require('path');

var processPath = './m47';
var DEFUNCT_MSG = 'This page is deprecated. It\'s contents have been moved to [Mozilla Developer Network](https://developer.mozilla.org/en-US/)\n\n';

function getFiles(dir) {
  return fs.readdirSync(dir)
  .filter(function(file) {
    return !fs.statSync(path.join(dir, file)).isDirectory();
  });
}

gulp.task('stamp', function() {
  var files = getFiles(processPath);
  for (var file in files) {
    filepath = path.join(processPath, files[file]);
    var contents = fs.readFileSync(filepath, "utf8")

    contents = DEFUNCT_MSG + contents;
    fs.writeFileSync(filepath, contents, "utf8");
  }
});
