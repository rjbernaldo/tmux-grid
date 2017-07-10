const jsyaml = require('js-yaml');

function translateConfig(configFile) {
  let config;

  try {
    config = jsyaml.load(configFile);
  } catch (e) {
    console.error(e);
  }

  if (!config || config === '') return new Error('Invalid configuration');

  const commands = [];
  commands.push(`tmux rename-window ${config.name}`);
  if (config.command === 'split-v') {
    commands.push('tmux split-window -d');
  }
  commands.push(config.command);

  return commands;
}

module.exports = {
  translateConfig,
};
