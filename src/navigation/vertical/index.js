// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import BlindIcon from '@mui/icons-material/Blind';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'

const navigation = () => {
  // -------------------- getCookie
  const username = Cookies.get('._jwtUsername')
  const role = Cookies.get('._jwtRole')
  // ===============================

  const [status, setStatus] = useState('')

  useEffect(() => {
    axios
      .post('http://localhost:3200/api/verify_authen', {
        token: username,
        tokenRole: role
      })
      .then(data => {
        setStatus(data.data.stateRole)
      })
  }, [])

  // ข้อมูลเมนูตามสิทธิ์การมองเห็น
  let menuItems = [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login_teacher',
    },
  ]

  if (status === 'นักศึกษา') {
    menuItems.push(
      {
        sectionTitle: 'CWIE'
      },
      {
        title: 'Student',
        icon: AccessibilityNewIcon,
        path: '/cwie/cwie-student',
      },
      {
        title: 'Uplond',
        icon: BlindIcon,
        path: '/cwie/uplond',
      },
      {
        title: 'แบบประเมิน(นักศึกษา)',
        icon: AccessibilityNewIcon,
        path: '/cwie/assessmentstudent',
      }
    )
  } else if (status === 'อาจารย์') {
    menuItems.push(
      {
        sectionTitle: 'CWIE'
      },
      {
        title: 'Admin',
        icon: BlindIcon,
        path: '/cwie/cwie-admin',
      },
      {
        title: 'แบบประเมิน(ระหว่างนิเทศ)',
        icon: AccessibilityNewIcon,
        path: '/cwie/assessment',
      },
      {
        title: 'แบบประเมิน(อาจารย์ประเมินบริษัท)',
        icon: AccessibilityNewIcon,
        path: '/cwie/assessmentcom',
      }
    )
  }

  return menuItems
}


export default navigation