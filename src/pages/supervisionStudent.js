import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiAccountGroup } from '@mdi/js'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TextField from '@mui/material/TextField'

export default function supervisionStudent() {
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
              <Box sx={{ width: '100%', display: 'flex' }}>
                <Icon path={mdiAccountGroup} size={6} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h5'>Supervision Student </Typography>
                  <Typography variant='subtitle1'>Supervision of students is divided into 2 sessions.</Typography>
                </Box>
              </Box>
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                  <Tab value='1' label='Supervision Student' />
                </TabList>
                <CardContent>
                  <TabPanel value='1' sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 14 }}>
                      <Typography variant='h4'>Supervision Student</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                      <Box sx={{ p: 3 }}>
                        <Typography variant='h6'>Name : </Typography>
                      </Box>
                      <Box sx={{ width: '35%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Name' placeholder='Name[TH]' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 3, ml: 20 }}>
                        <Typography variant='h6'>Last Name : </Typography>
                      </Box>
                      <Box sx={{ width: '35%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Last Name' placeholder='Last Name[TH]' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', mt: 5 }}>
                      <Box sx={{ p: 3 }}>
                        <Typography variant='h6'>Time in : </Typography>
                      </Box>
                      <Box sx={{ width: '20%' }}>
                        <Grid item xs={8}>
                          <TextField fullWidth label='Time in' placeholder='8.00' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 3, ml: 65 }}>
                        <Typography variant='h6'>Time Out : </Typography>
                      </Box>
                      <Box sx={{ width: '20%', ml: 4 }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Time Out' placeholder='17.00' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', mt: 5 }}>
                      <Box sx={{ p: 3 }}>
                        <Typography variant='h6'>weekly holiday : </Typography>
                      </Box>
                      <Box sx={{ width: '20%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='weekly holiday' placeholder='Saturday,Sunday' />
                        </Grid>
                      </Box>
                      <Box sx={{ p: 3, ml: 31 }}>
                        <Typography variant='h6'>Time supervision :</Typography>
                      </Box>
                      <Box sx={{ width: '20%' }}>
                        <Grid item xs={6}>
                          <TextField fullWidth label='Time supervision' placeholder='Saturday,Sunday' />
                        </Grid>
                      </Box>
                    </Box>
                    <Box>
                      <Box>
                        <Typography variant='h6' sx={{ mt: 5, p: 3 }}>
                          Nature of work
                        </Typography>
                      </Box>
                      <Box>
                        <TextField
                          fullWidth
                          label='Nature of work'
                          placeholder='Nature of work'
                          multiline
                          minRows={6}
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Box>
                        <Typography variant='h6' sx={{ mt: 5, p: 3 }}>
                          Suggestion
                        </Typography>
                      </Box>
                      <Box>
                        <TextField fullWidth label='Suggestion' placeholder='Suggestion' multiline minRows={6} />
                      </Box>
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
    </Box>
  )
}
