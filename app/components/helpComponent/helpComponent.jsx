import React from 'react';
import styles from './helpComponent.module.css'

function HelpComponent() {
    return <div className={styles.help}>
        <h1>Contact Us For Help</h1>
        <div className={styles.HelpComponent}>
            <div className={styles.phoneNumbers}>
                <div><b>Project Director : </b>Artush Miqayelyan (099-99-99-99) </div>
                <div><b>Project Managers : </b>Gevorg Sargsyan (077-77-77-77) , Gohar Papoyan (077-88-88-88) </div>
            </div>
            <div className={styles.OurEmail}>
                <b>Email: </b>AutoShop@mail.ru
            </div>
            <h3>
                We are working 24/7 🤗
            </h3>
        </div>
    </div>
}

export default HelpComponent;