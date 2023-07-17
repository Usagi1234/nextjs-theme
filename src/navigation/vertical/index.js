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

const navigation = () => {
  return [
    {
      title: 'Home Page',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Before the cooperative'
    },
    {
      title: 'Document Student',
      icon: Login,
      path: '/doc_updownStudent',
      openInNewTab: false
    },
    {
      title: 'Document Teacher',
      icon: Login,
      path: '/doc_updownTeacher',
      openInNewTab: false
    },
    {
      title: 'Document Establishment',
      icon: Login,
      path: '/doc_updownEstablishment',
      openInNewTab: false
    },
    {
      title: 'Document Officer',
      icon: Login,
      path: '/doc_officer',
      openInNewTab: false
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'Between collaborations.'
    },
    {
      title: 'Report Student',
      icon: FormatLetterCase,
      path: '/report_weeklyStudent'
    },
    {
      title: 'Report for Teacher',
      icon: FormatLetterCase,
      path: '/report_weeklyTeacher'
    },
    {
      title: 'Report for Establishment',
      icon: FormatLetterCase,
      path: '/report_weeklyTeacher'
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
    },
    {
      sectionTitle: 'after cooperative.'
    },
    {
      title: 'Supervision Student',
      icon: Table,
      path: '/supervisionStudent'
    },
    {
      title: 'Supervision List',
      icon: Table,
      path: '/supervisionStudent_list'
    },
    {
      title: 'Supervision Teacher',
      icon: Table,
      path: '/supervisionTeacher'
    },

    {
      sectionTitle: 'Back Office'
    }
  ]
}

export default navigation
