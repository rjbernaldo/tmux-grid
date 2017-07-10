const fs = require('fs');
const { translateConfig } = require('./helpers.js');

describe('translateConfig', () => {
  describe('when passed with a valid config', () => {
    it('should return an array', () => {
      const commands = translateConfig('name: test\ncommand: ls');
      expect(Array.isArray(commands)).toBe(true);
    });
  });

  describe('when passed with an invalid config', () => {
    it('should respond with an error', () => {
      const commands = translateConfig('');
      expect(commands.message).toBe('Invalid configuration');
    });
  });

  describe('when passed with config examples/sample1.yml', () => {
    const configFile = 'examples/sample1.yml';

    it('should return appropriate commands', (done) => {
      fs.readFile(configFile, (err, config) => {
        const commands = translateConfig(config);
        expect(Array.isArray(commands)).toBe(true);
        expect(commands[0]).toBe('tmux rename-window sample1');
        expect(commands[1]).toBe('ls');
        done();
      });
    });
  });

  describe('when passed with config examples/sample2.yml', () => {
    const configFile = 'examples/sample2.yml';

    it('should return appropriate commands', (done) => {
      fs.readFile(configFile, (err, config) => {
        const commands = translateConfig(config);
        expect(Array.isArray(commands)).toBe(true);
        expect(commands[0]).toBe('tmux rename-window sample2');
        expect(commands[1]).toBe('tmux split-window -d');
        expect(commands[2]).toBe('tmux split-window -hd');
        expect(commands[3]).toBe('something1');
        expect(commands[4]).toBe('tmux select-pane -R');
        expect(commands[5]).toBe('something2');
        expect(commands[6]).toBe('tmux select-pane -R');
        expect(commands[7]).toBe('tmux select-pane -D');
        expect(commands[8]).toBe('tmux split-window -hd');
        expect(commands[9]).toBe('something3');
        expect(commands[10]).toBe('tmux select-pane -R');
        expect(commands[11]).toBe('something4');
        expect(commands[12]).toBe('tmux select-pane -R');
        expect(commands[13]).toBe('tmux select-pane -D');
        done();
      });
    });
  });

  // describe('when passed with config examples/sample3.yml');
  // TODO: error handling for unknown commands
});
