import Grid from '@mui/material/Grid'
import {
  Box,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

export default function calendar() {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h5'>Calendar</Typography>
              </Box>
              <Box>
                <Box>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>File Name</TableCell>
                          <TableCell>File </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>ปฏิทินกำหนดการโครงการพัฒนาทักษะวิชาชีพนักศึกษา ประจำปีการศึกษา 2566</TableCell>
                          <TableCell>
                            <Button variant='contained'>PDF</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>ปฏิทินกำหนดการโครงการพัฒนาทักษะวิชาชีพนักศึกษา ประจำปีการศึกษา 2565</TableCell>
                          <TableCell>
                            <Button variant='contained'>PDF</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>ปฏิทินกำหนดการโครงการพัฒนาทักษะวิชาชีพนักศึกษา ประจำปีการศึกษา 2564</TableCell>
                          <TableCell>
                            <Button variant='contained'>PDF</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            ปฏิทินกำหนดการโครงการพัฒนาทักษะวิชาชีพนักศึกษา ประจำปีการศึกษา 2563 (ฉบับที่ 2) COVID-19
                          </TableCell>
                          <TableCell>
                            <Button variant='contained'>PDF</Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
