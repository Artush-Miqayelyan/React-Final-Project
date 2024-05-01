import React from 'react';
import styles from './sign-up.module.css'
import SignUp from '../components/signUpComponent/SignUp'

function SignUpPage() {
    return (
        <div className={styles.SignUp}>
            <SignUp />
        </div>
    );
}

export default SignUpPage;