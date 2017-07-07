const jsyaml = require('js-yaml');

function translateConfig(configFile) {
  let config, error;

  try {
    config = jsyaml.load(configFile);
  } catch(e) {
    console.error(e);
  }

  if (!config || config === '') return new Error('Invalid configuration');

  const commands = [];

  if (config && config.panes && config.panes.length % 2 === 0) {
    // console.log(config.panes);
  }

  commands.push(config.command);

  return commands;
}

module.exports = {
  translateConfig,
};
