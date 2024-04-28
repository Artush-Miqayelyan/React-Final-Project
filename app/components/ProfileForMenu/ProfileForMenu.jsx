import React, { useEffect } from 'react';
import styles from './ProfileForMenu.module.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { useDispatch , useSelector } from 'react-redux';

import {
    ExitFromAccount,
    selectIsLoggedIn
} from '../../redux/features/IsLoggedIn/IsLoggedInSlice'


function ProfileBarInMenu({imgSrc , username , userEmail}) {  //enter props from parent component (need to add current user state)

    const dispatch = useDispatch()
    const IsLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        console.log("TOGGLE IS LOGGED IN ::: " , IsLoggedIn)
    } , [IsLoggedIn])


    return (
        <div className={styles.ProfileBarInMenu}>
            <div className={styles.top}>
                <div className={styles.ProfileImg}>
                    <Avatar alt="Remy Sharp" src="" />
                </div>
                <div className={styles.exitFromProfileBtn}>
                    <Button onClick={() => dispatch(ExitFromAccount())} variant="contained" sx={{ backgroundColor: 'red' }}>Exit</Button>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.username}>Artush Miqayelyan</div>
                <div className={styles.userEmail}>miqaelyan.artush@icloud.com</div>
            </div>
        </div>
    );
}

export default ProfileBarInMenu;