const fs = require('fs');
const { translateConfig } = require('./helpers.js');

test('translateConfig', () => {
  const configFile = 'examples/sample2.yml';

  fs.readFile(configFile, (err, configFile) => {
    const commands = translateConfig(configFile);
    expect(commands).toBe(false);
  });
});
