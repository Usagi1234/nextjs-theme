import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import Icon from '@mdi/react'
import { mdiChartBar } from '@mdi/js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
import { Modal } from '@mui/base'

export default function report_weeklyTeacher() {
  const [rowReportStd, setRowReportStd] = useState('')

  const [openReStd, setOpenReStd] = useState(false)
  const handleOpenReStd = () => setOpenReStd(true)
  const handleCloseReStd = () => setOpenReStd(false)

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

  const columns = [
    { field: 'stu_id', headerName: 'Student ID', width: 200 },
    { field: 'stu_name', headerName: 'Student Name', width: 150 },
    { field: 'stu_lname', headerName: 'Student Last Name', width: 200 },
    { field: 're_week', headerName: 'Week', width: 150 },
    { field: 'com_name', headerName: 'Company', width: 150 },
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
            handleOpenReStd()
            console.log(params.row)
          }}
        >
          Show
        </Button>
      )
    }
  ]

  useEffect(() => {
    axios
      .post('http://localhost:3200/api/v1/getreport')
      .then(res => {
        setRowReportStd(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Box>
      <Modal
        open={openReStd}
        onClose={handleCloseReStd}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box>
            <Typography>show data student</Typography>
          </Box>
          <Button onClick={() => handleCloseReStd()}>Cancel</Button>
        </Box>
      </Modal>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex', my: 6 }}>
                <Box>
                  <Icon path={mdiChartBar} size={6} />
                </Box>
                <Box>
                  <Typography variant='h5'>Report Student</Typography>
                  <Typography variant='subtitle1'>Report Student</Typography>
                </Box>
              </Box>
            </CardContent>
            <Box>
              <DataGrid rows={rowReportStd} columns={columns} getRowId={row => row.re_id} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
