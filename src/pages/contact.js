import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

export default function contact() {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h5'>Contact</Typography>
              </Box>
              <Box>{/* DataGrid Map  */}</Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
