import React from 'react';
import styles from './ChangePassword.module.css'

import { FormControl , TextField , InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';

import VpnKeyIcon from '@mui/icons-material/VpnKey';

function ChangePassword() {
    return (
        <div className={styles.ChangePassword}>
            <FormControl variant="standard">
                <TextField
                    onEnter
                    label='Old Passowrd'
                    variant="standard"
                    sx={{ width: "320px" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyIcon color='primary' />
                            </InputAdornment>)
                    }}
                />
            </FormControl>
            <FormControl variant="standard">
                <TextField
                    onEnter
                    label='Username'
                    variant="standard"
                    sx={{ width: "320px" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyIcon color='primary' />
                            </InputAdornment>)
                    }}
                />
            </FormControl>
            <FormControl variant="standard">
                <TextField
                    onEnter
                    label='Phone Number'
                    variant="standard"
                    sx={{ width: "320px" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyIcon color='primary' />
                            </InputAdornment>)
                    }}
                />
            </FormControl>
            <Button variant="contained">Change Password</Button>
        </div>
    );
}

export default ChangePassword;