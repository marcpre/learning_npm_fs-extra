const fs = require('fs-extra')
const path = require("path")

const p = path.join(__dirname, '/../newDir')

fs.ensureDir(p, err => {
  console.log(err) // => null
  // dir has now been created, including the directory it is to be placed in
})