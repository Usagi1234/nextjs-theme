import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Icon from '@mdi/react'
import { mdiChartBar } from '@mdi/js'
import CardContent from '@mui/material/CardContent'
import { useRouter } from 'next/router'

const bo_Student_manage = () => {
  const intial = {
    stu_id: '',
    stu_name: '',
    stu_lname: '',
    curriculum_id: '',
    studygroup_id: '',
    stu_rmail: '',
    stu_sex: ''
  }
  const [rowDataSt, setRowDataSt] = useState('')
  const [dataSt, setDataSt] = useState(intial)
  const [curriculumSt, setCurriculumSt] = useState([])
  const [studyGroupSt, setStudyGroupSt] = useState([])

  const [coloChange, setColoChange] = useState({
    stu_id: false,
    stu_name: false,
    stu_lname: false,
    curriculum_id: false,
    studygroup_id: false,
    stu_rmail: false,
    stu_sex: false
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setDataSt(intial)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
  }

  const columns = [
    { field: 'stu_id', headerName: 'id', width: 150 },
    { field: 'stu_name', headerName: 'Name', width: 100 },
    { field: 'stu_lname', headerName: 'Last Name', width: 120 },
    { field: 'curriculum_name', headerName: 'curriculum', width: 150 },
    { field: 'studygroup_name', headerName: 'Study Group', width: 200 },
    { field: 'stu_rmail', headerName: 'RMUTL Email', width: 250 },
    { field: 'stu_sex', headerName: 'Sex', width: 80 },
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
            // handleOpenEdit()
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  useEffect(() => {
    axios.post('http://localhost:3200/api/v1/students').then(res => {
      setRowDataSt(res.data.data)
    })
    axios.post('http://localhost:3200/api/v1/curriculum').then(res => {
      setCurriculumSt(res.data.results)
    })
    axios.post('http://localhost:3200/api/v1/studygroup').then(res => {
      setStudyGroupSt(res.data.results)
    })
  }, [])

  useEffect(() => {
    console.log(dataSt)
  }, [dataSt])

  const HandleChange = (event, type) => {
    if (type === 'stu_id') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataSt.stu_id !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColoChange(pre => ({ ...pre, stu_id: false }))
      }
      setDataSt(pre => ({ ...pre, stu_id: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    } else if (type === 'stu_name') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataSt.stu_name !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColoChange(pre => ({ ...pre, stu_name: false }))
      }
      setDataSt(pre => ({ ...pre, stu_name: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    } else if (type === 'stu_lname') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataSt.stu_lname !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColoChange(pre => ({ ...pre, stu_lname: false }))
      }
      setDataSt(pre => ({ ...pre, stu_lname: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    } else if (type === 'stu_status') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value.replace('', '') // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataSt.stu_status !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColoChange(pre => ({ ...pre, stu_status: false }))
      }
      setDataSt(pre => ({ ...pre, stu_status: newStr })) //เก็บค่าเก่าไว้ใน dataDog
    } else if (type === 'curriculum_id') {
      //เช็ค type ที่ส่งมาใช้ dog_name ?
      const newStr = event.target.value // อีเว้นที่เกิด เป้าหมายคือค่า value
      if (dataSt.curriculum_id !== '') {
        //ถ้าค่าไม่ว่างให้เซ็ตสีปกติ
        setColoChange(pre => ({ ...pre, curriculum_id: false }))
      }
      setDataSt(pre => ({ ...pre, curriculum_id: newStr })) //เก็บค่าเก่าไว้ใน dataDo
    }
  }

  const HandleInsSubmit = () => {
    if (
      dataSt.stu_id !== '' &&
      dataSt.curriculum_id !== '' &&
      dataSt.stu_name !== '' &&
      dataSt.stu_lname !== '' &&
      dataSt.stu_status !== '' &&
      dataSt.stu_status !== '' &&
      dataSt.studygroup_id !== ''
    ) {
      setDataSt(pre => ({
        ...pre, // เก็บค่าเก่า
        ...dataSt // การจาย ที่เป็นก้อนออก ถ้าสลับข้อมูลจะอยู่ด้านหน้า
      }))

      axios.post('http://localhost:3200/api/v1/studentinsert', dataSt).then(res => {
        console.log(res)
        window.location.reload()
        handleClose()
      })
    }
    if (dataSt.stu_id !== '') {
      console.log('std_id ไม่ว่าง')
    } else {
      console.log('std_id ว่าง')
      setColoChange(pre => ({ ...pre, stu_id: true }))
    }
    if (dataSt.stu_name !== '') {
      console.log('std_name ไม่ว่าง')
    } else {
      console.log('stu_name ว่าง')
      setColoChange(pre => ({ ...pre, stu_name: true }))
    }
    if (dataSt.stu_lname !== '') {
      console.log('stu_lname ไม่ว่าง')
    } else {
      console.log('stu_lname ว่าง')
      setColoChange(pre => ({ ...pre, stu_lname: true }))
    }
  }

  return (
    <Box>
      <Box>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12}>
            <Card>
              <CardContent>
                <Box sx={{ width: '100%', display: 'flex', my: 6 }}>
                  <Box>
                    <Icon path={mdiChartBar} size={6} />
                  </Box>
                  <Box>
                    <Typography variant='h5'>Student Management </Typography>
                    <Typography variant='subtitle1'>Student Management </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button onClick={handleOpen}>Insert Student</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                  >
                    <Box sx={style}>
                      <Card>
                        <CardHeader title='Insert Student' titleTypographyProps={{ variant: 'h6' }} />
                        <CardContent>
                          <form onSubmit={e => e.preventDefault()}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                              <Box sx={{ p: 4 }}>
                                <Typography>Student Code:</Typography>
                              </Box>
                              <Box>
                                <Grid container spacing={5}>
                                  <Grid item xs={12}>
                                    <TextField
                                      fullWidth
                                      label='id'
                                      onChange={event => HandleChange(event, 'stu_id')}
                                      error={coloChange.stu_id}
                                    />
                                  </Grid>
                                </Grid>
                              </Box>
                              <Box sx={{ p: 4 }}>
                                <Typography>Curriculum:</Typography>
                              </Box>
                              <Box sx={{ width: '80%' }}>
                                <Grid item xs={12} sm={6}>
                                  <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
                                    <InputLabel id='curriculum-label'>Curriculum:</InputLabel>
                                    <Select
                                      required
                                      labelId='curriculum-label'
                                      id='curriculumId'
                                      name='curriculumId'
                                      // value={dataSt.curriculum_id}
                                      // helperText={dataSt.curriculum_id && 'Curriculum'}
                                      label='Curriculum'
                                      onChange={event => HandleChange(event, 'curriculum_id')}
                                    >
                                      {curriculumSt.map(row => (
                                        <MenuItem key={row.curriculum_id} value={row.curriculum_id}>
                                          {row.curriculum_name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                              </Box>
                            </Box>
                            <Box sx={{ display: 'flex', width: '100%', mt: 4 }}>
                              <Box sx={{ p: 4 }}>
                                <Typography>Name:</Typography>
                              </Box>
                              <Box sx={{ width: '35%' }}>
                                <Grid container spacing={5}>
                                  <Grid item xs={12}>
                                    <TextField
                                      fullWidth
                                      label='Name'
                                      onChange={event => HandleChange(event, 'stu_name')}
                                      error={coloChange.stu_name}
                                    />
                                  </Grid>
                                </Grid>
                              </Box>
                              <Box sx={{ p: 4 }}>
                                <Typography>Last Name:</Typography>
                              </Box>
                              <Box sx={{ width: '35%' }}>
                                <Grid container spacing={5}>
                                  <Grid item xs={8}>
                                    <TextField
                                      fullWidth
                                      label='Last Name'
                                      onChange={event => HandleChange(event, 'stu_lname')}
                                      error={coloChange.stu_lname}
                                    />
                                  </Grid>
                                </Grid>
                              </Box>
                            </Box>
                            <Box sx={{ display: 'flex', width: '100%', mt: 4 }}>
                              <Box sx={{ p: 4 }}>
                                <Typography>Status:</Typography>
                              </Box>
                              <Box sx={{ width: '35%' }}>
                                <Grid container spacing={5}>
                                  <Grid item xs={8}>
                                    <TextField
                                      fullWidth
                                      label='Status'
                                      onChange={event => HandleChange(event, 'stu_status')}
                                      error={coloChange.stu_status}
                                    />
                                  </Grid>
                                </Grid>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                gap: 5,
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                mt: 6
                              }}
                            >
                              <Button type='submit' variant='contained' size='large' onClick={() => HandleInsSubmit()}>
                                Insert
                              </Button>
                              <Button size='large' onClick={() => handleClose()}>
                                Cancel
                              </Button>
                            </Box>
                          </form>
                        </CardContent>
                      </Card>
                    </Box>
                  </Modal>
                </Box>
                <Box>
                  <DataGrid rows={rowDataSt} columns={columns} getRowId={row => row.stu_id} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default bo_Student_manage
