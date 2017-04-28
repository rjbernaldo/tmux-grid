'use strict';

const program = require('commander');
const jsyaml = require('js-yaml');
const packageJson = require('../package.json');
const fs = require('fs');
const config = '.tmux-grid.yml';
const encoding = 'utf8';

program
  .version(packageJson.version)
  .option('-c, --config [value]', 'specify alternate configuration file (default: .tmux-grid.yml)')
  .parse(process.argv);
  
if (program.config === true) return program.outputHelp();
  
fs.readFile(program.config || config, encoding, (err, configFile) => {
  if (err) return console.error(err.message);
  
  var parsedConfig;
  
  try {
    parsedConfig = jsyaml.load(configFile);
  } catch(e) {
    return console.error(e);
  }
  
  var commands = translateConfig(parsedConfig)
  
  // TODO: better help output
});

function translateConfig(config) {
  console.log(config)
  // TODO: convert config into commands
  // TODO: error handling for unknown commands
  
  
  return config;
}