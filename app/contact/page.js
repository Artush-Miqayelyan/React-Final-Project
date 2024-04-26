import React from 'react';
import Contact from '../components/contactPage/contactPageComponent';
import styles from './contact.module.css'

function ContactPage() {
    return <div className={styles.ContactPage}>
        <Contact />
    </div>
}

export default ContactPage;