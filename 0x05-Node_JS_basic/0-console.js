const process = require('process');

function displayMessage (string) {
  process.stdout.write(string);
}

module.exports = displayMessage;