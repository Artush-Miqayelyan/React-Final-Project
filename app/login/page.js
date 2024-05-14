"use client"

import { useState, Fragment } from "react";

import { Button, Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';

import styles from "./singIn.module.css"

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Visibility } from "@mui/icons-material";
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

import {
    setCurrentUser
} from '../redux/features/currentUser/currentUserSlice'
import {
    SignInToAccount
} from '../redux/features/IsLoggedIn/IsLoggedInSlice'

function SignIn() {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const currentPath = usePathname()
    console.log(currentPath)

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = event => event.preventDefault();

    const [isIncorrectDataAlertVisible, setIsIncorrectDataAlertVisible] = useState(false)
    const [isSuccessfullSignInAlertVisible, setIsSuccessfullSignInAlertVisible] = useState(false)

    const [usernameInputValue, setUsernameInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')

    function handleUserEmailInputValue(e) {
        setUsernameInputValue(e.target.value)
    }

    function handlePasswordInputValue(e) {
        setPasswordInputValue(e.target.value)
    }

    function handleOnSignInClick() {

        fetch(`http://localhost:4000/users?username=${usernameInputValue}`)
            .then(user => user.json())
            .then((user) => {
                if (user[0]?.username === usernameInputValue) { // если аккаунт найден
                    if (user[0]?.password === passwordInputValue) { // если пароль верный
                        console.log('sign-in')
                        setIsSuccessfullSignInAlertVisible(true)
                        setIsIncorrectDataAlertVisible(false)
                        dispatch(setCurrentUser(user[0]))
                        dispatch(SignInToAccount())
                    } else { //если пароль неверный
                        setIsIncorrectDataAlertVisible(true)
                    }
                } else {  //если аккаунт не найден
                    setIsIncorrectDataAlertVisible(true)
                }
            })

    }

    return <>
        {isSuccessfullSignInAlertVisible ? null : <>
            <div className={styles.login}>
                <div className={styles.signin} >
                    <span>Sign In</span>
                </div>
                <div className={styles.username}>
                    <FormControl variant="standard">
                        <TextField
                            value={usernameInputValue}
                            onChange={handleUserEmailInputValue}
                            label='Username'
                            variant="standard"
                            sx={{ width: "320px" }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon color="primary" />
                                    </InputAdornment>)
                            }}
                        />
                    </FormControl>
                </div>
                <div className={styles.password}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="forPassword">Password</InputLabel>
                        <Input
                            value={passwordInputValue}
                            onChange={handlePasswordInputValue}
                            sx={{ width: "320px" }}
                            id="forPassword"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        color="primary"
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div className={styles.checkbox}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <span className={styles.forgot}>Forgot password?</span>
                </div>
                <div className={styles.signinBtn}>
                    <Button variant="contained" fullWidth onClick={handleOnSignInClick}>
                        Sign In
                    </Button>
                </div>
                <div className={styles.signinwith}>
                    <span>or sign in with</span>
                </div>
                <div className={styles.socnetwork}>
                    <Link href="https://www.facebook.com" target="_blank">
                        <FacebookIcon fontSize="large" color="primary" sx={{ cursor: "pointer" }} />
                    </Link>
                    <Link href="https://twitter.com/" target="_blank">
                        <TwitterIcon fontSize="large" color="primary" sx={{ cursor: "pointer", marginLeft: "6px" }} />
                    </Link>
                    <Link href="https://www.google.com/" target="_blank">
                        <GoogleIcon fontSize="large" color="error" sx={{ cursor: "pointer", marginLeft: "6px" }} />
                    </Link>
                    <Link href="https://github.com/" target="_blank">
                        <GitHubIcon fontSize="large" color="action" sx={{ cursor: "pointer", marginLeft: "6px" }} />
                    </Link>
                </div>
                <div className={styles.signinwith}>
                    <span>Don't have an account? <Link href='/sign-up' className={styles.forgot}>Sign Up</Link></span>
                </div>

            </div>
        </>}
        {isSuccessfullSignInAlertVisible && currentPath === '/login' ? <Alert severity="success" className={styles.SuccessfullSignInAlert}>
            you have successfully logged in to your account
            <div>
                <Link href='/'>
                    <Button variant="text">Click to go to the main page</Button>
                </Link>
            </div>
        </Alert> : null}
        {isIncorrectDataAlertVisible ? <Collapse in={isIncorrectDataAlertVisible} className={styles.IncorrectDataAlert}>
            <Alert
                severity="error"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setIsIncorrectDataAlertVisible(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                Incorrect Username or Password
            </Alert>
        </Collapse> : null}
    </>

}

export default SignIn

