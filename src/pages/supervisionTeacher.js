import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiFileDocumentCheckOutline } from '@mdi/js'

export default function SupervisionTeacher() {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h4'> Supervision for Teacher</Typography>
                  <Typography variant='subtitle1'> Supervision</Typography>
                </Box>
              </Box>
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                  <Tab value='1' label='Supervision Teacher' />
                </TabList>
                <CardContent>
                  <TabPanel value='1' sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 14 }}>
                      <Typography variant='h4'>Supervision Teacher</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                      <Box sx={{ p: 4 }}>
                        <Typography>Day:</Typography>
                      </Box>
                      <Box sx={{ width: '30%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Day' placeholder='1' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 4 }}>
                        <Typography>Month:</Typography>
                      </Box>
                      <Box sx={{ width: '30%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Month' placeholder='6' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 4 }}>
                        <Typography>Year:</Typography>
                      </Box>
                      <Box sx={{ width: '30%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Year' placeholder='2566' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 6, display: 'flex', flexDirection: 'row' }}>
                      <Box sx={{ p: 4 }}>
                        <Typography>Time:</Typography>
                      </Box>
                      <Box sx={{ width: '30%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Time' placeholder='08.00' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 4, ml: 20 }}>
                        <Typography>Department:</Typography>
                      </Box>
                      <Box sx={{ width: '30%' }}>
                        <Grid item xs={10}>
                          <TextField fullWidth label='Department' placeholder='' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 6, display: 'flex', flexDirection: 'row' }}>
                      <Box sx={{ p: 4 }}>
                        <Typography>Name Manager:</Typography>
                      </Box>
                      <Box sx={{ width: '30%' }}>
                        <Grid item xs={10}>
                          <TextField fullWidth label='Name Manager' placeholder='' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 4 }}>
                        <Typography>Job position:</Typography>
                      </Box>
                      <Box sx={{ width: '30%' }}>
                        <Grid item xs={10}>
                          <TextField fullWidth label='Job position' placeholder='' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 6, display: 'flex', flexDirection: 'row' }}>
                      <Box sx={{ p: 4, width: '30%' }}>
                        <Typography>Number of students:</Typography>
                      </Box>
                      <Box sx={{ width: '30%' }}>
                        <Grid item xs={10}>
                          <TextField fullWidth label='Number of students' placeholder='1' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 4, width: '22%', ml: 40 }}>
                        <Typography>Student Name:</Typography>
                      </Box>
                      <Box sx={{ width: '100%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Student Name' placeholder='Student Name' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 6, display: 'flex', flexDirection: 'row' }}>
                      <Box sx={{ p: 4, width: '14%' }}>
                        <Typography>Time supervision : </Typography>
                      </Box>
                      <Box sx={{ width: '20%' }}>
                        <Grid item xs={10}>
                          <TextField fullWidth label='Time supervision' placeholder='1' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ p: 4 }}>
                        <Typography>Teacher's comments:</Typography>
                      </Box>
                      <Box sx={{ width: '100%' }}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label='Teacher comments'
                            placeholder='Teacher comments'
                            multiline
                            minRows={6}
                          />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: 6 }}>
                      <Button>submit</Button>
                      <Button>Cancel</Button>
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
