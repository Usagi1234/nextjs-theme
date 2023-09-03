const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const next = require('next')
const fs = require('fs')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  const upload = multer({ dest: 'public/documents/' })

  // ** อัปโหลดไฟล์ PDF
  server.put('/api/upload-pdf', upload.single('pdf'), (req, res) => {
    const { originalname, path } = req.file
    const newName = req.body.name // รับชื่อจากข้อมูล POST

    if (!newName) {
      return res.status(400).json({ message: 'กรุณาใส่ชื่อ' })
    }

    const newPath = `public/documents/${newName}.pdf` // เปลี่ยนชื่อไฟล์ PDF

    fs.rename(path, newPath, err => {
      if (err) {
        console.error('เกิดข้อผิดพลาดในการย้ายไฟล์:', err)

        return res.status(500).send('เกิดข้อผิดพลาดในการอัปโหลดไฟล์')
      }

      return res.status(200).json({ message: 'อัปโหลดไฟล์ PDF เรียบร้อยแล้ว' })
    })
  })

  // ** ดาวน์โหลดไฟล์ PDF
  server.get('/api/download-pdf/:fileName', (req, res) => {
    const fileName = req.params.fileName

    // Define the path to the PDF file
    const filePath = path.join(__dirname, 'public/documents/', fileName + '.pdf')

    console.log('filePath: ', filePath)

    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Send the file as a download
      res.download(filePath, fileName, err => {
        if (err) {
          console.error('Error while downloading file:', err)
          res.status(500).json({ message: 'Error while downloading file' })
        }
      })
    } else {
      // If the file does not exist, send a 404 response
      res.status(404).json({ message: 'File not found' })
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
