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
  
fs.readFile(program.config || config, encoding, (err, data) => {
  if (err) return console.error(err.message);
  
  // TODO: app logic here
  // TODO: error handling for unknown commands
  // TODO: better help output
  // console.log(data);
});