import React, { useState } from 'react';
import { Box, TextField, Typography, Dialog } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'mobileno',
    headerName: 'Mobile No',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'password',
    headerName: 'Password',
    type: 'number',
    width: 110,
    editable: true,
  },
];
const rows = [
  { id: 1, name: 'Snow Jon', email: 'snow@gmail.com', mobileno:3752829698, password:1234 },
  { id: 2, name: 'Lannister Cersei', email: 'lannister@gmail.com', mobileno:7957587984,password:5678 },
  { id: 3, name: 'Lannister Jaime', email: 'Lannister@gmail.com', mobileno:3544787988,password:9806 },
  { id: 4, name: 'Stark Arya', email: 'stark@gmail.com', mobileno:6356837987,password:4567 },
  { id: 5, name: 'Targaryen Daenerys', email: 'targaryen@gmail.com', mobileno:7894386487,password:3456 },
  { id: 6, name: 'Melisandre patil', email: 'melisandre@gmail.com', mobileno:2357909857,password:7890 },
  { id: 7, name: 'Clifford Ferrara', email: 'clifford@gmail.com', mobileno:4784909080,password:6789 },
  { id: 8, name: 'Frances Rossini', email: 'francesrances@gmail.com', mobileno:9005763767,password:2345 },
  { id: 9, name: 'Roxie Harvey', email: 'roxie@gmail.com', mobileno:4838597957,password:2734 },
];


function Admin() {
  const [openPopup, setOpenPopup] = useState(false)

  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password:"",
})
const handleChange = (e) => {
    setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value,
}))
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
}
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sx={{ marginLeft: "0" }} sm={6}>
            <h1>Admins</h1>
          </Grid>
          <Grid item xs={12} sx={{ marginLeft: "auto", textAlign: "right" }} sm={6}>
            <>
            {/* Admins login form */}
            <Button 
            variant="contained" 
            style={{ marginTop: "20px" }} 
            onClick={() => setOpenPopup(true)}>
              Add Admin
              </Button>
              <Dialog open = {openPopup} onClose = {()=>setOpenPopup(false)}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyContent={'center'} margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} sx={{
                    ":hover":{
                        boxShadow:"10px 10px 20px #ccc",
                    }
                    }}>
                <Typography 
                variant="h3" 
                padding={3} 
                textAlign="center">
                    Admin Login
                    </Typography>

                
                <TextField
                onChange={handleChange}
                name="name"
                value={inputs.name}
                 margin="normal" 
                 type={'text'} 
                 variant="outlined" 
                 placeholder="Name"/>
                

                <TextField 
                onChange={handleChange}
                name="email"
                value={inputs.email}
                margin="normal" 
                type={'email'} 
                variant="outlined" 
                placeholder="Email"/>
                

                <TextField 
                onChange={handleChange}
                name="password"
                value={inputs.password}
                margin="normal" 
                type={'password'} 
                variant="outlined" 
                placeholder="Password"/>

                <Button type="submit"
                endIcon={<LoginOutlinedIcon/>}
                sx={{ marginTop:3, borderRadius:3 }} 
                variant="contained" 
                color="warning">
                Login
                </Button>
                </Box>
            </form>
            </Dialog>
              </>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box height="400px" width="auto">
          <DataGrid columns={columns} rows={rows} />
        </Box>
      </Container>
      
        
      

    </div>
  );
}


export default Admin;
