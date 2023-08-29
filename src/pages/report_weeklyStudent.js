import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Modal, TextField, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Icon from '@mdi/react'
import { mdiPoll } from '@mdi/js'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function report_weeklyStudent() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setReportData(intialReport)
    setColoChangeReport(colorReport)
  }

  const intialReport = {
    re_hname: '',
    re_week: '',
    re_details: '',
    com_name: ''
  }

  const [reportData, setReportData] = useState(intialReport)

  const colorReport = {
    re_hname: false,
    re_week: false,
    re_details: false,
    com_name: false
  }

  const [colorChangeReport, setColoChangeReport] = useState(colorReport)

  const HandleOnChangeReport = (event, type) => {
    if (type === 're_hname') {
      const newStr = event.target.value.replace('', '')
      if (reportData.re_hname !== '') {
        setColoChangeReport(pre => ({ ...pre, re_hname: false }))
      }
      setReportData(pre => ({ ...pre, re_hname: newStr }))
    } else if (type === 're_week') {
      const newStr = event.target.value.replace('', '')
      if (reportData.re_week !== '') {
        setColoChangeReport(pre => ({ ...pre, re_week: false }))
      }
      setReportData(pre => ({ ...pre, re_week: newStr }))
    } else if (type === 're_details') {
      const newStr = event.target.value.replace('', '')
      if (reportData.re_details !== '') {
        setColoChangeReport(pre => ({ ...pre, re_details: false }))
      }
      setReportData(pre => ({ ...pre, re_details: newStr }))
    } else if (type === 'com_name') {
      const newStr = event.target.value.replace('', '')
      if (reportData.com_name !== '') {
        setColoChangeReport(pre => ({ ...pre, com_name: false }))
      }
      setReportData(pre => ({ ...pre, com_name: newStr }))
    }
  }

  const handleOnInsertReport = () => {
    if (
      reportData.re_hname !== '' &&
      reportData.re_week !== '' &&
      reportData.re_details !== '' &&
      reportData.com_name !== ''
    ) {
      setReportData(pre => ({
        ...pre,
        ...reportData
      }))
    }
    axios.post('http://localhost:3200/api/v1/insertreport', reportData).then(res => {
      console.log(res)
      window.location.reload()
      handleClose()
      setReportData(intialReport)
    })
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: 1
  }

  useEffect(() => {
    console.log(reportData)
  }, [reportData])

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex', mb: 6 }}>
                <Box>
                  <Icon path={mdiPoll} size={6} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4, mt: 6 }}>
                  <Typography variant='h5'>Report Week</Typography>
                  <Typography variant='subtitle1'>Weekly work report of computer engineering students</Typography>
                </Box>
              </Box>
              <Box>
                <Button onClick={handleOpen}>Insert</Button>
              </Box>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Box sx={style}>
                  <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mb: 6 }}>
                      Add New Report Weekly
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <Box sx={{ p: 6 }}>
                      <Typography variant='h6'>Topic Report detail : </Typography>
                    </Box>
                    <Box>
                      <Grid container spacing={5}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label='Report'
                            placeholder='Report'
                            multiline
                            minRows={2}
                            onChange={event => HandleOnChangeReport(event, 're_hname')}
                            error={colorChangeReport.re_hname}
                            value={reportData.re_hname}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ p: 6 }}>
                      <Typography>Week : </Typography>
                    </Box>
                    <Box>
                      <TextField
                        fullWidth
                        label='week'
                        placeholder='1'
                        sx={{ width: 100, p: 2 }}
                        onChange={event => HandleOnChangeReport(event, 're_week')}
                        error={colorChangeReport.re_week}
                        value={reportData.re_week}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ p: 6 }}>
                    <Box sx={{ mb: 6 }}>
                      <Typography variant='h6'>Report detail</Typography>
                    </Box>
                    <form onSubmit={e => e.preventDefault()}>
                      <Grid container spacing={5}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label='Report'
                            placeholder='Report'
                            multiline
                            minRows={6}
                            onChange={event => HandleOnChangeReport(event, 're_details')}
                            error={colorChangeReport.re_details}
                            value={reportData.re_details}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex' }}>
                    <Box sx={{ width: '32%', p: 4 }}>
                      <Typography variant='h6'>Name Establishment:</Typography>
                    </Box>
                    <Box sx={{ width: '65%' }}>
                      <Grid container spacing={5}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label='Name Establishment'
                            placeholder='Establishment'
                            onChange={event => HandleOnChangeReport(event, 'com_name')}
                            error={colorChangeReport.com_name}
                            value={reportData.com_name}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Button onClick={() => handleOnInsertReport()}>submit</Button>
                    <Button
                      onClick={() => {
                        handleClose(false)
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Modal>
              {/* <Box>{DataGrid Map filter id }</Box> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
