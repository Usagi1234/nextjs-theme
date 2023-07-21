import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

export default function cooperative() {
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
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/glass-house.png' />
            <CardContent sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Typography variant='h5' sx={{ marginBottom: 2 }}>
                Influencing The Influencer
              </Typography>
              <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5), mt: 4 }}>
                Contact Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
