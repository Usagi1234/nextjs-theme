// ** React Imports
import React, { useEffect, useState } from 'react'

// ** MUI Imports
import { Box, Button, Card, Chip, Divider, Grid, Tab, Typography } from '@mui/material'

// ** MDI Imports
import Icon from '@mdi/react'
import { mdiFileDocumentCheckOutline } from '@mdi/js'
import axios from 'axios'

// ** Custom Components
import Cookies from 'js-cookie'

const StudentDocumentPage = ({ DocumentStudents }) => {
  const [dataStudent, setDataStudent] = useState([])
  const [lastedSemesterYear, setLastedSemesterYear] = useState([])
  const username = Cookies.get('._jwtUsername')

  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/getDataStudent`, {
        username: username
      })
      .then(res => {
        setDataStudent(res.data[0])
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/getSemesterYear`)
      .then(res => {
        setLastedSemesterYear(res.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log('dataStudent: ', dataStudent)
  }, [dataStudent])

  const handleFileUpload = async (e, typeID) => {
    const file = e.target.files[0]

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

    const resApiBackend = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/uploadFile`, uploadFile, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    if (resApiBackend.status === 200) {
      console.log('success backend')
    } else {
      console.log('error')
    }

    // const formData = new FormData()
    // formData.append('file', file)
    // formData.append('newFilename', uploadFile.doc_filename)

    // const resApiFrontend = await axios.post('/api/uploadFile', formData)

    // if (resApiFrontend.status === 200) {
    //   console.log('success frontend')
    // } else {
    //   console.log('error')
    // }
  }

  useEffect(() => {
    console.log('up: ')
  }, [])

  if (dataStudent.length === 0) {
    return <div>loading...</div>
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
              ปีการศึกษาที่เปิดให้ลงสหกิจ: {lastedSemesterYear.lsy_semester}/{lastedSemesterYear.lsy_year}
            </Typography>
          </Box>

          <Divider />
          <Box sx={{ p: 8 }}>
            <Grid container justifyContent='center' alignItems='center'>
              {DocumentStudents.map(item => (
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
                      <Chip label={item.status} disabled={item.status === ''} sx={{ mx: 2 }} />
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
  const DocumentStudent = [
    {
      id: 1,
      name: 'สก.วศ.01_ฟอร์มโครงการพัฒนาทักษะวิชาชีพ',
      file: null,
      fileName: 'test.pdf',
      status: 'รออนุมัติ'
    },
    {
      id: 2,
      name: 'สก.วศ.02_ใบสมัครข้อมูลนักศึกษา',
      file: null,
      fileName: 'test.pdf',
      status: 'รออนุมัติ'
    },
    {
      id: 3,
      name: 'ใบทรานสคริปนักศึกษา (ภาษาอังกฤษ)',
      file: null,
      fileName: 'test.pdf',
      status: 'รออนุมัติ'
    },
    {
      id: 4,
      name: 'สำเนาบัตรประชาชน (ลงนามเรียบร้อย)',
      file: null,
      fileName: 'test.pdf',
      status: 'รออนุมัติ'
    }
  ]

  return {
    props: { DocumentStudents: DocumentStudent }
  }
}

export default StudentDocumentPage
