'use client'

import React, { useState, useEffect } from 'react';
import styles from './messagesComponent.module.css'

import {
    TextField,
    Button,
    IconButton,
    ToggleButtonGroup,
    ToggleButton
} from '@mui/material';

import Avatar from '@mui/material/Avatar';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';

import { useSelector } from 'react-redux';

import {
    selectCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'
import { current } from '@reduxjs/toolkit';
import Messages from '@/app/messages/page';

function MessagesComponent() {

    const currentUser = useSelector(selectCurrentUser)

    const [alignment, setAlignment] = useState('');
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState('')
    const [currentChatUser, setCurrentChatUser] = useState('')

    const [sendMessageInputValue, setSendMessageInputValue] = useState('')

    function handleSendMessageInputValue(e) {
        setSendMessageInputValue(e.target.value)
    }

    function handleOnSendBtnClick(newDataForCurrentUser, newDataForChatUser) {
        fetch(`http://localhost:4000/users/${currentChatUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDataForChatUser)
        })

        fetch(`http://localhost:4000/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDataForCurrentUser)
        })
    }

    useEffect(() => {
        const currentChat = chats.find((currentChat) => currentChat.ChatName === alignment)
        setCurrentChat(currentChat)
        console.log("Current Chat :::: ", currentChat)
        if (currentChat) {
            fetch(`http://localhost:4000/users?username=${currentChat.ChatName}`)
                .then((res) => res.json())
                .then((res) => setCurrentChatUser(res[0]))
        }
    }, [alignment])

    const handleAlignmentChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    useEffect(() => {
        fetch(`http://localhost:4000/users/${currentUser.id}`)
            .then(res => res.json())
            .then(res => setChats(res.Chats))
    }, [])

    return (
        <div className={styles.MessagesComponent}>
            <div className={styles.Chats}>
                <ToggleButtonGroup
                    value={alignment}
                    onChange={handleAlignmentChange}
                    orientation="vertical"
                    color="primary"
                    exclusive
                    aria-label="Platform"
                    className={styles.ToggleChatsSection}>
                    {chats.map((currentChat) => {
                        return <ToggleButton value={currentChat.ChatName} className={styles.SelectChat}>{currentChat.ChatName}</ToggleButton>
                    })}
                </ToggleButtonGroup>
            </div>
            <div className={styles.CurrentChat}>
                {currentChat ? <>
                    <div className={styles.ChatHeader}>
                        <div className={styles.userInfo}>
                            <Avatar alt="Remy Sharp" src={currentChatUser.AvatarUrl} />
                            <div>{currentChatUser.username}</div>
                        </div>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </div>
                    <div className={styles.ChatContent}>
                        <div className={styles.MessagesContainer}>
                            {currentChat.Messages.map((currentMessage) => {
                                if (currentMessage.SendByMe) {
                                    return <div className={styles.MessageSendByMe}>
                                        <div className={styles.messagetext}>
                                            {currentMessage.MessageText}
                                        </div>
                                        <Avatar alt='Remy Sharp' src={currentUser.AvatarUrl} />
                                    </div>
                                } else {
                                    return <div className={styles.MessageSendByHim}>
                                        <Avatar alt='Remy Sharp' src={currentChatUser.AvatarUrl} />
                                        <div className={styles.messagetext}>
                                            {currentMessage.MessageText}
                                        </div>
                                    </div>
                                }
                            })}
                        </div>
                        <div className={styles.SendMessageContainer}>
                            <TextField
                                value={sendMessageInputValue}
                                onChange={handleSendMessageInputValue}
                                multiline
                                maxRows={3}
                                placeholder='Message'
                                variant="standard"
                                sx={{ width: 350 }}
                            />
                            <Button variant="contained" endIcon={<SendIcon />} sx={{ transform: "scale(0.85)", width: 160 }} onClick={() => {
                                // newDataForCurrentUser , newDataForChatUser ------------------------------------------------

                                handleOnSendBtnClick(newDataForCurrentUser, newDataForChatUser)
                                setSendMessageInputValue('')
                            }}>
                                Send
                            </Button>
                        </div>
                    </div>
                </> : <h1>Select Chat</h1>}
            </div>
        </div>
    );
}

export default MessagesComponent;