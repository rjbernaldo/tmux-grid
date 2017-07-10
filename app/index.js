#!/usr/bin/env node

'use strict';

const program = require('commander');
const fs = require('fs');
const { exec } = require('child_process');

const packageJson = require('../package.json');
const { translateConfig } = require('./helpers')

program
  .version(packageJson.version)
  .option('-c, --config [value]', 'specify alternate configuration file (default: .tmux-grid.yml)')
  .parse(process.argv);
  // TODO: better help output
  
if (program.config === true) return program.outputHelp();
  
fs.readFile(program.config || '.tmux-grid.yml', 'utf8', (err, configFile) => {
  if (err) return console.error(err.message);

  const commands = translateConfig(configFile)
  
  exec('echo $TMUX', (err, stdout, stderr) => {
    if (stdout === '') commands.unshift('tmux');

    (function next(commands, i) {
      console.log(commands[i]);
      if (commands[i]) {
        exec(commands[i], (err, stdout, stderr) => {
          console.log(stdout);
          // TODO: Catch errors
          setTimeout(() => {
            next(commands, ++i);
          }, 0);
        });
      }
    })(commands, 0);
  });
});

