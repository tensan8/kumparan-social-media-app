/* eslint-disable n/no-deprecated-api */
// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register')({ extensions: ['.js', '.ts', '.tsx'] })

require.extensions['.png'] = function () {}
require.extensions['.jpg'] = function () {}
require.extensions['.jpeg'] = function () {}
require.extensions['.woff'] = function () {}
require.extensions['.woff2'] = function () {}
require.extensions['.ico'] = function () {}
require.extensions['.svg'] = function () {}
require.extensions['.gif'] = function () {}
require.extensions['.css'] = function () {}

require('./app.ts')
