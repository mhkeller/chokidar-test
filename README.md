chokidar test
===

## The problem

When this script runs locally on MacOs 10.11.6, it correctly outputs the following

```js
{
  '/Users/redacted/test/chokidar-test/files': [ 'subdir', 'test.txt' ],
  '/Users/redacted/test/chokidar-test/files/subdir': [ 'file-2.txt' ]
}
```

When I run this on Travis, I get the following

```js
{
  '/home/travis/build/mhkeller/chokidar-test': [ 'files' ],
  '/home/travis/build/mhkeller/chokidar-test/files': [ 'subdir', 'test.txt' ],
  '/home/travis/build/mhkeller/chokidar-test/files/**/*': [],
  '/home/travis/build/mhkeller/chokidar-test/files/subdir': [ 'file-2.txt' ]
}
```

Travis results: https://travis-ci.org/mhkeller/chokidar-test/jobs/303238599
