#!/usr/bin/env node

"use strict"

/**
 * Module dependencies.
 */

let program = require('commander');

program
  .version('0.0.1');

// must be before .parse() since
// node's emit() is immediate

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ sabik module --help');
  console.log('');
});

program.parse(process.argv);

