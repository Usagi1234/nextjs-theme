const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  const upload = multer({ dest: 'public/documents/' })

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

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
