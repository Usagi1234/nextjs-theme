// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useEffect, useState } from 'react'

const AppBarContent = props => {

    // -------------------- getCookie
    const username = Cookies.get('._jwtUsername')
    const role = Cookies.get('._jwtRole')
    // ===============================

    
  const [user, setUsername] = useState('')
  const [status, setStatus] = useState('')
  const [showname, setShowname] = useState('')
  const [showstatus, setShowstate] = useState('')

    useEffect(() => {
      axios
        .post('http://localhost:3200/api/verify_authen', {
          token: username,
          tokenRole: role
        })
        .then(data => {
          setUsername(data.data.User)
          setStatus(data.data.stateRole)
        })
    }, [])

    console.log(username);

    useEffect(() => {
      if (user !== undefined) {
        if (status === 'นักศึกษา') {
          axios.post('http://localhost:3200/api/ReadStudent', { username: user }).then(data => {
            const setFristName = data.data[0].first_name
            setShowname(setFristName)
            setShowstate(status)
          })
        }
        // if (status === 'อาจารย์') {
        //   axios
        //     .post('http://0.0.0.0:3200/api/ReadTeacher', { username: user })
        //     .then((data) => {
        //       const setFristName = data.data[0].first_name;
        //       setShowname(setFristName);
        //       setShowstate(status);
        //     });
        // }
      }
    }, [user, status])
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {hiddenSm ? null : (
          <Box
            component='a'
            target='_blank'
            rel='noreferrer'
            sx={{ mr: 4, display: 'flex' }}
            href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free'
          >
            <img
              height={24}
              alt='github stars'
              src='https://img.shields.io/github/stars/themeselection/materio-mui-react-nextjs-admin-template-free?style=social'
            />
          </Box>
        )}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown />
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
