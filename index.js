var chokidar = require('chokidar')
var path = require('path')

var watchGlob = ['files/test.txt', 'files/subdir/file-2.txt']
var watcher = chokidar.watch(watchGlob, {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

var baseDir = path.resolve('./');


watcher.on('ready', function () {
  var watchList = watcher.getWatched()

  // var parts = watchGlob.split('/');
  // var preceedingDir = parts.findIndex(d => d.indexOf('*') > -1) - 1
  // console.log(parts[preceedingDir])

  // Object.keys(watchList).forEach(key => {
  //   var x = watchList[key]
  //   console.log(fullPathsToPrjPath(x), '#', x)
  // })


  console.log('watch list', watchList)
})

function fullPathsToPrjPath (filePaths) {
  // We were given an array of file paths, return an array
  // Otherwise return the converted string
  if (Array.isArray(filePaths)) {
    return filePaths.filter(d => d).map(convert);
  } else {
    return convert(filePaths);
  }

  // Do a string replacement on our `baseDir`, which is `/Users/my-name/code/project`, that replaces it with an empty string
  // Optionally remove a trailing slash if it exists
  function convert (filePath) {
    return filePath.replace(new RegExp(baseDir + '(\\' + path.sep + '?)'), '');
  }
};
