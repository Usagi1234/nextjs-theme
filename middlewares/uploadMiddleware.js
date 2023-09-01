const multer = require('multer')
const path = require('path')

// Set up the storage engine and define where uploaded files should be stored
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, '../public/documents'))
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const extname = path.extname(file.originalname) // Get the file extension
    const newFileName = file.fieldname + '-' + uniqueSuffix + extname
    callback(null, newFileName)
  }
})

// Create the multer instance
const upload = multer({ storage })

module.exports = upload
