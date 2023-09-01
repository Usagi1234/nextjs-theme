// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Typography
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

// ** MDI Imports
import Icon from '@mdi/react'
import { mdiFileDocumentCheckOutline } from '@mdi/js'

const TeacherDocumentPage = ({ data }) => {
  const [uploadFile, setUploadFile] = useState(null)
  const [semester, setSemester] = useState('')
  const [year, setYear] = useState('')

  const handleTabChange = (e, val) => {
    setTabValue(val)
  }

  return (
    <Box>
      <Card>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', m: 3 }}>
            <Icon path={mdiFileDocumentCheckOutline} size={6} />
            <Box sx={{ ml: 2 }}>
              <Typography variant='h4'>Document for Teacher</Typography>
              <Typography variant='h6'>Download document and Upload Document sign Co-operative</Typography>
            </Box>
          </Box>

          <Divider />
          <Box sx={{ p: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', mr: 6 }}>
                <FormControl>
                  <Typography>SEMESTER</Typography>
                  <Select value={semester} onChange={e => setSemester(e.target.value)}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', mr: 6 }}>
                <FormControl>
                  <Typography>YEAR</Typography>
                  <Select value={year} onChange={e => setYear(e.target.value)}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <DataGrid />
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

// SSR
// export async function getServerSideProps() {
//   return {
//     props: { data: data }
//   }
// }

export default TeacherDocumentPage
