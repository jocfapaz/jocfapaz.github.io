const fs = require('fs');

const candidates = [
  process.env.EDGE_BIN,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);

const edgeBinary = candidates.find((candidate) => fs.existsSync(candidate));

if (!process.env.CHROME_BIN) {
  if (!edgeBinary) {
    throw new Error('No se encontró Microsoft Edge. Define EDGE_BIN o CHROME_BIN.');
  }

  process.env.CHROME_BIN = edgeBinary;
}

module.exports = require('./karma.conf.cjs');
