import React, { useState } from 'react';
import styles from './ProfileSettingsComponent.module.css'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import PersonalInformtaionComponent from '../personalInfoComponent/personalInfo'
import ChangePassword from '../ChangePassowrd/ChangePassword';

import { useSelector, useDispatch } from 'react-redux';

import {
    selectUsers,
    setUsers
} from '../../redux/features/users/usersSlice'
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
    const users = useSelector(selectUsers)
    const currentUser = useSelector(selectCurrentUser)

    const [alignment, setAlignment] = useState('personal information');

    const handleAlignmentChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    function handleDeleteAccount(id) {
        const newUsers = users.filter(user => user.UserID !== id)

        dispatch(setUsers(newUsers))
        dispatch(setCurrentUser(''))
        dispatch(ExitFromAccount())
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

                <Link href='/'>
                    <Button
                        variant="text"
                        sx={{ color: 'red' }}
                        startIcon={<DeleteIcon></DeleteIcon>}
                        onClick={() => handleDeleteAccount(currentUser.UserID)}
                    >
                        Delete Account
                    </Button>
                </Link>

            </div>
            <div className={styles.rightPart}>
                {alignment === 'personal information' ? <PersonalInformtaionComponent /> : <ChangePassword />}
            </div>
        </div>
    );
}

export default SettingsComponent;