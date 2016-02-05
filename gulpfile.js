var argv = require('yargs').argv;
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var strings = require('./strings.js');
var util = require('util');

function getFiles(dir) {
  return fs.readdirSync(dir)
  .filter(function(file) {
    return !fs.statSync(path.join(dir, file)).isDirectory();
  });
}

gulp.task('stamp', function() {
  var processPath = String(argv.atPath);

  var files = getFiles(processPath);
  for (var file in files) {
    filepath = path.join(processPath, files[file]);
    var contents = fs.readFileSync(filepath, "utf8")

    contents = strings.defunct + contents;
    fs.writeFileSync(filepath, contents, "utf8");
  }
});

gulp.task('makepage', function() {
  var title = String(argv.title);
  var outPath = String(argv.atPath);
  //var issue = String(argv.issue);
  var issue = (argv.crissue ? String(argv.crissue) : String(argv.issue));
  var issuePath = util.format(strings.codepath, issue);
  var fileName = (argv.fileName ? String(argv.fileName) : title )
  fileName = ((fileName.indexOf(".md")==-1) ? (fileName + ".md") : fileName)
  outPath = path.join(outPath, fileName);

  var contents = util.format(strings.available, title, issue, issuePath)
  fs.writeFileSync(outPath, contents, "utf8")
});
