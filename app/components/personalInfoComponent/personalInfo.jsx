import React, { useState } from 'react';
import styles from './personalInfo.module.css'

import { FormControl, TextField, InputAdornment } from '@mui/material';

import AvatarUpload from '../AvatarUpload/avatarUpload'

import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Button from '@mui/material/Button';

import Avatar from '@mui/material/Avatar';

function PersonalInformtaionComponent() {

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

    function handleSubmitChanges(){
        ////////// Submit Logic
    }

    return (
        <div className={styles.PersonalInformtaionComponent}>
            <div className={styles.chooseAvatarContainer}>
                <AvatarUpload />
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
                        label='Email'
                        variant="standard"
                        sx={{ width: "320px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon color='primary' />
                                </InputAdornment>)
                        }}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <TextField
                        value={usernameInputValue}
                        onChange={handleUsernameInputValue}
                        onEnter
                        label='Username'
                        variant="standard"
                        sx={{ width: "320px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon color='primary' />
                                </InputAdornment>)
                        }}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <TextField
                        value={phoneNumberInputValue}
                        onChange={handlePhoneNumberInputValue}
                        onEnter
                        label='Phone Number'
                        variant="standard"
                        sx={{ width: "320px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <LocalPhoneIcon color='primary' />
                                </InputAdornment>)
                        }}
                    />
                </FormControl>
                <Button variant="contained">Save Changes</Button>
            </div>
        </div>
    );
}

export default PersonalInformtaionComponent;