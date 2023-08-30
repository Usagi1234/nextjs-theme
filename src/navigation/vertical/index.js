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
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import ChevronDoubleRight from 'mdi-material-ui/ChevronDoubleRight'
import BlindIcon from '@mui/icons-material/Blind'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'
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

  let menuItems = [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/Home'
    }
  ]

  if (status === 'นักศึกษา') {
    menuItems.push(
      {
        sectionTitle: 'CWIE'
      },
      {
        title: 'Document Student',
        icon: ChevronDoubleRight,
        path: '/student/doc_updownStudent',
        openInNewTab: false
      },
      {
        title: 'Report Student',
        icon: ChevronDoubleRight,
        path: '/report_weeklyStudent'
      },
      {
        title: 'Supervision Student',
        icon: ChevronDoubleRight,
        path: '/supervisionStudent'
      }
    )
  } else if (status === 'อาจารย์') {
    menuItems.push(
      {
        sectionTitle: 'CWIE'
      },
      {
        title: 'Document Teacher',
        icon: ChevronDoubleRight,
        path: '/doc_updownTeacher',
        openInNewTab: false
      },
      {
        title: 'Report for Teacher',
        icon: ChevronDoubleRight,
        path: '/report_weeklyTeacher'
      },
      {
        title: 'แบบประเมิน(อาจารย์ประเมินบริษัท)',
        icon: AccessibilityNewIcon,
        path: '/cwie/assessmentcom'
      }
    )
  } else if (status === 'สถานประกอบการ') {
    menuItems.push(
      {
        sectionTitle: 'CWIE'
      },
      {
        title: 'Document Establishment',
        icon: ChevronDoubleRight,
        path: '/doc_updownEstablishment',
        openInNewTab: false
      },
      {
        title: 'Report for Establishment',
        icon: ChevronDoubleRight,
        path: '/report_weeklyEstablishment'
      },
      {
        title: 'Supervision Establishment',
        icon: ChevronDoubleRight,
        path: '/supervisionEstablishment'
      }
    )
  } else if (status === 'เจ้าหน้าที่') {
    menuItems.push(
      {
        sectionTitle: 'CWIE'
      },
      {
        title: 'Document Officer',
        icon: ChevronDoubleRight,
        path: '/doc_officer',
        openInNewTab: false
      },
      {
        title: 'Supervision List',
        icon: ChevronDoubleRight,
        path: '/supervisionStudent_list'
      },
      {
        title: 'Supervision Establishment',
        icon: ChevronDoubleRight,
        path: '/supervisionEstablishment'
      },
      {
        sectionTitle: 'Back Office'
      },
      {
        title: 'Student Management',
        icon: ChevronDoubleRight,
        path: '/bo_Student_manage'
      },
      {
        title: 'Teacher Management',
        icon: ChevronDoubleRight,
        path: '/bo_Teacher_manage'
      },
      {
        title: 'Establishment Management',
        icon: ChevronDoubleRight,
        path: '/bo_Establishment_manage'
      },
      {
        title: 'Supervision Establishment',
        icon: ChevronDoubleRight,
        path: '/bo_SupervisionES'
      },
      {
        title: 'Supervision Teacher',
        icon: ChevronDoubleRight,
        path: '/bo_SupervisionTC'
      }
    )
  }

  return menuItems
}

export default navigation
