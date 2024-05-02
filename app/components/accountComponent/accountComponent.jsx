'use client'

import React, { useState } from 'react';
import styles from './accountComponent.module.css';

import Avatar from '@mui/material/Avatar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import SettingsComponent from '../accountSettingsComponent/ProfileSettingsComponent'

function AccountComponent(avatar, username, email, phoneNumber) {

    const [alignment, setAlignment] = useState('My Offers');

    const handleAlignmentChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div className={styles.ProfileComponent}>
            <div className={styles.InfoAboutProfileBar}>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 120, height: 120 }}
                />
                <div className={styles.info}>
                    <div className={styles.Username}>Artush Miqayelyan</div>
                    <div className={styles.Email}>miqaelyan.artush@icloud.com</div>
                    <div className={styles.PhoneNumber}>+374-94-68-33-88</div>
                </div>
            </div>
            <ToggleButtonGroup
                value={alignment}
                onChange={handleAlignmentChange}
                color="primary"
                exclusive
                aria-label="Platform"
                className={styles.TogglePageContainer}>
                <ToggleButton value='My Offers' className={styles.MyOffers}>My Offers</ToggleButton>
                <ToggleButton value='Saved' className={styles.Saved}>Saved</ToggleButton>
                <ToggleButton value='Profile Settings' className={styles.Settings}>Profile Settigns</ToggleButton>
            </ToggleButtonGroup>
            <div className={styles.MainContent}>
                {alignment === 'My Offers'
                    ? <h1>My Offers Comnponent</h1>
                    : alignment === 'Saved'
                        ? <h1>Saved Component</h1>
                        : <SettingsComponent />
                }
            </div>
        </div>
    );
}

export default AccountComponent;