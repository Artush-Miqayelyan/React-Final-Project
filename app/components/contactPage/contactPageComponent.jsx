'use client'

import React , {useState} from 'react';
import styles from './contactPageComponent.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {

    const [EmailInputValue, setEmailInputValue] = useState('')
    const [MessageInputValue, setMessageInputValue] = useState('')

    function handleEmailInputValue(e , v){
        setEmailInputValue(v)
    }

    function hanldleMessageInputValue(e , v){
        setMessageInputValue(v)
    }

    function handleSendBtnClick(){
        //our logic to send message
    }

    return (
        <div className={styles.ContactPage}>
            <div className={styles.infoAboutContact}>
                <h1>Contact</h1>
                <div className={styles.info}>
                    <p>In case of questions and suggestions, you can contact us <br />
                        using the provided letter form.</p><br />
                    <p>You can find answers to frequently asked questions in the <br />
                        <a className={styles.a} href="http://localhost:3000/help">Help</a> section.</p><br />
                    <p>You can also contact us on social networks through <br />
                        AutoShop.am pages.</p><br />
                </div>
                <div className={styles.contact}>
                    <p><b>Email: </b> support.autoshop@mail.ru</p><br />
                    <p><b>Facebook: </b> https://www.facebook.com </p>
                </div>
            </div>
            <div className={styles.inputsForUser}>
                <TextField
                    value={EmailInputValue}
                    onChange={handleEmailInputValue}
                    id="outlined-textarea"
                    label="Your Email"
                    placeholder="email@example.com"
                    multiline
                    sx={{ width: 400 }}
                />
                <TextField
                    value={MessageInputValue}
                    onChange={hanldleMessageInputValue}
                    id="outlined-textarea"
                    label="Your Message"
                    placeholder=""
                    multiline
                    sx={{ width: 400 }}
                />
                <Button variant="contained" onClick={handleSendBtnClick} sx={{ width: 200 }}>Send</Button>
            </div>
        </div>
    );
}

export default Contact;