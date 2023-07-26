import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { Key } from 'mdi-material-ui'
import { useEffect, useState } from 'react'
import axios from 'axios'

const dummy = [
  {
    img: 'https://img.freepik.com/free-photo/two-confident-business-man-shaking-hands-during-meeting-office-success-dealing-greeting-partner-concept_1423-185.jpg?w=1380&t=st=1690181689~exp=1690182289~hmac=4a767878a870573a28239e250f1edc5f3a592c855232f68eb9d2320c1a7a74c7',
    title: 'dsqakdhasodhaskodhoiuasodhasid'
  },
  {
    img: 'https://img.freepik.com/free-photo/two-confident-business-man-shaking-hands-during-meeting-office-success-dealing-greeting-partner-concept_1423-185.jpg?w=1380&t=st=1690181689~exp=1690182289~hmac=4a767878a870573a28239e250f1edc5f3a592c855232f68eb9d2320c1a7a74c7',
    title:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    img: 'https://img.freepik.com/free-photo/two-confident-business-man-shaking-hands-during-meeting-office-success-dealing-greeting-partner-concept_1423-185.jpg?w=1380&t=st=1690181689~exp=1690182289~hmac=4a767878a870573a28239e250f1edc5f3a592c855232f68eb9d2320c1a7a74c7',
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45'
  }
]

export default function cooperative() {
  // const [dataComp, setDataComp] = useState('')

  // useEffect(() => {
  //   axios.post('http://localhost:3200/api/v1/companys').then(res => {
  //     setDataComp(res.data.data)
  //   })
  // })

  return (
    <Box>
      <Grid container spacing={6} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h5'>Co-Operative</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        {Object.values(dummy)?.map((dummy, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <Card>
              <CardMedia sx={{ height: '14.5625rem' }} image={dummy.img} />
              <CardContent sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography>{dummy.title}</Typography>
                <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5), mt: 4 }}>
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
