#!/usr/bin/env node
'use strict';

var currentNodeVersion = process.versions.node.split('.')[0];
if (currentNodeVersion < 4) {
  console.error(`tmux-grid requires Node 4 or higher`);
}

require('./app');
