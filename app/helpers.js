const jsyaml = require('js-yaml');

function translateConfig(configFile) {
  let config;

  try {
    config = jsyaml.load(configFile);
  } catch (e) {
    console.error(e);
  }

  if (!config || config === '') return new Error('Invalid configuration');

  return generateCommands(config);
}

module.exports = {
  translateConfig,
};

function generateCommands(config) {
  let commands = [];
  if (config.name) commands.push(`tmux rename-window ${config.name}`);

  if (!config.command) return new Error('Invalid configuration: command');
  if (config.command.indexOf('split-') > -1) {
    const c = config.command === 'split-v'
      ? 'tmux split-window -d'
      : 'tmux split-window -hd';

    commands.push(c);

    if (config.panes && config.panes.length > 0) {
      for (let i = 0; i < config.panes.length; i++) {
        const pane = config.panes[i];

        if (pane.size) {
          const s = pane.size / 100;
          const resizeCommand = config.command === 'split-v'
            ? `tmux resize-pane -y ${Math.floor(s * process.stdout.rows)}`
            : `tmux resize-pane -x ${Math.floor(s * process.stdout.columns)}`;

          commands.push(resizeCommand);
        }

        commands = commands.concat(generateCommands(pane));

        const nc = config.command === 'split-v'
          ? 'tmux select-pane -D'
          : 'tmux select-pane -R';

        commands.push(nc);
      }
    } else {
      return new Error('Invalid configuration: panes');
    }
  } else {
    commands.push(`tmux send-keys "${config.command}" Enter`);
  }

  return commands;
}
