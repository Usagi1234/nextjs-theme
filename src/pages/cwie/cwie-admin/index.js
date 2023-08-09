// ** MUI Imports
import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, Button, Dialog, TextField } from '@mui/material'
import Popupdate from '/src/views/cwie/Popupdate'
import Popupinsert from '/src/views/cwie/Popupinsert'
import { CustomTableCell, StyledDataGrid, StyledTable, StyledTableRow, StyledTableRow2 } from 'src/views/cwie/styled'

const MUITables = () => {
  const [studentlist, setStudentlist] = useState([])
  const [open, setOpen] = useState(false)
  const [openin, setOpenin] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [IDstudent, setStudentID] = useState([])
  const [search, setSearch] = useState([])
  const [editingStudent] = useState({
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
    axios.get('http://localhost:3200/api/v1/students').then(response => {
      console.log(response)
      setStudentlist(response.data.data)
    })
  }, [])

  console.log(studentlist)

  const handleClose = () => {
    setOpen(false)
    setOpenin(false)
  }

  const handleCloseDialog = () => {
    setShowConfirmDialog(false)
  }

  function handleSearch() {
    axios
      .post('http://localhost:3200/api/v1/searchdate', {
        curriculum_name: search,
        studygroup_name: search
      })
      .then(response => {
        console.log(response)
        setStudentlist(response.data.data)
      })
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  function handleUpdateStudent(Id) {
    setOpen(true)
    setStudentID(Id)
  }
  useEffect(() => {
    console.log(IDstudent)
  }, [IDstudent])

  return (
    <div className='student'>
      <Paper sx={{ padding: '20px' }}>
        <Button className='btn btn-success' onClick={() => setOpenin(true)} style={{ backgroundColor: 'lightpink', color: 'black' }}>
          {' '}
          เพิ่มนักศึกษา{' '}
        </Button>
        <Popupinsert handleClose={handleClose} open={openin}>
          {' '}
        </Popupinsert>
        <Grid container spacing={2} justifyContent='flex-end' sx={{ marginBottom: 4 }}>
          <Grid item>
            <TextField
              id='outlined-required'
              label='ค้นหาข้อมูล:'
              name='dateStart'
              value={search}
              onChange={e => handleChange(e)}
              variant='outlined'
            />
          </Grid>
          <Grid item>
            <Button onClick={(groupName, curriculumname) => handleSearch(groupName, curriculumname)}>
              ค้นหาข้อมูล
            </Button>
          </Grid>
        </Grid>
        <StyledDataGrid
          autoHeight
          rows={Object.values(studentlist).map(val => ({ ...val, id: val.Id }))} // เพิ่มคุณสมบัติ id ในแต่ละแถว
          getRowId={row => row.id} // กำหนดให้ใช้คุณสมบัติ id เป็น id ของแถว
          columns={[
            { field: 'stu_name', headerName: 'ชื่อ', width: 150 },
            { field: 'stu_lname', headerName: 'นามสกุล', width: 150 },
            { field: 'stu_id', headerName: 'รหัสนักศึกษา', width: 150 },
            { field: 'stu_rmail', headerName: 'Rmutl email', width: 220 },
            { field: 'curriculum_name', headerName: 'หลักสูตร', width: 150 },
            { field: 'studygroup_name', headerName: 'กลุ่มเรียน', width: 220 },
            {
              field: 'actions',
              headerName: 'ปุ่ม',
              width: 150,
              renderCell: params => (
                <Button
                  variant='contained'
                  color='success'
                  className='btn btn-info'
                  onClick={() => handleUpdateStudent(params.row.Id)}
                  style={{ marginRight: '5px' }}
                >
                  {' '}
                  แก้ไข{' '}
                </Button>
              )
            }
          ]}
        />
        <Popupdate
          IDstudent={IDstudent}
          handleClose={handleClose}
          open={open}
          editingStudent={editingStudent}
        ></Popupdate>
      </Paper>
    </div>
  )
}

export default MUITables
