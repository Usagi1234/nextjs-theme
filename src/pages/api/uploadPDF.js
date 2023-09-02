import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Set up the storage engine and define where uploaded files should be stored
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, '../../../public/documents'))
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const extname = path.extname(file.originalname) // Get the file extension
    const newFileName = req.body.file_name + '-' + uniqueSuffix + extname
    callback(null, newFileName)
  }
})

// Create the multer instance with file size limit (20MB)
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 50 } // Set the limit to 20MB
})

export default async (req, res) => {
  try {
    // Use the upload middleware to handle the file upload
    upload.single('file')(req, res, err => {
      if (err) {
        return res.status(400).json({ error: 'File upload failed.' })
      }

      // Get the new filename from the request body (already used in filename function)
      const newFilename = req.file.filename

      return res.status(200).json({ message: 'File uploaded successfully.', newFilename })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
