const fs = require('fs');
const { translateConfig } = require('./helpers.js');

describe('translateConfig', () => {
  const configFile = 'examples/sample2.yml';

  it('should return json', () => {
    fs.readFile(configFile, (err, configFile) => {
      const commands = translateConfig(configFile);
      expect(commands).toBe(false);
    });
  });
});
