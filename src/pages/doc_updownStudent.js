import { Box, Button, Card, CardContent, Grid, Input, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiFileDocumentCheckOutline } from '@mdi/js'
import axios from 'axios'

export default function doc_updownStudent() {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // const [file, setFile] = useState()

  // const HandleFile = event => {
  //   setFile(event.target.files[0])
  //   console.log(event.target.files[0])
  // }

  // const HandleOnUpload = () => {
  //   const formData = new FormData()
  //   formData.append('file', file)
  //   axios
  //     .post('http://localhost:3200/api/uploadfilepdf', formData)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', width: '100%', my: 6 }}>
                <Box>
                  <Icon path={mdiFileDocumentCheckOutline} size={6} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 6 }}>
                  <Typography variant='h4' sx={{ mb: 4 }}>
                    Document
                  </Typography>
                  <Typography variant='h6'> นักศึกษานำเอกสารเหล่านี้มาให้ อ.ตั้ม เซ็นต์อนุมัติโครงการ </Typography>
                </Box>
              </Box>
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                  <Tab value='1' label='Upload Document' />
                  <Tab value='2' label='Follow/Download Document ' />
                </TabList>
                <CardContent>
                  <TabPanel value='1' sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 6 }}>
                      <Typography variant='h5' sx={{ marginBottom: 2 }}>
                        Upload for cooperative students
                      </Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100%',
                          mb: 6,
                          ml: 20
                        }}
                      >
                        <Box sx={{ width: '33%' }}>
                          <Typography>สก.วศ.01_ฟอร์มโครงการพัฒนาทักษะวิชาชีพ</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}></Box>
                        <Box sx={{ width: '33%' }}>
                          <Input type='file'>Upload</Input>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>สก.วศ.02_ใบสมัครข้อมูลนักศึกษา</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Input type='file'>Upload</Input>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>ใบทรานสคริปนักศึกษา (ภาษาอังกฤษ)</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Input type='file'>Upload</Input>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>สำเนาบัตรประชาชน (ลงนามเรียบร้อย)</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Input type='file'>Upload</Input>
                        </Box>
                      </Box>
                      <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                        <Button>submit</Button>
                        <Button>cancel</Button>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value='2' sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 6 }}>
                      <Typography variant='h5' sx={{ marginBottom: 2 }}>
                        Document status
                      </Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100%',
                          mb: 6,
                          ml: 20
                        }}
                      >
                        <Box sx={{ width: '33%' }}>
                          <Typography>สก.วศ.01_ฟอร์มโครงการพัฒนาทักษะวิชาชีพ</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}></Box>
                        <Box sx={{ width: '33%' }}>
                          <Button>Status (เสร็จสมบูรณ์)</Button>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>สก.วศ.02_ใบสมัครข้อมูลนักศึกษา</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Button>Status (ยังไม่ได้ส่งเอกสาร)</Button>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>ใบทรานสคริปนักศึกษา (ภาษาอังกฤษ)</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Button>Status (กำลังดำเนินการ)</Button>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>สำเนาบัตรประชาชน (ลงนามเรียบร้อย)</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Button>Status (กำลังดำเนินการ)</Button>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 6, mt: 20 }}>
                      <Typography variant='h5' sx={{ marginBottom: 2 }}>
                        Download Documents for permission to practice cooperatives (signed)
                      </Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100%',
                          mb: 6,
                          ml: 20
                        }}
                      >
                        <Box sx={{ width: '33%' }}>
                          <Typography>สก.วศ.01_ฟอร์มโครงการพัฒนาทักษะวิชาชีพ</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}></Box>
                        <Box sx={{ width: '33%' }}>
                          <Button>Download</Button>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>สก.วศ.02_ใบสมัครข้อมูลนักศึกษา</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Button>Download</Button>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>ใบทรานสคริปนักศึกษา (ภาษาอังกฤษ)</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Button>Download</Button>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6, ml: 20 }}>
                        <Box sx={{ width: '33%' }}>
                          <Typography>สำเนาบัตรประชาชน (ลงนามเรียบร้อย)</Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          {/* <Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Typography> */}
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Button>Download</Button>
                        </Box>
                      </Box>
                    </Box>
                  </TabPanel>
                </CardContent>
              </TabContext>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
