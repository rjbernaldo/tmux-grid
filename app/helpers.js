function translateConfig(config) {
  console.log(config);
  // TODO: error handling for unknown commands
  const commands = []

  if (config.panes && config.panes.length % 2 === 0) {
    // console.log(config.panes);
  }

  commands.push(config.command);

  return commands;
}

module.exports = {
  translateConfig,
};
