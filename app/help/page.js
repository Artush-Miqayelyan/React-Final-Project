import React from 'react';
import HelpComponent from '../components/helpComponent/helpComponent'
import styles from './help.module.css'

function Help() {
    return (
        <div className={styles.Help}>
            <HelpComponent />
        </div>
    );
}

export default Help;