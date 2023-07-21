import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Tab, TextField, Typography } from '@mui/material'
import Icon from '@mdi/react'
import { mdiAccountMultiple } from '@mdi/js'
import { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'

export default function supervisionEstabishment() {
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
              <Box sx={{ width: '100%', display: 'flex', my: 6 }}>
                <Box>
                  <Icon path={mdiAccountMultiple} size={6} />
                </Box>
                <Box>
                  <Typography variant='h5'>Supervision Establishment</Typography>
                  <Typography variant='subtitle1'>Supervision Establishment</Typography>
                </Box>
              </Box>
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                  <Tab value='1' label='Supervision Establishment ' />
                </TabList>
                <CardContent>
                  <TabPanel value='1' sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 14 }}>
                      <Typography variant='h4'>Supervision Establishment </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: 6 }}>
                      <Box sx={{ p: 3 }}>
                        <Typography variant='h6'>Need more interns : </Typography>
                      </Box>
                      <Box sx={{ width: '35%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Interns' placeholder='1' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                      <Box sx={{ p: 3 }}>
                        <Typography variant='h6'>How to apply and interview interns : </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ width: '100%', mb: 6 }}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label='interview interns'
                          placeholder='interview interns'
                          multiline
                          minRows={3}
                        />
                      </Grid>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                      <Box sx={{ p: 3, width: '23%' }}>
                        <Typography variant='h6'>Contact coordinator : </Typography>
                      </Box>
                      <Box sx={{ width: '35%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Contact coordinator' placeholder='Contact coordinator' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 3, width: '30%' }}>
                        <Typography variant='h6'>The duration of the internship : </Typography>
                      </Box>
                      <Box sx={{ width: '32%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='The duration of the internship' placeholder='3 Day' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                      <Box sx={{ p: 3 }}>
                        <Typography variant='h6'>Suggestions : </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ width: '100%', mb: 6 }}>
                      <Grid item xs={12}>
                        <TextField fullWidth label='Suggestions' placeholder='Suggestions' multiline minRows={3} />
                      </Grid>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 6 }}>
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
      <Box>{/* DataGrid Map */}</Box>
    </Box>
  )
}
