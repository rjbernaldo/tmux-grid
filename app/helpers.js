const jsyaml = require('js-yaml');

function translateConfig(configFile) {
  let config;

  try {
    config = jsyaml.load(configFile);
  } catch(e) {
    return console.error(e);
  }

  // TODO: error handling for unknown commands
  const commands = [];

  if (config.panes && config.panes.length % 2 === 0) {
    console.log(config.panes);
  }

  commands.push(config.command);

  return commands;
}

module.exports = {
  translateConfig,
};
