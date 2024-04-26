import React from 'react';
import styles from './advertisement.module.css'

function Advertisement() {
    return <div className={styles.info}>
        <h1>Advertisement on the site</h1><br />

        <p>AutoShop.am (National Auto Portal of Armenia) is one of the most successful Internet projects <br />
        in the Armenian sector of the Internet, launched in 2024.</p><br />

        <p>Thanks to the rapidly growing audience of visitors and modern technological solutions, AutoShop.am is <br />
        the constant focus of attention of car enthusiasts and advertisers.</p><br />

        <p>Ads on AutoShop.am are provided on a 50% rotation basis, that is, one zone can be shared by two advertisers.</p><br />

        <p>You can <a className={styles.a} href="http://localhost:3000/contact">contact us</a> with questions related to advertising.</p>
    </div>
}

export default Advertisement;