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

  // describe('when passed with config examples/sample2.yml');
  // describe('when passed with config examples/sample3.yml');
  // TODO: error handling for unknown commands
});
