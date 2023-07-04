// ** React Imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import { updateStudent } from './crud'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const TabAccount = () => {
  // ** State
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [student, setStudent] = useState([])
  const [studentselect, setStudentselect] = useState([])
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    axios.post('http://localhost:3200/api/v1/students').then(response => {
      console.log(response)
      setStudent(response.data.data)
    })
  }, [])

  // useEffect(() => {
  //   console.log(studentselect)
  // }, [studentselect])

  const handleEditStudentInputChange = e => {
    // console.log(e.target.name + e.target.value);
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  const handleEditStudentInputChange0 = e => {
    // console.log(e.target.name + e.target.value);
    setStudentselect({
      ...studentselect,
      [e.target.name]: e.target.value
    })
  }

  function selectstudent(student) {
    setStudentselect(student)
  }

  function handleSaveChanges() {
    updateStudent(
      studentselect.Id,
      studentselect.stu_name,
      studentselect.stu_lname,
      studentselect.stu_nick,
      studentselect.stu_id,
      studentselect.stu_rmail,
      studentselect.stu_status,
      studentselect.curriculum_id,
      studentselect.studygroup_id,
      studentselect.stu_birthday,
      studentselect.stu_sex,
      studentselect.stu_nationality,
      studentselect.stu_religion
    )
    setOpenSnackbar(true)
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id='curriculum-label'> นักศึกษา: </InputLabel>
                  <Select
                    required
                    labelId='curriculum-label'
                    id='Id'
                    name='Id'
                    value={student.Id || ''}
                    onChange={e => handleEditStudentInputChange(e)}
                    label='นักศึกษา'
                  >
                    {Object.values(student).map((row, index) => (
                      <MenuItem key={index} value={row.Id} onClick={() => selectstudent(row)}>
                        {row.stu_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='ชื่อจริง'
              value={studentselect.stu_name || ''}
              name='stu_name'
              onChange={e => handleEditStudentInputChange0(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='นามสกุล'
              value={studentselect.stu_lname || ''}
              name='stu_lname'
              onChange={e => handleEditStudentInputChange0(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='ชื่อเล่น'
              value={studentselect.stu_nick || ''}
              name='stu_nick'
              onChange={e => handleEditStudentInputChange0(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='รหัสนักศึกษา'
              value={studentselect.stu_id || ''}
              name='stu_id'
              onChange={e => handleEditStudentInputChange0(e)}
              InputProps={{
                readOnly: true,
                style: { color: 'rgba(159, 159, 159 )' }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='รหัสนักศึกษา'
              value={studentselect.curriculum_name || ''}
              name='curriculum_name'
              onChange={e => handleEditStudentInputChange0(e)}
              InputProps={{
                readOnly: true,
                style: { color: 'rgba(159, 159, 159 )' }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Email Rmutl'
              value={studentselect.stu_rmail || ''}
              name='stu_rmail'
              onChange={e => handleEditStudentInputChange0(e)}
              InputProps={{
                readOnly: true,
                style: { color: 'rgba(159, 159, 159 )' }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='รหัสนักศึกษา'
              value={studentselect.studygroup_name || ''}
              name='studygroup_name'
              onChange={e => handleEditStudentInputChange0(e)}
              InputProps={{
                readOnly: true,
                style: { color: 'rgba(159, 159, 159 )' }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='วันเกิด'
              value={studentselect.stu_birthday || ''}
              name='stu_birthday'
              onChange={e => handleEditStudentInputChange0(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='เพศ'
              value={studentselect.stu_sex || ''}
              name='stu_sex'
              onChange={e => handleEditStudentInputChange0(e)}
              InputProps={{
                readOnly: true,
                style: { color: 'rgba(159, 159, 159 )' }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='สัญชาติ'
              value={studentselect.stu_nationality || ''}
              name='stu_nationality'
              onChange={e => handleEditStudentInputChange0(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='ศาสนา'
              value={studentselect.stu_religion || ''}
              name='stu_religion'
              onChange={e => handleEditStudentInputChange0(e)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button onClick={handleSaveChanges} variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
          </Grid>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{ top: 64 }} // ปรับตำแหน่งให้เหมาะสมกับตำแหน่งอื่น ๆ บนหน้าจอ
          >
            <Alert onClose={handleCloseSnackbar} severity='success' sx={{ width: '100%' }}>
              อัปเดตเสร็จสิ้น
            </Alert>
          </Snackbar>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
