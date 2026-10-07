const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('demo contract includes a health endpoint and release message', () => {
  const source = fs.readFileSync('server.js', 'utf8');
  assert.match(source, /\/health/);
  assert.match(source, /SAP BTP \+ GitHub CI\/CD demo is running/);
});
