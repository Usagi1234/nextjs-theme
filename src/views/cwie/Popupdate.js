import axios from 'axios'
import {
  Box,
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogActions,
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  IconButton
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deletedstudent } from '/src/views/cwie-student/crud'
import PropTypes from 'prop-types'
import DeleteIcon from '@mui/icons-material/Delete'
import { updateStudent } from './crud'

function Popupdate(props) {
  const {
    // editingStudent,
    handleClose,
    open,
    IDstudent
  } = props

  const [studentupdate, setStudentupdate] = useState([])
  const [curriculum, setCurriculum] = useState([])
  const [pattern, setPattern] = useState([])

  useEffect(() => {
    if (open !== false) {
      axios.post('http://localhost:3200/api/v1/student', { Id: IDstudent }).then(response => {
        console.log(response.data.results)
        setStudentupdate(response.data.results[0])
      })
    }
  }, [open])

  useEffect(() => {
    axios.post('http://localhost:3200/api/v1/curriculum').then(response => {
      setCurriculum(response.data.results)
      console.log(response.data.results)
    })
  }, [])

  useEffect(() => {
    axios.post('http://localhost:3200/api/v1/studygroup').then(response => {
      setPattern(response.data.results)
      console.log(response.data.results)
    })
  }, [])

  // useEffect(() => {
  //   console.log(studentupdate);
  // }, [studentupdate]);

  const handleEditStudentInputChange = e => {
    // console.log(e.target.name + e.target.value);
    setStudentupdate({
      ...studentupdate,
      [e.target.name]: e.target.value
    })
  }

  const handleDelete = stuID => {
    deletedstudent(stuID)
    console.log('del: ',stuID);
  }

  function handleSaveChanges() {
    updateStudent(
      studentupdate.Id,
      studentupdate.stu_name,
      studentupdate.stu_lname,
      studentupdate.stu_nick,
      studentupdate.stu_id,
      studentupdate.stu_rmail,
      studentupdate.stu_status,
      studentupdate.curriculum_id,
      studentupdate.studygroup_id,
      studentupdate.stu_birthday,
      studentupdate.stu_sex,
      studentupdate.stu_nationality,
      studentupdate.stu_religion
    )
    handleClose()
  }
  console.log('dad',IDstudent);

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          '& .MuiPaper-root': {
            width: '100vh',
            backgroundColor: '#FFFFFF',
            padding: '20px' // เพิ่มขอบเขตด้านในของ Dialog
          },
          '& .MuiDialogTitle-root': {
            fontSize: '1.2rem',
            fontWeight: 500
          },
          marginLeft: '20px',
          marginRight: '20px' // เพิ่มขอบเขตด้านนอกของ Dialog
        }}
      >
        {/* เนื้อหาของ Dialog */}
        <DialogTitle>
          กำลังแก้ไขข้อมูลนักศึกษา
          <IconButton aria-label='delete' color='error' sx={{ float: 'right' }} onClick={() => handleDelete(IDstudent)}>
            <DeleteIcon />
          </IconButton>
        </DialogTitle>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='ชื่อ:'
                name='stu_name'
                value={studentupdate.stu_name || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='นามสกุล:'
                name='stu_lname'
                value={studentupdate.stu_lname || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='ชื่อเล่น:'
                name='stu_nick'
                value={studentupdate.stu_nick || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='รหัสนักศึกษา:'
                name='stu_id'
                value={studentupdate.stu_id || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Grid item xs={12} sm={6}>
              <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
                <InputLabel id='curriculum-label'>หลักสูตร:</InputLabel>
                <Select
                  required
                  labelId='curriculum-label'
                  id='curriculum_id'
                  name='curriculum_id'
                  value={studentupdate.curriculum_id || ''}
                  onChange={e => handleEditStudentInputChange(e)}
                  label='หลักสูตร'
                >
                  {curriculum.map(row => (
                    <MenuItem key={row.curriculum_id} value={row.curriculum_id}>
                      {row.curriculum_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='outlined-required'
                label='Rmutl email:'
                name='stu_rmail'
                value={studentupdate.stu_rmail || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                rows={4}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
                <InputLabel id='pattern-label'>กลุ่มเรียน:</InputLabel>
                <Select
                  required
                  labelId='pattern-label'
                  id='studygroup_id'
                  name='studygroup_id'
                  value={studentupdate.studygroup_id || ''}
                  onChange={e => handleEditStudentInputChange(e)}
                  label='ประเภท'
                >
                  {pattern.map(row => (
                    <MenuItem key={row.studygroup_id} value={row.studygroup_id}>
                      {row.studygroup_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='วันเกิด:'
                name='stu_birthday'
                value={studentupdate.stu_birthday || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                rows={4}
                sx={{
                  mb: 2,
                  display: 'inline-block',
                  marginRight: '8px'
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='เพศ:'
                name='stu_sex'
                value={studentupdate.stu_sex || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                rows={4}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='สัญชาติ:'
                name='stu_nationality'
                value={studentupdate.stu_nationality || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                rows={4}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='ศาสนา:'
                name='stu_religion'
                value={studentupdate.stu_religion || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                rows={4}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-required'
                label='สถานะ:'
                name='stu_status'
                value={studentupdate.stu_status || ''}
                onChange={e => handleEditStudentInputChange(e)}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
        </Box>
        <DialogActions>
          <Button onClick={handleClose} color='error'>
            ยกเลิก
          </Button>
          <Button onClick={handleSaveChanges} color='success' variant='contained'>
            บันทึก
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

Popupdate.propTypes = {
  // editingStudent: PropTypes.any,
  IDstudent: PropTypes.any,
  handleCancelEdit: PropTypes.any,
  handleClose: PropTypes.any,
  open: PropTypes.any
}

export default Popupdate
