import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import Icon from '@mdi/react'
import { mdiAccountMultiple } from '@mdi/js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
import Modal from '@mui/material/Modal'

export default function bo_Teacher_manage() {
  const intialTea = {
    tea_name: '',
    tea_lname: '',
    tea_status: '',
    tea_tel: '',
    curriculum_name: ''
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
  }

  const [rowDataTeacher, setRowDataTeacher] = useState('')
  const [dataTeacher, setDataTeacher] = useState(intialTea)

  const [colorChangeTc, setColorChangeTc] = useState({
    tea_name: false,
    tea_lname: false,
    tea_status: false,
    tea_tel: false,
    curriculum_name: false
  })

  const [openTc, setOpenTc] = useState(false)
  const handleOpen = () => setOpenTc(true)
  const handleClose = () => {
    setOpenTc(false)
  }

  const columns = [
    { field: 'tea_name', headerName: 'id', width: 150 },
    { field: 'tea_lname', headerName: 'Name', width: 100 },
    { field: 'tea_status', headerName: 'Last Name', width: 120 },
    { field: 'tea_tel', headerName: 'curriculum', width: 150 },
    { field: 'curriculum_name', headerName: 'Study Group', width: 200 },
    {
      field: 'Edit',
      headerName: 'Edit',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => (
        <Button
          variant='text'
          onClick={() => {
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  useEffect(() => {
    axios.post('http://localhost:3200/api/v1/teacher').then(res => {
      setRowDataTeacher(res.data.data)
    })
  }, [])

  useEffect(() => {
    console.log(dataTeacher)
  }, [dataTeacher])

  const HandleChange = (event, type) => {
    if (type === 'tea_name') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataTeacher.tea_name !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColorChangeTc(pre => ({ ...pre, tea_name: false }))
      }
      setDataTeacher(pre => ({ ...pre, tea_name: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    } else if (type === 'tea_lname') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataTeacher.tea_lname !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColorChangeTc(pre => ({ ...pre, tea_lname: false }))
      }
      setDataTeacher(pre => ({ ...pre, tea_lname: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    } else if (type === 'tea_status') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataTeacher.tea_status !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColorChangeTc(pre => ({ ...pre, tea_status: false }))
      }
      setDataTeacher(pre => ({ ...pre, tea_status: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    } else if (type === 'tea_tel') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataTeacher.tea_tel !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColorChangeTc(pre => ({ ...pre, tea_tel: false }))
      }
      setDataTeacher(pre => ({ ...pre, tea_tel: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    } else if (type === 'curriculum_name') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataTeacher.curriculum_name !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColorChangeTc(pre => ({ ...pre, curriculum_name: false }))
      }
      setDataTeacher(pre => ({ ...pre, curriculum_name: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    }
  }

  const HandleOnInsTc = () => {
    if (
      dataTeacher.tea_name !== '' &&
      dataTeacher.tea_lname !== '' &&
      dataTeacher.tea_status !== '' &&
      dataTeacher.curriculum_name !== '' &&
      dataTeacher.tea_tel !== ''
    ) {
      axios
        .post('http://localhost:3200/api/v1/insertteacher')
        .then(res => {})
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex', my: 6 }}>
                <Box>
                  <Icon path={mdiAccountMultiple} size={6} />
                </Box>
                <Box>
                  <Typography variant='h5'>Management Teacher</Typography>
                  <Typography variant='subtitle1'>Management Teacher</Typography>
                </Box>
              </Box>
              <Box>
                <Button onClick={() => handleOpen()}>Insert Instructor</Button>
              </Box>
              <Box>
                <DataGrid rows={rowDataTeacher} columns={columns} getRowId={row => row.tea_id} />
                <Modal
                  open={openTc}
                  onClose={handleClose}
                  aria-labelledby='modal-modal-title'
                  aria-describedby='modal-modal-description'
                >
                  <Box sx={style}>
                    <Card>
                      <CardHeader title='Insert Student' titleTypographyProps={{ variant: 'h6' }} />
                      <CardContent>
                        <form onSubmit={e => e.preventDefault()}>
                          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: 6 }}>
                            <Box sx={{ p: 4 }}>
                              <Typography>Teacher Name :</Typography>
                            </Box>
                            <Box sx={{ width: '30%' }}>
                              <Grid container spacing={5}>
                                <Grid item xs={12}>
                                  <TextField
                                    fullWidth
                                    label='Teacher Name'
                                    onChange={event => HandleChange(event, 'tea_name')}
                                    error={colorChangeTc.tea_name}
                                  />
                                </Grid>
                              </Grid>
                            </Box>
                            <Box sx={{ p: 4, ml: 6 }}>
                              <Typography>Teacher Last Name :</Typography>
                            </Box>
                            <Box sx={{ width: '30%' }}>
                              <Grid container spacing={5}>
                                <Grid item xs={12}>
                                  <TextField
                                    fullWidth
                                    label='Teacher Last Name'
                                    onChange={event => HandleChange(event, 'tea_lname')}
                                    error={colorChangeTc.tea_lname}
                                  />
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: 6 }}>
                            <Box sx={{ p: 4 }}>
                              <Typography>Status :</Typography>
                            </Box>
                            <Box sx={{ width: '30%' }}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} sm={12}>
                                  <TextField
                                    fullWidth
                                    label='Teacher Name'
                                    onChange={event => HandleChange(event, 'tea_status')}
                                    error={colorChangeTc.tea_status}
                                  />
                                </Grid>
                              </Grid>
                            </Box>
                            <Box sx={{ p: 4, ml: 6 }}>
                              <Typography>Curriculum :</Typography>
                            </Box>
                            <Box sx={{ width: '30%' }}>
                              <Grid container spacing={5}>
                                <Grid item xs={12}>
                                  <TextField
                                    fullWidth
                                    label='Tel'
                                    onChange={event => HandleChange(event, 'curriculum_name')}
                                    error={colorChangeTc.curriculum_name}
                                  />
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: 6 }}>
                            <Box sx={{ p: 4, ml: 6 }}>
                              <Typography>Tel :</Typography>
                            </Box>
                            <Box sx={{ width: '30%' }}>
                              <Grid container spacing={5}>
                                <Grid item xs={12}>
                                  <TextField
                                    fullWidth
                                    label='Tel'
                                    onChange={event => HandleChange(event, 'tea_tel')}
                                    error={colorChangeTc.tea_tel}
                                  />
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box>
                            <Button type='submit' variant='contained' size='large'>
                              submit
                            </Button>
                            <Button>Cancel</Button>
                          </Box>
                        </form>
                      </CardContent>
                    </Card>
                  </Box>
                </Modal>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
