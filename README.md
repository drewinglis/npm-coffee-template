npm-coffee-template
===================

This is an example of how to set up a node module that is written in
CoffeeScript. Source code should live in `src/`, and will be compiled into
`lib/`. Tests should live in `test/`. There are prepublish and postinstall
tasks to make sure that everyone gets the correct compiled code for the module
when installing via npm. (The prepublish task requires make; the postinstall
task does not make any such assumptions.)

## License
This project is licensed under the MIT license, a copy of which may be found in
the LICENSE file.
