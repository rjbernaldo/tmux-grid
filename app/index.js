'use strict';

const program = require('commander');
const packageJson = require('../package.json');
const fs = require('fs');
const config = '.tmux-grid.yml';
const encoding = 'utf8';

program
  .version(packageJson.version)
  .option('-c, --config [value]', 'specify alternate configuration file (default: .tmux-grid.yml)')
  .parse(process.argv);
  
if (program.config === true) return program.outputHelp();
  
fs.readFile(program.config || config, encoding, (err, parsedConfig) => {
  if (err) return console.error(err.message);
  
  var commands = translateConfig(parsedConfig)
  // TODO: error handling for unknown commands
  // TODO: better help output
  
  console.log(commands);
});

function translateConfig(config) {
  // TODO: convert config into commands
  config = config.split('\n');
  
  return config;
}