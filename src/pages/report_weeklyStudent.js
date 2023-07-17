import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Modal, TextField, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Icon from '@mdi/react'
import { mdiPoll } from '@mdi/js'
import { useState } from 'react'

export default function report_weeklyStudent() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
                          <TextField fullWidth label='Report' placeholder='Report' multiline minRows={2} />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ p: 6 }}>
                      <Typography>Week : </Typography>
                    </Box>
                    <Box>
                      <TextField fullWidth label='week' placeholder='1' sx={{ width: 100, p: 2 }} />
                    </Box>
                  </Box>
                  {/* <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', my: 6 }}>
                    <Button>Upload Photo</Button>
                  </Box> */}
                  <Box sx={{ p: 6 }}>
                    <Box sx={{ mb: 6 }}>
                      <Typography variant='h6'>Report detail</Typography>
                    </Box>
                    <form onSubmit={e => e.preventDefault()}>
                      <Grid container spacing={5}>
                        <Grid item xs={12}>
                          <TextField fullWidth label='Report' placeholder='Report' multiline minRows={6} />
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Button>submit</Button>
                    <Button>Cancel</Button>
                  </Box>
                </Box>
              </Modal>
              {/* <Box>{DataGrid Map}</Box> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
