"use client"
import { Button, Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import styles from "./singIn.module.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useState } from "react";
import { Visibility } from "@mui/icons-material";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = event => event.preventDefault();
    
    return (
        <div className={styles.login}>
            <div className={styles.signin}>
                <span>Sign In</span>
            </div>
            <div className={styles.username}>
                <FormControl variant="standard">
                    <TextField
                        label="Username / Email"
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
                <Button variant="contained" fullWidth >
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
                <span>Don't have an account? <span className={styles.forgot}>Sign Up</span></span>
            </div>
        </div>
    )
}

export default SignIn