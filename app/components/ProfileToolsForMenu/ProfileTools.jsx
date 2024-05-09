import React from 'react';
import styles from './ProfileTools.module.css'
import Link from 'next/link';
import MessageIcon from '@mui/icons-material/Message';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function ProfileTools({closeModal}) {
    return (
        <div className={styles.ProfileTools}>
            <Link href="/messgaes">
                <div className={styles.item} onClick={closeModal}>
                    <MessageIcon fontSize="large" color="primary" />
                    <p>Messages</p>
                </div>
            </Link>
            <Link href="/account">
                <div className={styles.item} onClick={closeModal}>
                    <DirectionsCarIcon fontSize="large" color="primary" />
                    <p>My Offers</p>
                </div>
            </Link>
            <Link href="/account">
                <div className={styles.item} onClick={closeModal}>
                    <FavoriteIcon fontSize="large" color="primary" />
                    <p>Saved</p>
                </div>
            </Link>
            <Link href="/account">
                <div className={styles.item} onClick={closeModal}>
                    <AccountBoxIcon fontSize="large" color="primary" />
                    <p>Profile</p>
                </div>
            </Link>
        </div>
    );
}

export default ProfileTools;