// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Tab, Typography } from '@mui/material'

// ** MDI Imports
import Icon from '@mdi/react'
import { mdiFileDocumentCheckOutline } from '@mdi/js'
import { TabContext, TabList, TabPanel } from '@mui/lab'

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

const StudentDocumentPage = () => {
  const [tabValue, setTabValue] = useState(1)
  const [uploadFile, setUploadFile] = useState(null)

  const handleTabChange = (e, val) => {
    setTabValue(val)
  }

  const handleUpload = () => {}

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

          <Divider />
          <Box sx={{ p: 8 }}>
            <Grid container justifyContent='center' alignItems='center'>
              {DocumentStudent.map(item => (
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
                        <input type='file' hidden />
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

export default StudentDocumentPage
