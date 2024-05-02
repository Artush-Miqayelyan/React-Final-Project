import React, { useState } from 'react';
import styles from './ProfileSettingsComponent.module.css'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import PersonalInformtaionComponent from '../personalInfoComponent/personalInfo'
import ChangePassword from '../ChangePassowrd/ChangePassword';


function SettingsComponent() {

    const [alignment, setAlignment] = useState('personal information');

    const handleAlignmentChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

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
                    sx={{color: 'red'}}
                    startIcon={<DeleteIcon></DeleteIcon>}
                >
                    Delete Account
                </Button>
            </div>
            <div className={styles.rightPart}>
                {alignment === 'personal information' ? <PersonalInformtaionComponent /> : <ChangePassword/>}
            </div>
        </div>
    );
}

export default SettingsComponent;