const fs = require('fs-extra')
const path = require("path")

const p = path.join(__dirname, '/../tmp')

fs.emptyDir(p, err => {
  if (err) return console.error(err)

  console.log('success!')
})