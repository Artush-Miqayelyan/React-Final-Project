"use client"

import React, { useState, useEffect } from "react";

import { Button, Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DialpadIcon from '@mui/icons-material/Dialpad';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "@/app/redux/API/usersAPI";
import {
    selectUsers
} from '../../redux/features/users/usersSlice'
import {
    selectCurrentUser,
    setCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

import styles from './SignUp.module.css'
import { Email } from "@mui/icons-material";

function SignUp() {

    const users = useSelector(selectUsers)
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        console.log("Current User In Sign Up Page :::: ", currentUser)
    }, [currentUser])

    const [emailInputValue, setEmailInputValue] = useState('')
    const [usernameInputValue, setUsernameInputValue] = useState('')
    const [phoneNumberInputValue, setPhoneNumberInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [repeatPasswordInputValue, setRepeatPasswordInputValue] = useState('')

    // useEffect(() => {
    //     console.log("Email Input Value In Use Effect :::::: ", emailInputValue)
    // }, [emailInputValue])

    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/ //должны содержать только буквы, цифры, дефисы и подчеркивания, и быть длиной от 3 до 16 символов

    function validateUsername(username) {
        return usernameRegex.test(username);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function validateEmail(email) {
        return emailRegex.test(email);
    }

    const phoneRegex = /^\+374\d{8}$/ // формат +37494683388

    function validatePhoneNumber(phoneNumber) {
        return phoneRegex.test(phoneNumber);
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ // должны содержать по крайней мере одну букву верхнего и нижнего регистра, одну цифру и быть длиной от 8 символов

    function validatePassword(password) {
        return passwordRegex.test(password);
    }

    function isPasswordCorrespondsRepeatPassword(repeatPasswordInputValue, passwordInputValue) {
        return repeatPasswordInputValue === passwordInputValue
    }

    // function CheckIsCurrentEmailBusy() {
    //     console.log("UserEmail ::::: ", users[20].Email)
    //     console.log("Email Input Value :::: ", emailInputValue)

    //     const fetchUrlForMail = `http://localhost:4000/users?Email=${emailInputValue}`

    //     // fetch(fetchUrlForMail).then(res => res.json()).then(res => console.log(res))
    // }

    // function CheckIsPhoneNumberBusy() {


    //     console.log("Phone number Input Value :::: ", phoneNumberInputValue)

    //     const fetchUrlForPhoneNumber = `http://localhost:4000/users?PhoneNumber=+${phoneNumberInputValue.slice(1,phoneNumberInputValue.length)}`

    //     fetch(fetchUrlForPhoneNumber).then((res) => res.json()).then(res => console.log("Find User with current nunmber :::: " , res))
    // }

    function handleEmailInputValue(e) {
        setEmailInputValue(e.target.value)
    }

    function handleUsernameInputValue(e) {
        setUsernameInputValue(e.target.value)
    }

    function handlePhoneNumberInputValue(e) {
        setPhoneNumberInputValue(e.target.value)
    }

    function handlePasswordInputValue(e) {
        setPasswordInputValue(e.target.value)
    }

    function handleRepeatPasswordInputValue(e) {
        setRepeatPasswordInputValue(e.target.value)
    }

    function handleSuccessfullSignUp(newUserObj) {
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserObj),
        })
            .then(response => response.json())
            .then(data => {
                //console.log('Success:', data);
                dispatch(setCurrentUser(data))
                setEmailInputValue('')
                setUsernameInputValue('')
                setPhoneNumberInputValue('')
                setPasswordInputValue('')
                setRepeatPasswordInputValue('')
                //window.location.href = '/';
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className={styles.SignUpContainer}>
            <div className={styles.signUp}>
                Sign Up
            </div>
            <div className={styles.email}>
                <FormControl variant="standard">
                    <TextField
                        value={emailInputValue}
                        onChange={handleEmailInputValue}
                        onEnter
                        label={emailInputValue === '' || validateEmail(emailInputValue)
                            ? 'Email'
                            : 'Incorrect Format'}  //CheckIsCurrentEmailBusy()? "current email is busy" : 'Incorrect Format'
                        variant="standard"
                        sx={{ width: "320px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon color={emailInputValue === '' || validateEmail(emailInputValue) ? 'primary' : 'error'} />
                                </InputAdornment>)
                        }}
                        InputLabelProps={{
                            style: { color: emailInputValue === '' || validateEmail(emailInputValue) ? '' : 'red' }
                        }}
                    />
                </FormControl>
            </div>
            <div className={styles.username}>
                <FormControl variant="standard">
                    <TextField
                        value={usernameInputValue}
                        onChange={handleUsernameInputValue}
                        label={usernameInputValue === '' || validateUsername(usernameInputValue) ? 'Username' : usernameInputValue.length < 3 || usernameInputValue > 16 ? 'username must be from 3 to 16 characters.' : 'Only letters, numbers, hyphens and symbols'}
                        variant="standard"
                        sx={{ width: "320px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <AccountBoxIcon color={usernameInputValue === '' || validateUsername(usernameInputValue) ? 'primary' : 'error'} />
                                </InputAdornment>)
                        }}
                        InputLabelProps={{
                            style: { color: usernameInputValue === '' || validateUsername(usernameInputValue) ? '' : 'red', }
                        }}
                    />
                </FormControl>
            </div>
            <div className={styles.phoneNumber}>
                <FormControl variant="standard">
                    <TextField
                        value={phoneNumberInputValue}
                        onChange={handlePhoneNumberInputValue}
                        label={phoneNumberInputValue === '' || validatePhoneNumber(phoneNumberInputValue)
                            ? 'Phone Number'
                            : 'Format : "+374XXYYYYYY"'} //: CheckIsPhoneNumberBusy()? 'PhoneNumber Is busy' : 'Format : "+374XXYYYYYY"'
                        variant="standard"
                        sx={{ width: "320px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <DialpadIcon color={phoneNumberInputValue === '' || validatePhoneNumber(phoneNumberInputValue) ? 'primary' : 'error'} />
                                </InputAdornment>)
                        }}
                        InputLabelProps={{
                            style: { color: phoneNumberInputValue === '' || validatePhoneNumber(phoneNumberInputValue) ? '' : 'red', }
                        }}
                    />
                </FormControl>
            </div>
            <div className={styles.password}>
                <FormControl variant="standard">
                    <InputLabel
                        htmlFor="forPassword"
                        style={{ color: passwordInputValue === '' || validatePassword(passwordInputValue) ? '' : 'red' }}
                    >
                        {passwordInputValue === '' || validatePassword(passwordInputValue)
                            ? 'Password'
                            : passwordInputValue.length < 8
                                ? 'Password must be at least 8 characters long'
                                : 'At least 1 uppercase and lowercase letter and 1 number'
                        }
                    </InputLabel>
                    <Input
                        value={passwordInputValue}
                        onChange={handlePasswordInputValue}
                        sx={{ width: "320px" }}
                        id="forPassword"
                        type='password'
                        endAdornment={
                            <InputAdornment position="start">
                                <LockIcon
                                    color={passwordInputValue === '' || validatePassword(passwordInputValue) ? 'primary' : 'error'}
                                    aria-label="toggle password visibility"
                                />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className={styles.Repeatpassword}>
                <FormControl variant="standard">
                    <InputLabel
                        htmlFor="forRepeatPassword"
                        style={{
                            color: repeatPasswordInputValue === '' || isPasswordCorrespondsRepeatPassword(repeatPasswordInputValue, passwordInputValue)
                                ? ''
                                : 'red'
                        }}
                    >
                        {repeatPasswordInputValue === '' || isPasswordCorrespondsRepeatPassword(repeatPasswordInputValue, passwordInputValue)
                            ? 'Password'
                            : 'Does not match with password'
                        }
                    </InputLabel>
                    <Input
                        value={repeatPasswordInputValue}
                        onChange={handleRepeatPasswordInputValue}
                        sx={{ width: "320px" }}
                        id="forRepeatPassword"
                        type='password'
                        endAdornment={
                            <InputAdornment position="start">
                                <LockIcon
                                    color={repeatPasswordInputValue === '' || isPasswordCorrespondsRepeatPassword(repeatPasswordInputValue, passwordInputValue)
                                        ? 'primary'
                                        : 'error'}
                                    aria-label="toggle password visibility"
                                >
                                </LockIcon>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className={styles.checkbox}>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
            </div>
            <div className={styles.signUpBtn}>
                <Button variant="contained" fullWidth onClick={() => {
                    if (
                        validateUsername(usernameInputValue) &&
                        validateEmail(emailInputValue) &&
                        validatePhoneNumber(phoneNumberInputValue) &&
                        validatePassword(passwordInputValue) &&
                        isPasswordCorrespondsRepeatPassword(repeatPasswordInputValue, passwordInputValue)
                    ) {
                        const newUser = {
                            username: usernameInputValue,
                            offers: [],
                            Chats: [],
                            SavedOffers: [],
                            Email: emailInputValue,
                            UserID: users[users.length - 1].UserID + 1,
                            UserType: null,
                            PhoneNumber: phoneNumberInputValue,
                            password: passwordInputValue
                        }

                        handleSuccessfullSignUp(newUser) // posting data in json-server 
                    } else {
                        console.log("VALIDATE FALSE");
                    }
                }}>
                    Sign Up
                </Button>
            </div>
            <div className={styles.signUpWith}>
                <span>or sign up with</span>
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
        </div>
    )
}


export default SignUp;