import React, { useState } from 'react';
import styles from './ChangePassword.module.css'

import { FormControl, TextField, InputAdornment, InputLabel, Input, IconButton } from '@mui/material';
import Button from '@mui/material/Button';

import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useDispatch, useSelector } from 'react-redux';

import {
    selectCurrentUser,
    setCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

function ChangePassword() {

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = event => event.preventDefault();

    const [oldPasswordInputValue, setOldPasswordInputValue] = useState('')
    const [newPasswordInputValue, setNewPasswordInputValue] = useState('')
    const [repeatNewPasswordInputValue, setRepeatNewPasswordInputValue] = useState('')

    function handleOldPasswordInputValue(e) {
        setOldPasswordInputValue(e.target.value)
    }

    function handleNewPasswordInputValue(e) {
        setNewPasswordInputValue(e.target.value)
    }

    function handleRepeatNewPasswordInputValue(e) {
        setRepeatNewPasswordInputValue(e.target.value)
    }

    //validation ⬇️

    function isOldPasswordWrittenCorrect() {
        return currentUser.password === oldPasswordInputValue
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ // должны содержать по крайней мере одну букву верхнего и нижнего регистра, одну цифру и быть длиной от 8 символов

    function validatePassword(password) {
        return passwordRegex.test(password);
    }

    function isPasswordCorrespondsRepeatPassword() {
        return newPasswordInputValue === repeatNewPasswordInputValue
    }

    //onSubmit ⬇️

    function onSubmit(id, newData) {
        fetch(`http://localhost:4000/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then((res) => {
                dispatch(setCurrentUser(res))
                setOldPasswordInputValue('')
                setNewPasswordInputValue('')
                setRepeatNewPasswordInputValue('')
            })
    }

    return (
        <div className={styles.ChangePassword}>
            <FormControl variant="standard">
                <TextField
                    value={oldPasswordInputValue}
                    onChange={handleOldPasswordInputValue}
                    onEnter
                    type={showPassword ? 'text' : 'password'}
                    label={oldPasswordInputValue === '' || isOldPasswordWrittenCorrect() ? 'Old Passowrd' : 'Incorrect'}
                    variant="standard"
                    sx={{ width: "320px" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    color="primary"
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>)
                    }}
                    InputLabelProps={{
                        style: { color: oldPasswordInputValue === '' || isOldPasswordWrittenCorrect() ? '' : 'red', }
                    }}
                />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel
                    htmlFor="forPassword"
                    style={{ color: newPasswordInputValue === '' || validatePassword(newPasswordInputValue) ? '' : 'red' }}
                >
                    {newPasswordInputValue === '' || validatePassword(newPasswordInputValue)
                        ? ' New Password'
                        : newPasswordInputValue.length < 8
                            ? 'Password must be at least 8 characters long'
                            : 'At least 1 uppercase and lowercase letter and 1 number'
                    }
                </InputLabel>
                <Input
                    value={newPasswordInputValue}
                    onChange={handleNewPasswordInputValue}
                    sx={{ width: "320px" }}
                    id="forPassword"
                    type='password'
                    endAdornment={
                        <InputAdornment position="start">
                            <VpnKeyIcon
                                color={newPasswordInputValue === '' || validatePassword(newPasswordInputValue) ? 'primary' : 'error'}
                                aria-label="toggle password visibility"
                            />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel
                    htmlFor="forRepeatPassword"
                    style={{
                        color: repeatNewPasswordInputValue === '' || isPasswordCorrespondsRepeatPassword(repeatNewPasswordInputValue, newPasswordInputValue)
                            ? ''
                            : 'red'
                    }}
                >
                    {repeatNewPasswordInputValue === '' || isPasswordCorrespondsRepeatPassword(repeatNewPasswordInputValue, newPasswordInputValue)
                        ? ' Repeat Password'
                        : 'Does not match with password'
                    }
                </InputLabel>
                <Input
                    value={repeatNewPasswordInputValue}
                    onChange={handleRepeatNewPasswordInputValue}
                    sx={{ width: "320px" }}
                    id="forRepeatPassword"
                    type='password'
                    endAdornment={
                        <InputAdornment position="start">
                            <VpnKeyIcon
                                color={repeatNewPasswordInputValue === '' || isPasswordCorrespondsRepeatPassword(repeatNewPasswordInputValue, newPasswordInputValue)
                                    ? 'primary'
                                    : 'error'}
                                aria-label="toggle password visibility"
                            >
                            </VpnKeyIcon>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button variant="contained" onClick={() => {
                if (
                    isOldPasswordWrittenCorrect() &&
                    validatePassword(newPasswordInputValue) &&
                    isPasswordCorrespondsRepeatPassword()
                ) {
                    console.log('In Submit condition')
                    const newData = {
                        ...currentUser,
                        password: newPasswordInputValue
                    }

                    onSubmit(currentUser.id, newData)
                } else {
                    console.log('validate')
                }
            }}>Submit</Button>
        </div >
    );
}

export default ChangePassword;