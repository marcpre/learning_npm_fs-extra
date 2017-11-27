const fs = require('fs-extra')
const path = require("path")

const p = path.join(__dirname, '/../')

// Async with promises:
fs.copy(p + 'data/testFile.js', p + 'tmp/testFileCopy.js')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))
 