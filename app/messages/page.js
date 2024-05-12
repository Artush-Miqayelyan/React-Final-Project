import React from 'react';
import styles from './messages.module.css'
import MessagesComponent from '../components/MessagesComponent/messagesComponent'


function Messages() {
    return (
        <div className={styles.Messages}>
            <MessagesComponent />
        </div>
    );
}

export default Messages;