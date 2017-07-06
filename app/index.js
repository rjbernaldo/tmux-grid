'use strict';

const program = require('commander');
const jsyaml = require('js-yaml');
const packageJson = require('../package.json');
const fs = require('fs');
const config = '.tmux-grid.yml';
const encoding = 'utf8';
const { exec } = require('child_process');

program
  .version(packageJson.version)
  .option('-c, --config [value]', 'specify alternate configuration file (default: .tmux-grid.yml)')
  .parse(process.argv);
  // TODO: better help output
  
if (program.config === true) return program.outputHelp();
  
fs.readFile(program.config || config, encoding, (err, configFile) => {
  if (err) return console.error(err.message);
  
  let parsedConfig;
  
  try {
    parsedConfig = jsyaml.load(configFile);
  } catch(e) {
    return console.error(e);
  }
  

  exec('echo $TMUX', (err, stdout, stderr) => {
    const config = translateConfig(parsedConfig)
    const commands = []

    if (stdout === '') commands.push('tmux');
    commands.push(config.command);

    exec(commands, (err, stdout, stderr) => {
      console.log(stdout);
    });
  });
});

function translateConfig(config) {
  // TODO: convert config into commands
  // TODO: error handling for unknown commands
  
  return config;
}