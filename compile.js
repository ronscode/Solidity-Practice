const path = require('path'); // used to generate a valid path on Windows or Unix
const fs = require('fs'); // 
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // path to the root folder
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1);


