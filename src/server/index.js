/* eslint-disable n/no-deprecated-api */

require('@babel/register')({ extensions: ['.js', '.ts', '.tsx'] })

const { Module } = require('module')
Module._extensions['.png'] = function () {}
Module._extensions['.gif'] = function () {}
Module._extensions['.css'] = function () {}

require('./app.ts')
