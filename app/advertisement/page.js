import React from 'react';
import styles from './advertisement.module.css'
import Advertisement from '../components/advertisementPage/advertisement'

function AdvertisementPage() {
    return (
        <div className={styles.AdvertisementPage}>
            <Advertisement />
        </div>
    );
}

export default AdvertisementPage;