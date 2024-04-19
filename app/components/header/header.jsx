"use client"
import styles from "./header.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'
import Logo from '../../../public/autoshopLogo.jpg'
import TextField from '@mui/material/TextField';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import Link from "next/link";
import Modal from "../modal/modal";
import { useState } from "react";

function Header() {

    const [showMenuModal, setShowMenuModal] = useState(false)
    const showMenu = () => setShowMenuModal(!showMenuModal)
    const [showMessagesModal, setShowMessagesModal] = useState(false)
    const showMessages = () => setShowMessagesModal(!showMessagesModal)


    return (
        <header className={styles.header}>
            {showMenuModal && <Modal isLeftSide={true} showModal={showMenuModal} showModalCallbek={showMenu} />}
            {showMessagesModal && <Modal isLeftSide={false} showModal={showMessagesModal} showModalCallbek={showMessages} />}


            <div className={styles.menuSec} onClick={showMenu}>
                <MenuIcon fontSize="large" />
            </div>
            <div className={styles.logoSec}>
                <Link href="/">
                    <Image
                        priority
                        src={Logo}
                        width={159}
                        height={66}
                        alt="autoshopLogo"
                    />
                </Link>

            </div>
            <div className={styles.inputSec}>
                <TextField fullWidth size="small" id="outlined-basic" label="մակնիշ, մոդել, տարեթիվ" variant="outlined" />
            </div>
            <div className={styles.login_help_diller_Sec}>
                <div className={styles.dillerSec}>
                    <DirectionsCarFilledIcon fontSize="large" />
                    <p>Դիլերներ</p>
                </div>
                <div className={styles.helpSec} onClick={showMessages}>
                    <MessageIcon fontSize="large" />
                </div>
                <div className={styles.accountSec}>
                    <AccountBoxIcon fontSize="large" />
                    <p>Իմ Էջը</p>
                </div>
                <div className={styles.soldSec}>
                    <Button variant="contained">Վաճառել</Button>
                </div>
            </div>
        </header>
    )
}

export default Header