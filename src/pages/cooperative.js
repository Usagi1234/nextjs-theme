import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '@mui/material/Modal'

const dummy = [
  {
    img: 'https://media.jobthai.com/v1/images/logo-pic-map/278479_pic_20221003151315.jpeg'
  },
  {
    img: 'https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/301539972_482536413881523_601308938654490091_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=8CYWeUOjqWoAX-tYSol&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfBYIGE7PIHDBpJJeKiehNTIxVOsdRHYsPZIABBwm0j5iA&oe=64DE1EA9'
  },
  {
    img: 'https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/303129534_407381381519920_4828122316521146319_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=P0NRr0ybY6QAX9PJLcv&_nc_ht=scontent.fbkk29-6.fna&oh=00_AfBCtfyBzZ5lL5XcWhZggjzUyX81F_UUYm3rYOd5uap93Q&oe=64DE1984'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbjszWvQUT_pGDBjed5c-RnNXebVD5Twj4g&usqp=CAU'
  },
  {
    img: ''
  },
  {
    img: ''
  }
]

export default function cooperative() {
  const [dataComp, setDataComp] = useState('')
  const [dataRow, setDataRow] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3200/api/v1/companys').then(res => {
      setDataComp(res.data.data)
    })
  }, [])

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const HandleRowAndOpen = data => {
    console.log(data)
    setDataRow(data)
    setOpen(true)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 1
  }

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
        {Object.values(dataComp)?.map((datacomps, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <Card>
              <CardMedia sx={{ height: '14.5625rem' }} image={dummy[index].img} />
              <CardContent sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography>{datacomps.com_name}</Typography>
                <Button
                  variant='contained'
                  sx={{ padding: theme => theme.spacing(1.75, 5.5), mt: 4 }}
                  onClick={() => HandleRowAndOpen(datacomps)}
                >
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Grid container spacing={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', m: 10, width: '100%' }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h5'>{dataRow.com_name}</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ m: 2 }} variant='h6'>
                  ประเภทงาน :
                </Typography>
                <Typography sx={{ m: 2 }} variant='h6'>
                  {dataRow.com_type}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ m: 2 }} variant='h6'>
                  ที่อยู่ :
                </Typography>
                <Typography sx={{ m: 2 }} variant='h6'>
                  {dataRow.com_add}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ m: 2 }} variant='h6'>
                  จังหวัด :
                </Typography>
                <Typography sx={{ m: 2 }} variant='h6'>
                  {dataRow.com_province}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ m: 2 }} variant='h6'>
                  ติดต่อ :
                </Typography>
                <Typography sx={{ m: 2 }} variant='h6'>
                  {dataRow.com_contact}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Modal>
    </Box>
  )
}
