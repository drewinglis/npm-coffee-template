/* This code is taken from ilkosta's static-jade-brunch project, and used under
 * the MIT License provided below:
 *
 * Copyright (c) 2012 Costantino Giuliodori
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

var exec = require('child_process').exec;
var sysPath = require('path');
var fs = require('fs');

var mode = process.argv[2];

var fsExists = fs.exists || sysPath.exists;

var execute = function(pathParts, params, callback) {
  if (callback == null) callback = function() {};
  var path = sysPath.join.apply(null, pathParts);
  var command = 'node ' + path + ' ' + params;
  console.log('Executing', command);
  exec(command, function(error, stdout, stderr) {
    if (error != null) return process.stderr.write(stderr.toString());
    console.log(stdout.toString());
  });
};

if (mode === 'postinstall') {
  fsExists(sysPath.join(__dirname, 'lib'), function(exists) {
    if (exists) return;
    execute(['node_modules', 'coffee-script', 'bin', 'coffee'], '-o lib/ src/');
  });
}
