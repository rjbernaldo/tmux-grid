const fs = require('fs');
const { translateConfig } = require('./helpers.js');

describe('translateConfig', () => {
  describe('when passed with a valid config', () => {
    const configFile = 'examples/sample2.yml';

    it('should return json', () => {
      fs.readFile(configFile, (err, config) => {
        const commands = translateConfig(config);
        expect(commands).toBe(false);
      });
    });
  });

  describe('when passed with an invalid config', () => {
    it('should respond with an error', () => {
      const commands = translateConfig('');
      expect(commands.message).toBe('Invalid configuration');
    });
  });
});
