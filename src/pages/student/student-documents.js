// ** React Imports
import React, { useEffect, useState } from 'react'

// ** axios
import axios from 'axios'

// ** MUI Imports
import { Box, Button, Card, Chip, Divider, Grid, Tab, Typography } from '@mui/material'

// ** MDI Imports
import Icon from '@mdi/react'
import { mdiFileDocumentCheckOutline } from '@mdi/js'

// ** Custom Components
import Cookies from 'js-cookie'

const StudentDocumentPage = ({ documentStudent, lastedSemesterYear }) => {
  const jwtUsername = Cookies.get('._jwtUsername')
  const [dataStudent, setDataStudent] = useState([])
  const [dataFile, setDataFile] = useState(documentStudent)

  console.log('tes: ', lastedSemesterYear)

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_BACKEND)
    const dataJwt = { username: jwtUsername }
    axios
      .post('http://localhost:3200/api/getDataStudent', dataJwt)
      .then(res => {
        setDataStudent(res.data.data[0])
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }, [])

  const getFilesStudent = async student_id => {
    axios
      .post('http://localhost:3200/api/getFileStudent', { student_id: student_id })
      .then(res => {
        console.log('resA: ', res.data.data)
        setDataFile(dataFile =>
          dataFile.map(item => {
            const matchingDoc = res.data.data.find(doc => doc.doc_type === item.id)

            return matchingDoc ? { ...item, fileName: matchingDoc.doc_filename, status: matchingDoc.doc_version } : item
          })
        )
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }

  useEffect(() => {
    getFilesStudent(dataStudent.Id)
  }, [dataStudent])

  const handleFileUpload = async (e, typeID) => {
    const file = e.target.files[0]

    console.log('file: ', file)

    // ? รอดึงข้อมูลนักศึกษา
    const uploadFile = {
      student_id: dataStudent.Id,
      doc_filename: `${dataStudent.stu_id}_Document_${typeID}.pdf`,
      doc_filepath: 'public/documents/',
      doc_semester: lastedSemesterYear.lsy_semester,
      doc_year: lastedSemesterYear.lsy_year,
      doc_type: typeID,
      doc_version: 1
    }

    console.log('uploadFile: ', uploadFile)

    // const resApiBackend = await axios.post('http://localhost:3200/api/uploadFile', uploadFile, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })

    // if (resApiBackend.status === 200) {
    //   console.log('success backend')
    // } else {
    //   console.log('error')
    // }

    // ? ต้องรัน server.js ก่อน
    const formData = new FormData()
    formData.append('pdf', file)
    formData.append('name', uploadFile.doc_filename)

    const response = await fetch('/api/upload-pdf', {
      method: 'PUT',
      body: formData
    })

    if (response.status === 200) {
      console.log('อัปโหลดไฟล์ PDF เรียบร้อยแล้ว')
    } else {
      console.log('เกิดข้อผิดพลาดในการอัปโหลดไฟล์ PDF')
    }

    // getFilesStudent(dataStudent.Id)
  }

  useEffect(() => {
    console.log('data: ', dataFile)
  }, [dataFile])

  const handleStatusValueChangeToText = statusValue => {
    switch (statusValue) {
      case 0:
        return null
      case 1:
        return 'อัพโหลดแล้ว รออนุมัติ'
    }
  }

  if (dataFile.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <Box>
      <Card>
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Icon path={mdiFileDocumentCheckOutline} size={6} />
            <Box sx={{ ml: 2 }}>
              <Typography variant='h4'>Document</Typography>
              <Typography variant='h6'>นักศึกษานำเอกสารเหล่านี้มาให้ อ.ตั้ม เซ็นต์อนุมัติโครงการ</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', p: 6 }}>
            <Typography variant='h6' sx={{ px: 2 }}>
              ปีการศึกษาที่เปิดให้ลงทะเบียน: {lastedSemesterYear.lsy_semester}/{lastedSemesterYear.lsy_year}
            </Typography>
          </Box>

          <Divider />
          <Box sx={{ p: 8 }}>
            <Grid container justifyContent='center' alignItems='center'>
              {dataFile.map(item => (
                <Grid
                  item
                  xs={12}
                  key={item.id}
                  sx={{ border: '1px solid #ccc', borderRadius: '10px', bgcolor: '#f5f5f5', marginBlock: 2, p: 2 }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='subtitle1' sx={{ fontSize: 18 }}>
                          อัพโหลดเอกสาร {item.name}
                        </Typography>

                        <Typography variant='subtitle1' noWrap>
                          {item.fileName ? item.fileName : 'ยังไม่ได้อัพโหลดไฟล์'}
                        </Typography>
                      </Box>
                      {item.status !== 0 && <Chip label={handleStatusValueChangeToText(item.status)} sx={{ mx: 2 }} />}
                    </Box>
                    <Box sx={{ justifyContent: 'space-between' }}>
                      <Button variant='contained' component='label' sx={{ mr: 2 }}>
                        Upload File
                        <input type='file' hidden onChange={e => handleFileUpload(e, item.id)} />
                      </Button>
                      <Button variant='contained' component='label' sx={{ mr: 4 }}>
                        Download File
                        <input type='file' hidden />
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

// SSR
export async function getServerSideProps() {
  const documentStudent = [
    {
      id: 1,
      name: 'สก.วศ.01_ฟอร์มโครงการพัฒนาทักษะวิชาชีพ',
      file: null,
      fileName: '',
      status: 0
    },
    {
      id: 2,
      name: 'สก.วศ.02_ใบสมัครข้อมูลนักศึกษา',
      file: null,
      fileName: '',
      status: 0
    },
    {
      id: 3,
      name: 'ใบทรานสคริปนักศึกษา (ภาษาอังกฤษ)',
      file: null,
      fileName: '',
      status: 0
    },
    {
      id: 4,
      name: 'สำเนาบัตรประชาชน (ลงนามเรียบร้อย)',
      file: null,
      fileName: '',
      status: 0
    }
  ]

  // ** Get lasted semester year
  const resSemesterYear = await axios.get('http://0.0.0.0:3200/api/getSemesterYear')
  const lastedSemesterYear = resSemesterYear.data.results[0]

  return {
    props: { documentStudent, lastedSemesterYear }
  }
}

export default StudentDocumentPage
