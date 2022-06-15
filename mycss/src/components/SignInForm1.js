import {Grid, Box, Typography,TextField,Button} from '@mui/material';



const SignInForm1 = () => {
  return (

    <Box width ={800} ml={80} mt={20}>        

        <Grid container rowSpacing={2}>

            <Grid item md={12}>
            <Typography variant="h5" >
                SIGN IN
            </Typography>
            </Grid>

            <Grid item md={12}>
            <TextField  label="enter email" variant="outlined" />                
            </Grid>

            <Grid item md={12}>
            <TextField  label="enter password" variant="outlined" />                
            </Grid>

            <Grid item md={12}>
            <Button variant="contained">SIGN IN</Button>                
            </Grid>

            <Grid item md={12}>
            <Typography mr ={2} variant="h7"  >
                New User?? 
            </Typography>
            <Button>Register</Button>

            </Grid>




        </Grid>
    </Box>
  )
}

export default SignInForm1