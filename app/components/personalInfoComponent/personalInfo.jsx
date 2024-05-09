import React, { useState } from 'react';
import styles from './personalInfo.module.css'

import { FormControl, TextField, InputAdornment } from '@mui/material';

import AvatarUpload from '../AvatarUpload/avatarUpload'

import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Button from '@mui/material/Button';

import { useSelector, useDispatch } from 'react-redux';

import {
    selectCurrentUser,
    setCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'
import { Email } from '@mui/icons-material';

function PersonalInformtaionComponent() {

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    const [image, setImage] = useState(null);

    const [emailInputValue, setEmailInputValue] = useState('')
    const [usernameInputValue, setUsernameInputValue] = useState('')
    const [phoneNumberInputValue, setPhoneNumberInputValue] = useState('')

    function handleEmailInputValue(e) {
        setEmailInputValue(e.target.value)
    }

    function handleUsernameInputValue(e) {
        setUsernameInputValue(e.target.value)
    }

    function handlePhoneNumberInputValue(e) {
        setPhoneNumberInputValue(e.target.value)
    }

    //validation ⬇️

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

    //onSubmit

    function onSubmit(id, newData) {
        fetch(`http://localhost:4000/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(res => dispatch(setCurrentUser(res)))

    }

    return (
        <div className={styles.PersonalInformtaionComponent}>
            <div className={styles.chooseAvatarContainer}>
                <AvatarUpload 
                    image={image}
                    setImage={setImage}
                />
                <p>Upload only .jpg images, <br />
                    the size of which should <br />
                    not exceed 250kb.
                </p>
            </div>
            <div className={styles.otherSettings}>
                <FormControl variant="standard">
                    <TextField
                        value={emailInputValue}
                        onChange={handleEmailInputValue}
                        onEnter
                        label={emailInputValue === '' || validateEmail(emailInputValue)
                            ? 'Email'
                            : 'Incorrect Format'}
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
                <FormControl variant="standard">
                    <TextField
                        value={usernameInputValue}
                        onChange={handleUsernameInputValue}
                        onEnter
                        label={usernameInputValue === '' || validateUsername(usernameInputValue) ? 'Username' : usernameInputValue.length < 3 || usernameInputValue > 16
                            ? 'username must be from 3 to 16 characters.'
                            : 'Only letters, numbers, hyphens and symbols'}
                        variant="standard"
                        sx={{ width: "320px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon color={usernameInputValue === '' || validateUsername(usernameInputValue) ? 'primary' : 'error'} />
                                </InputAdornment>)
                        }}
                        InputLabelProps={{
                            style: { color: usernameInputValue === '' || validateUsername(usernameInputValue) ? '' : 'red', }
                        }}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <TextField
                        value={phoneNumberInputValue}
                        onChange={handlePhoneNumberInputValue}
                        onEnter
                        label={phoneNumberInputValue === '' || validatePhoneNumber(phoneNumberInputValue)
                            ? 'Phone Number'
                            : 'Format : "+374XXYYYYYY"'}
                        variant="standard"
                        sx={{ width: "320px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <LocalPhoneIcon color={phoneNumberInputValue === '' || validatePhoneNumber(phoneNumberInputValue) ? 'primary' : 'error'} />
                                </InputAdornment>)
                        }}
                        InputLabelProps={{
                            style: { color: phoneNumberInputValue === '' || validatePhoneNumber(phoneNumberInputValue) ? '' : 'red', }
                        }}
                    />
                </FormControl>
                <Button variant="contained" onClick={() => {
                    if (
                        validateUsername(usernameInputValue) || usernameInputValue === '' &&
                        validateEmail(emailInputValue) || emailInputValue === '' &&
                        validatePhoneNumber(phoneNumberInputValue) || phoneNumberInputValue === ''
                    ) {

                        console.log("OKKKKKKKK")

                        const newData = {
                            ...currentUser,
                            AvatarUrl: (image ? image : currentUser.AvatarUrl),
                            username: (usernameInputValue ? usernameInputValue : currentUser.username),
                            Email: (emailInputValue ? emailInputValue : currentUser.Email),
                            PhoneNumber: (phoneNumberInputValue ? phoneNumberInputValue : currentUser.PhoneNumber)
                        }

                        onSubmit(currentUser.id, newData)
                    }
                }}>Save Changes</Button>
            </div>
        </div>
    );
}

export default PersonalInformtaionComponent;