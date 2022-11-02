import React from "react";
import {Box, Button, TextField, Typography} from '@mui/material';
import { useState } from "react";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';


function Auth(){
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
    return(
        <div>
            <Dialog open = {open} onClose = {()=>setOpen(false)}>
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
        </div>
    )
}
export default Auth;