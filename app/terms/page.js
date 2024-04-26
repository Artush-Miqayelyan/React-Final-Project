import React from 'react';
import styles from './terms.module.css'
import TermsComponent from '../components/terms/termsPageComponent';

function Terms() {
    return (
        <div className={styles.TermsPage}>
            <TermsComponent />
        </div>
    );
}

export default Terms;