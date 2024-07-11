import React from 'react';
import { Box, Typography, Button,TextField } from '@mui/material';
import Link  from 'next/link';
import { Stack } from '@mui/system';



const AuthRegister = ({ title, subtitle, subtext })=> {
    
    const handleRegister = (event) => {
        event.preventDefault();
        alert("handle Register");
      };



    return (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>
            <Stack mb={3}>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
                <TextField id="name" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                <TextField id="email" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                <TextField id="password" type='password' variant="outlined" fullWidth />
            </Stack>
            <Button onClick={handleRegister} color="primary" variant="contained" size="large" fullWidth component={Link} href="/">
                Sign Up
            </Button>
        </Box>
        {subtitle}
    </>
);

}

export default AuthRegister;
