import {
  Box,
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { addStudent } from './crud'

function Popupinsert(props) {
  const { handleCancelEdit, handleClose, open } = props
  const [curriculum, setCurriculum] = useState([])
  const [pattern, setPattern] = useState([])
  const [isStuNameValid, setIsStuNameValid] = useState(true)
  const [isStuLnameValid, setIsStuLnameValid] = useState(true)
  const [isNick, setIsNick] = useState(true)
  const [isStuId, setIsStuId] = useState(true)
  const [isRmail, setIsRmail] = useState(true)
  const [iscurriculumId, setIsCurriculumId] = useState(true)
  const [isStudygroupId, setIsStudygroupId] = useState(true)
  const [isstuBirthday, setIsStuBirthday] = useState(true)
  const [issex, setIsSex] = useState(true)
  const [isStuNationality, setIsStuNationality] = useState(true)
  const [isStuReligion, setIsStuReligion] = useState(true)
  const [studentinsert, setStudentinsert] = useState({
    Id: '',
    stuName: '',
    stuLname: '',
    stuNick: '',
    stuId: '',
    stuRmail: '',
    curriculumId: '',
    studygroupId: '',
    stuBirthday: '',
    stuSex: '',
    stuNationality: '',
    stuReligion: ''
  })

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

  const handleEditStudentInputChange = e => {
    const { name, value } = e.target
    setStudentinsert({
      ...studentinsert,
      [e.target.name]: e.target.value
    })

    if (name === 'stuName') {
      setIsStuNameValid(value !== '')
    }

    if (name === 'stuLname') {
      setIsStuLnameValid(value !== '')
    }

    if (name === 'stuNick') {
      setIsNick(value !== '')
    }

    if (name === 'stuId') {
      setIsStuId(value !== '')
    }

    if (name === 'stuRmail') {
      setIsRmail(value !== '')
    }

    if (name === 'curriculumId') {
      setIsCurriculumId(value !== '')
    }

    if (name === 'studygroupId') {
      setIsStudygroupId(value !== '')
    }

    if (name === 'stuBirthday') {
      setIsStuBirthday(value !== '')
    }

    if (name === 'stuSex') {
      setIsSex(value !== '')
    }

    if (name === 'stuNationality') {
      setIsStuNationality(value !== '')
    }

    if (name === 'stuReligion') {
      setIsStuReligion(value !== '')
    }
  }

  const handleSubmit = () => {
    if (!studentinsert.stuName) {
      setIsStuNameValid(false)
      return
    }

    if (!studentinsert.stuLname) {
      setIsStuLnameValid(false)
      return
    }

    if (!studentinsert.stuNick) {
      setIsNick(false)
      return
    }

    if (!studentinsert.stuRmail) {
      setIsRmail(false)
      return
    }

    if (!studentinsert.curriculumId) {
      setIsCurriculumId(false)
      return
    }

    if (!studentinsert.studygroupId) {
      setIsStudygroupId(false)
      return
    }

    if (!studentinsert.stuBirthday) {
      setIsStuBirthday(false)
      return
    }

    if (!studentinsert.stuSex) {
      setIsSex(false)
      return
    }

    if (!studentinsert.stuNationality) {
      setIsStuNationality(false)
      return
    }

    if (!studentinsert.stuReligion) {
      setIsStuReligion(false)
      return
    }

    const isFormValid =
      studentinsert.stuName &&
      studentinsert.stuLname &&
      studentinsert.stuNick &&
      studentinsert.stuRmail &&
      studentinsert.curriculumId &&
      studentinsert.studygroupId &&
      studentinsert.stuBirthday &&
      studentinsert.stuSex &&
      studentinsert.stuNationality &&
      studentinsert.stuReligion

    if (!isFormValid) {
      setIsStuNameValid(studentinsert.stuName !== '')
      setIsStuLnameValid(studentinsert.stuLname !== '')
      setIsNick(studentinsert.stuNick !== '')
      setIsStuId(studentinsert.stuId !== '')
      setIsRmail(studentinsert.stuRmail !== '')
      setIsCurriculumId(studentinsert.curriculumId !== '')
      setIsStudygroupId(studentinsert.studygroupId !== '')
      setIsStuBirthday(studentinsert.stuBirthday !== '')
      setIsSex(studentinsert.stuSex !== '')
      setIsStuNationality(studentinsert.stuNationality !== '')
      setIsStuReligion(studentinsert.stuReligion !== '')
      // เพิ่มสถานะสำหรับ TextField อื่นๆ ตามต้องการ
      return
    }

    addStudent(
      studentinsert.Id,
      studentinsert.stuName,
      studentinsert.stuLname,
      studentinsert.stuNick,
      studentinsert.stuId,
      studentinsert.stuRmail,
      studentinsert.curriculumId,
      studentinsert.studygroupId,
      studentinsert.stuBirthday,
      studentinsert.stuSex,
      studentinsert.stuNationality,
      studentinsert.stuReligion
    )
    handleClose()
  }

  return (
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
      <DialogTitle> กำลังเพิ่มนักศึกษา </DialogTitle>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              id='outlined-required'
              label='ชื่อ:'
              name='stuName'
              value={studentinsert.stuName}
              error={!isStuNameValid}
              helperText={!isStuNameValid.stuName && ''}
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
              name='stuLname'
              value={studentinsert.stuLname}
              error={!isStuLnameValid}
              helperText={!isStuLnameValid && 'กรุณากรอกนามสกุล'}
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
              name='stuNick'
              value={studentinsert.stuNick}
              error={!isNick}
              helperText={!isNick && 'กรุณากรอกรหัสนักศึกษา'}
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
              name='stuId'
              value={studentinsert.stuId}
              error={!isStuId}
              helperText={!isStuId && 'รหัสนักศึกษา'}
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
                id='curriculumId'
                name='curriculumId'
                value={studentinsert.curriculumId}
                error={!curriculum}
                helperText={!curriculum && 'กรุณากรอกหลักสูตร'}
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
              label='อีเมล มทล:'
              name='stuRmail'
              value={studentinsert.stuRmail}
              error={!isRmail}
              helperText={!isRmail && 'อีเมล มทล'}
              onChange={e => handleEditStudentInputChange(e)}
              variant='outlined'
              fullWidth
              rows={4}
              inputProps={{ maxLength: 12 }}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
              <InputLabel id='pattern-label'> กลุ่มเรียน :</InputLabel>
              <Select
                required
                labelId='pattern-label'
                id='studygroupId'
                name='studygroupId'
                value={studentinsert.studygroupId}
                error={!pattern}
                helperText={!pattern && 'กรุณากรอกหลักสูตร'}
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
              name='stuBirthday'
              value={studentinsert.stuBirthday}
              error={!isstuBirthday}
              helperText={!isstuBirthday && 'กรุณากรอกวันเกิด'}
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
              name='stuSex'
              value={studentinsert.stuSex}
              error={!issex}
              helperText={!issex && 'กรุณากรอกเพศ'}
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
              name='stuNationality'
              value={studentinsert.stuNationality}
              error={!isStuNationality}
              helperText={!isStuNationality && 'กรุณากรอกสัญชาติ'}
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
              name='stuReligion'
              value={studentinsert.stuReligion}
              error={!isStuReligion}
              helperText={!isStuReligion && 'กรุณากรอกศาสนา'}
              onChange={e => handleEditStudentInputChange(e)}
              variant='outlined'
              fullWidth
              rows={4}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </Box>
      <DialogActions>
        <Button onClick={handleClose} color='error'>
          ยกเลิก
        </Button>
        <Button onClick={handleSubmit} color='success' variant='contained'>
          เพิ่มนักศึกษา
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Popupinsert.propTypes = {
  handleCancelEdit: PropTypes.any,
  handleClose: PropTypes.any,
  open: PropTypes.any
}

export default Popupinsert
