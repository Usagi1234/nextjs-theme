// ** React Imports
import React, { useEffect, useState } from 'react'

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
import axios from 'axios'

const TeacherDocumentPage = ({ semesterYear }) => {
  const [selectedSemesterYear, setSelectedSemesterYear] = useState(semesterYear[0].lsy_id)
  const [semesterYearData, setSemesterYearData] = useState(semesterYear[0])
  const [documentsData, setDocumentsData] = useState([])

  console.log('semesterYear: ', semesterYearData.lsy_semester)

  const handleSelectedSemesterYearChange = event => {
    setSelectedSemesterYear(event.target.value)
    const selectedSemesterYearData = semesterYear.find(item => item.lsy_id === event.target.value)
    setSemesterYearData(selectedSemesterYearData)
  }

  const columns = [
    {
      field: 'doc_id',
      headerName: 'ID',
      width: 50,
      editable: false
    },
    {
      field: 'doc_filename',
      headerName: 'File Name',
      width: 300,
      editable: false
    },
    {
      field: 'doc_type',
      headerName: 'Type',
      width: 100,
      editable: false
    },
    {
      field: 'updated_at',
      headerName: 'Last Update',
      width: 300,
      editable: false
    },
    {
      field: 'upload',
      headerName: 'Upload',
      width: 100,
      editable: false,
      renderCell: params => (
        <Button variant='contained' color='primary' size='small'>
          Upload
        </Button>
      )
    },
    {
      field: 'download',
      headerName: 'Download',
      width: 130,
      editable: false,
      renderCell: params => (
        <Button variant='contained' color='primary' size='small'>
          Download
        </Button>
      )
    }
  ]

  useEffect(() => {
    const fetchData = async () => {
      console.log(semesterYearData.lsy_semester, '/', semesterYearData.lsy_year)
      try {
        const response = await axios.post('http://localhost:3200/api/getDocumentsForTeacher', {
          semester: semesterYearData.lsy_semester,
          year: semesterYearData.lsy_year
        })
        setDocumentsData(response.data.results)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()
  }, [semesterYearData])

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
          <Box sx={{ display: 'flex', flexDirection: 'column', p: 6 }}>
            <Typography variant='h6' sx={{ px: 2 }}>
              เลือกปีการศึกษาที่ต้องการ
            </Typography>
            <FormControl sx={{ maxWidth: 300 }}>
              <Select
                id='select-semester-year'
                value={selectedSemesterYear}
                onChange={handleSelectedSemesterYearChange}
              >
                {semesterYear.map(item => (
                  <MenuItem value={item.lsy_id} key={item.lsy_id}>
                    {item.lsy_semester}/{item.lsy_year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {documentsData.length === 0 ? (
            <Box sx={{ p: 6 }}>
              <Typography variant='h6'>ไม่มีเอกสารในปีการศึกษานี้</Typography>
            </Box>
          ) : (
            <Box sx={{ p: 6 }}>
              <DataGrid rows={documentsData} columns={columns} getRowId={row => row.doc_id} />
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  )
}

// ssr
export async function getServerSideProps() {
  try {
    const resAllSemesterYear = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/getAllSemesterYear`)
    const semesterYear = resAllSemesterYear.data.results

    return {
      props: {
        semesterYear: semesterYear || [] // Provide a default value (empty array) if semesterYear is falsy
      }
    }
  } catch (error) {
    console.error('Error fetching semesterYear data:', error)

    return {
      props: {
        semesterYear: [] // Provide a default value in case of an error
      }
    }
  }
}

export default TeacherDocumentPage
