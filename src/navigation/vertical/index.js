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

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      sectionTitle: 'CWIE'
    },
    {
      title: 'Admin',
      icon: BlindIcon,
      path: '/cwie/cwie-admin',
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
      title: 'แบบประเมิน(ระหว่างนิเทศ)',
      icon: AccessibilityNewIcon,
      path: '/cwie/assessment',
    },
    {
      title: 'แบบประเมิน(อาจารย์ประเมินบริษัท)',
      icon: AccessibilityNewIcon,
      path: '/cwie/assessmentcom',
    },
    {
      title: 'แบบประเมิน(นักศึกษา)',
      icon: AccessibilityNewIcon,
      path: '/cwie/assessmentstudent',
    },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
