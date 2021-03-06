# [create-callback][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Create callback api from synchronous function. Same as `make-callback`, but won't handle generators and if async function is given returns it.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i create-callback --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var fs = require('fs')
var createCallback = require('create-callback')

var parseJsonAsync = createCallback(JSON.parse)
var readFileAsync = createCallback(fs.readFileSync)
var readAsync = createCallback(fs.readFile)
var readFile = createCallback(fs.readFileSync)

readFileAsync('./package.json') //=> throws TypeError
readAsync('./package.json', 'utf8', function (err, res) {
  console.error(err) //=> null
  console.log(res) //=> content of 'package.json'
})
readFile('./package.json', 'utf8', function (err, res) {
  console.error(err) //=> null
  console.log(res) //=> content of 'package.json'
})
parseJsonAsync('{"foo":"bar"}', function (err, res) {
  console.error(err) //=> null
  console.log(res) //=> {foo: 'bar'}
})
```


## Related
- [always-promise](https://github.com/tunnckocore/always-promise): Create Bluebird Promise from given async or synchronous function. It automatically convert sync functions to async, then to promise.
- [always-callback](https://github.com/tunnckocore/always-callback): Create callback api for given sync function. Guarantee that given function (sync or async, no matter) will always have callback api and will handle errors correctly.
- [make-callback](https://github.com/tunnckocore/make-callback): Make synchronous function or generator to support callback api
- [handle-callback](https://github.com/hybridables/handle-callback): Make promise to have support for callback api, it returns promise in that same time.
- [handle-arguments](https://github.com/hybridables/handle-arguments): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow.
- [manage-arguments](https://github.com/tunnckocore/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov.
- [benz](https://github.com/tunnckocore/benz): Compose your control flow with absolute elegance. Support async/await, callbacks, thunks, generators, promises, observables, child processes and streams. Can power applications that need to have plugins. Useful for creating task, test and bench runners.
- [hybridify](https://github.com/hybridables/hybridify): Building hybrid APIs. You can use both callback and promise in same time.  Like `asyncFn(name, cb).then().catch()`
- [is-async-function](https://github.com/tunnckocore/is-async-function): Check that given function is async (callback) function or not. Trying to guess that based on check if `callback`, `cb`, `done` or `next` exists as function argument name.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/create-callback/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/create-callback
[npmjs-img]: https://img.shields.io/npm/v/create-callback.svg?label=create-callback

[license-url]: https://github.com/tunnckoCore/create-callback/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/create-callback
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/create-callback.svg

[travis-url]: https://travis-ci.org/tunnckoCore/create-callback
[travis-img]: https://img.shields.io/travis/tunnckoCore/create-callback.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/create-callback
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/create-callback.svg

[david-url]: https://david-dm.org/tunnckoCore/create-callback
[david-img]: https://img.shields.io/david/tunnckoCore/create-callback.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
