import React, { useEffect, useState } from 'react';
import styles from './ProfileSettingsComponent.module.css'

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import DeleteIcon from '@mui/icons-material/Delete';

import PersonalInformtaionComponent from '../personalInfoComponent/personalInfo'
import ChangePassword from '../ChangePassowrd/ChangePassword';

import { useSelector, useDispatch } from 'react-redux';

import {
    selectCurrentUser,
    setCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'
import {
    ExitFromAccount
} from '../../redux/features/IsLoggedIn/IsLoggedInSlice'
import Link from 'next/link';

function SettingsComponent() {

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    const [alignment, setAlignment] = useState('personal information');
    const [showWarningAlert, setShowWarningAlert] = useState(false)

    const handleAlignmentChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    function handleDeleteAccount(id) {
        fetch(`http://localhost:4000/users/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                dispatch(setCurrentUser(''))
                dispatch(ExitFromAccount())
            })
    }

    return (
        <div className={styles.SettingsComponent}>
            <div className={styles.leftPart}>
                <ToggleButtonGroup
                    value={alignment}
                    onChange={handleAlignmentChange}
                    orientation="vertical"
                    color="primary"
                    exclusive
                    aria-label="Platform"
                    className={styles.ToggleSettingSection}>
                    <ToggleButton value='personal information' className={styles.PersonalInformation}>Personal Information</ToggleButton>
                    <ToggleButton value='password' className={styles.Password}>Password</ToggleButton>
                </ToggleButtonGroup>
                <Button
                    variant="text"
                    sx={{ color: 'red' }}
                    startIcon={<DeleteIcon />}
                    onClick={() => setShowWarningAlert(true)}
                >
                    Delete Account
                </Button>
            </div>
            <div>
                {showWarningAlert ? (
                    <Alert className={styles.Alert} severity="warning">
                        after deletion you will not be able to restore your account. Do you want to delete your account?
                        <div>
                            <Link href='/'>
                                <Button variant="text" onClick={() => {
                                    setShowWarningAlert(false);
                                    handleDeleteAccount(currentUser.id);
                                }}>Yes</Button>
                            </Link>
                            <Button variant="text" onClick={() => setShowWarningAlert(false)}>No</Button>
                        </div>
                    </Alert>
                ) : null}
            </div>
            <div className={styles.rightPart}>
                {alignment === 'personal information' ? <PersonalInformtaionComponent /> : <ChangePassword />}
            </div>
        </div>
    );
}

export default SettingsComponent;