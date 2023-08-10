import { memo, useEffect, useState } from "react"

import FormWrapper, { InOrDownButton } from "../Components/FormWrapper";
import FullPageCenteredWrapper from "../Components/FullPageCenteredWrapper";
import { Box, Grid, TextField, Typography } from "@mui/material";
import PasswordInput from "../Components/PasswordInput";
import ForbiddenDialog from "../Components/ForbiddenDialog";
import axios from "axios";

const Login = ({ message }) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    // const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
    //     email:'',
    //     password:''
    // });
    // useEffect(()=>{
    //     reset('password');
    // },[errors,message])
    console.log(data)
    const handleChange = (e) => {

        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        // axios.post('http://127.0.0.1:7000/api/login', data).then(res => {
        //     localStorage.setItem('token', res.data.token)

        // })
    }
    return (
        <FullPageCenteredWrapper>
            {/* <Head title="Login" /> */}
            <FormWrapper onSubmit={handleSubmit} btnText="Login">
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                    >
                        <img
                            src={`${import.meta.env.VITE_API_DOMAIN}/api/image/images/logo.png`}
                            height="80"
                            alt="logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h5" component="h1" color="primary.light">
                        Login
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        value={data.email}
                        // error={errors.hasOwnProperty('email')}
                        // helperText={errors.hasOwnProperty('email') && errors.email}
                        name="email"
                        onChange={handleChange}
                        fullWidth
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <PasswordInput
                        label='Password'
                        name='password'
                        value={data.password}
                        handle={handleChange}
                    // error={errors.hasOwnProperty('password')}
                    // helperText={errors.hasOwnProperty('password') && errors.password}
                    />
                    {/* <Link href={route('forget.password')} style={{ marginTop: 5, textDecoration: 'none' }}> */}
                    <Typography color='secondary.light'>Forget Password?</Typography>
                    {/* </Link> */}
                </Grid>
                <InOrDownButton In={true}>
                    {/* <Link href={route('signup')} style={{ textDecoration: 'none' }}> */}
                    <Typography sx={{ color: 'secondary.light', fontSize: '.8rem', fontWeight: 600, textAlign: 'center', mt: 2 }}>
                        DO NOT HAVE ANY ACCOUNT?
                        <Typography component="span" sx={{ color: "primary.main", display: 'inline-block', fontSize: '.8rem', ml: .3 }}>CLICK HERE</Typography>
                    </Typography>
                    {/* </Link> */}
                </InOrDownButton>
            </FormWrapper>
            <ForbiddenDialog open={message == 403 ? true : false} />
        </FullPageCenteredWrapper>
    )
}

export default memo(Login);
