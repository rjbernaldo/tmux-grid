'use strict';

const commander = require('commander');
const packageJson = require('../package.json');
const program = commander.Command(packageJson.name)

program
  .version(packageJson.version)
  .on('--help', () => {
    console.log('Run tmux-grid inside a project directory with a .tmux-grid configuration file'):
  })