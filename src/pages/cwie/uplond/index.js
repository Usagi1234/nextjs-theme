// ** React Imports
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Typography, Grid, TextField, Box } from '@mui/material'
import { StyledDataGrid } from 'src/views/cwie/styled'

function formUploadfile() {
  const [getpdf, setGetpdf] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileName, setFileName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3200/api/getfilepdf').then(response => {
      console.log(response)
      setGetpdf(response.data)
    })
  }, [])

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0])
    setFileName(event.target.files[0].name)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('pdf-file', selectedFile, fileName)
    formData.append('owner', 'admin')
    formData.append('type', 'cooperative')
    formData.append('year', 2599)
    // console.log(formData);
    // console.log('File Name in formData:', formData.get('pdf-file').name); // Logging the file name in formData
    axios
      .post('http://localhost:3200/api/uploadfilepdf', formData)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <Typography variant='h2'> Uplond File </Typography>
      <Box p={8}>
        <Grid container spacing={6}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems='center'>
              <Grid item>
                <input
                  type='file'
                  onChange={handleFileChange}
                  accept='.pdf'
                  style={{ display: 'none' }}
                  id='pdf-file-upload'
                />
                <label htmlFor='pdf-file-upload'>
                  <Button variant='contained' component='span'>
                    Upload File
                  </Button>
                </label>
              </Grid>
              <Grid item>
                <TextField label='Selected File' value={fileName} variant='outlined' size='small' disabled />
              </Grid>
              <Grid item>
                <Button variant='contained' type='submit'>
                  Upload
                </Button>
              </Grid>
            </Grid>
          </form>

          {getpdf && (
            <div style={{ height: 300, width: '100%' }}>
              <StyledDataGrid
                autoHeight
                rows={Object.values(getpdf).map(val => ({ ...val, id: val.up_id }))}
                getRowId={row => row.id}
                columns={[
                  { field: 'filename', headerName: 'Filename', width: 300 },
                  { field: 'owner', headerName: 'Owner', width: 150 },
                  { field: 'year', headerName: 'Year', width: 220 },
                  { field: 'type', headerName: 'Type', width: 150 }
                ]}
              />
            </div>
          )}
        </Grid>
      </Box>
    </div>
  )
}

export default formUploadfile
