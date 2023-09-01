import upload from '../../middleware/uploadMiddleware'

export default async (req, res) => {
  try {
    // Use the upload middleware to handle the file upload
    upload.single('file')(req, res, err => {
      if (err) {
        return res.status(400).json({ error: 'File upload failed.' })
      }

      // Get the new filename from the request body (assuming it's sent as 'newFilename')
      const newFilename = req.body.newFilename

      // Here, you can use 'newFilename' and 'req.file' (the uploaded file) as needed
      // For example, you can save the file with the new name
      const filePath = path.join(__dirname, '../public/documents', newFilename)
      fs.renameSync(req.file.path, filePath)

      return res.status(200).json({ message: 'File uploaded successfully.', newFilename })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
