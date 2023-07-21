import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default function form() {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <TableContainer>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Typography variant='h5'>Form</Typography>
                </Box>
                <Box>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>File Name</TableCell>
                        <TableCell>File</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography>คู่มือ โครงการพัฒนาทักษะวิชาชีพของนักศึกษา </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.01_ฟอร์มโครงการพัฒนาทักษะวิชาชีพ </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.02_ใบสมัครข้อมูลนักศึกษา (ภาษาไทย) </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.02_ใบสมัครข้อมูลนักศึกษา (ภาษาอังกฤษ) </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.03_แบบตอบรับนักศึกษาโครงการพัฒนาทักษะวิชาชีพ </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.04_ใบประเมินผลฝึกงานนักศึกษา </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.05_แบบตอบรับการนิเทศโครงการพัฒนาทักษะวิชาชีพ </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.06_แบบฟอร์มประเมินสถานประกอบการ</Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.07_แบบประเมินนักศึกษา (ระหว่างการนิเทศ)</Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>แบบฟอร์มรายงานการปฎิบัติงานสหกิจศึกษา</Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }}>
                            WORD
                          </Button>
                          <Button variant='contained'>PDF</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
