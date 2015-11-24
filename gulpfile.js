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

gulp.task('stamp', function(callback) {
  var files = getFiles(processPath);
  for (var file in files) {
    filePath = path.join(processPath, files[file])
    fs.readFile(filePath, 'utf8', function(error, contents) {
      if (error) {
        console.log("Failed to read file ", files[file]);
      }
      contents = DEFUNCT_MSG + contents;
      fs.writeFile(filePath, contents, function(error,value) {
        if (error) {
          console.log("Encountered ", error, " writing ", files[file]);
        };
      })
    });
  }
});