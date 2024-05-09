import React, { useEffect } from 'react';
import styles from './ProfileForMenu.module.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { useDispatch , useSelector } from 'react-redux';

import Link from 'next/link';

import {
    ExitFromAccount
} from '../../redux/features/IsLoggedIn/IsLoggedInSlice'
import {
    setCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

function ProfileBarInMenu({imgURL , username , userEmail}) {  //enter props from parent component (need to add current user state)

    const dispatch = useDispatch()

    return (
        <div className={styles.ProfileBarInMenu}>
            <div className={styles.top}>
                <div className={styles.ProfileImg}>
                    <Avatar alt="Remy Sharp" src={imgURL} />
                </div>
                <Link className={styles.exitFromProfileBtn} href="/">
                    <Button onClick={() => {
                        dispatch(ExitFromAccount())
                        dispatch(setCurrentUser(''))
                    }} variant="contained" sx={{ backgroundColor: 'red' }}>Exit</Button>
                </Link>
            </div>
            <div className={styles.bottom}>
                <div className={styles.username}>{username}</div>
                <div className={styles.userEmail}>{userEmail}</div>
            </div>
        </div>
    );
}

export default ProfileBarInMenu;