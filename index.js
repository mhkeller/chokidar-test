var chokidar = require('chokidar')

var watcher = chokidar.watch('files/**/*', {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

watcher.on('ready', function () {
  var watchList = watcher.getWatched()
  console.log('watch list', watchList)
})
