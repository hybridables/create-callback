/*!
 * create-callback <https://github.com/tunnckoCore/create-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var createCallback = require('./index')

test('create-callback:', function () {
  test('should throw TypeError if return function dont have callback', function (done) {
    function fixture () {
      var readFileAsync = createCallback(fs.readFileSync)
      readFileAsync('./package.json')
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /create-callback: async function expect a callback/)
    done()
  })
  test('should handle errors thrown from given sync function', function (done) {
    var parseJsonAsync = createCallback(JSON.parse)

    parseJsonAsync('foo', function (err, res) {
      test.ifError(!err)
      test.equal(res, undefined)
      test.equal(err instanceof SyntaxError, true)
      test.equal(err.message, 'Unexpected token o')
      done()
    })
  })
  test('should handle errors from given async function', function (done) {
    var readFileAsync = createCallback(fs.readFile)

    readFileAsync('./not-existing-file', 'utf8', function (err, str) {
      test.ifError(!err)
      test.equal(str, undefined)
      test.equal(err.code, 'ENOENT')
      done()
    })
  })
  test('should create async function from fs.readFileSync function', function (done) {
    var readFile = createCallback(fs.readFileSync)

    readFile('./package.json', 'utf8', function (err, str) {
      var json = JSON.parse(str)
      test.ifError(err)
      test.equal(json.name, 'create-callback')
      done()
    })
  })
  test('should create async function from JSON.parse function', function (done) {
    var parseJsonAsync = createCallback(JSON.parse)

    parseJsonAsync('{"foo":"bar"}', function (err, res) {
      test.ifError(err)
      test.deepEqual(res, {foo: 'bar'})
      done()
    })
  })
  test('should directly return the given async function', function (done) {
    var readFileAsync = createCallback(fs.readFile)

    readFileAsync('./package.json', 'utf8', function (err, str) {
      var json = JSON.parse(str)
      test.ifError(err)
      test.equal(json.name, 'create-callback')
      done()
    })
  })
})
