/*!
 * create-callback <https://github.com/tunnckoCore/create-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isAsyncFn = require('is-async-function')
var handleArguments = require('handle-arguments')

module.exports = function createCallback (fn) {
  if (isAsyncFn(fn)) {
    return fn.bind(this)
  }

  var self = this
  return function _asyncFn_ () {
    var argz = handleArguments(arguments)

    if (!argz.callback) {
      throw new TypeError('create-callback: async function expect a callback')
    }

    var res = false
    try {
      res = fn.apply(self, argz.args)
    } catch (err) {
      return argz.callback.call(self, err)
    }

    argz.callback.apply(self, [null].concat(res))
  }
}
