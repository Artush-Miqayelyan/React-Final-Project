import React from 'react';
import styles from './dealers.module.css'

import DelaersComponent from '../components/DealersComponent/DealersComponent'

function Dealers() {

    

    return (
        <div className={styles.Dealers}>
            <DelaersComponent/>
        </div>
    );
}

export default Dealers;