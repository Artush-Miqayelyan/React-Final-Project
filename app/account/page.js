import React from 'react';
import styles from './account.module.css'
import AccountComponent from '../components/accountComponent/accountComponent'

function Account() {

    return (
        <div className={styles.ProfilePage}>
            <AccountComponent/>
        </div>
    );
}

export default Account;