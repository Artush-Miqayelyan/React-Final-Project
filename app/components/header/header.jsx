"use client"
import styles from "./header.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import TextField from '@mui/material/TextField';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../modal/modal";
import DropdownMenu from "./dropdownMenu/dropdownMenu";
import MenuSide from "../modalMenuSide/menuSide";
import MessengesSide from "../modalMessengesSide/messengesSide";
import SignIn from "@/app/login/page";
import { usePathname } from "next/navigation";
import Avatar from '@mui/material/Avatar';

import { useSelector } from "react-redux";
import {
    selectIsLoggedIn
} from '../../redux/features/IsLoggedIn/IsLoggedInSlice'

import { excludedPath, isDefinedPathForHeader } from "@/app/helpers/helperFunctions";



function Header() {

    const [modalPosition, setModalPosition] = useState("")
    const closeModal = () => setModalPosition("")
    const openSignInModal = () => setModalPosition("middle")
    const openMenuModal = () => setModalPosition("left")
    const openMessengesInModal = () => setModalPosition("right")

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const handleMouseEnter = () => setDropdownVisible(true);
    const handleMouseLeave = () => setDropdownVisible(false);

    const IsLoggedIn = useSelector(selectIsLoggedIn)

    const pathname = usePathname()

    useEffect(() => {
        if (modalPosition) {
            document.body.classList.add("overflovHidden")
        }
        return () => document.body.classList.remove("overflovHidden")
    }, [modalPosition])

    return (
        <>
            {modalPosition &&
                <Modal position={modalPosition} closeModal={closeModal}>
                    {modalPosition === "left" ? <MenuSide closeModal={closeModal} /> : modalPosition === "right" ? <MessengesSide closeModal={closeModal} /> : <SignIn />}
                </Modal>}

            {isDefinedPathForHeader(pathname) ?
                <header className={styles.header}>
                    <div className={styles.menuSec} onClick={openMenuModal}>
                        <MenuIcon fontSize="large" />
                    </div>
                    <div className={styles.logoSec}>
                        <Link href="/">
                            <Image
                                priority
                                src={Logo}
                                fill
                                alt="Logo"
                                objectFit="cover"
                            />
                        </Link>
                    </div>
                    <div className={styles.inputSec}>
                        <TextField fullWidth size="small" id="outlined-basic" label="mark , model , year" variant="outlined" />
                    </div>
                    <div className={styles.login_help_diller_Sec}>
                        <div className={styles.dillerSec}>
                            <DirectionsCarFilledIcon fontSize="large" color="primary" />
                            <p>Dillers</p>
                        </div>
                        <Link onClick={IsLoggedIn === false ? openMessengesInModal : null} href={IsLoggedIn === false ? '/' : '/account/messages'} className={styles.helpSec}>
                            <MessageIcon fontSize="large" color="primary" />
                            <p>Messages</p>
                        </Link>
                        {IsLoggedIn ? <div onClick={openMenuModal} className={styles.LoggedInAccountSec} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Avatar sx={{ backgroundColor: '#1976D2' }} alt="Remy Sharp" src="" />
                            {/* <AccountBoxIcon fontSize="large" color="primary" /> */}
                            <p>My Account</p>
                            {/* {isDropdownVisible && <DropdownMenu openSignInModal={openSignInModal} />} dropdown bacelu poxaren tox link lini depi menu */}
                        </div>
                            :
                            <div className={styles.NotLoggedInAccountSec}>
                                <div className={styles.SignInBtn}>
                                    <Button variant="text" onClick={openSignInModal}>Sign In</Button>
                                </div>
                                <Link href='/sign-up'>
                                    <Button className={styles.SignUpBtn} variant="outlined">Sign Up</Button>
                                </Link>
                            </div>}
                        <Link href={IsLoggedIn === true ? '/sell' : '/'} className={styles.soldSec}>
                            <Button variant="contained">Sell</Button>
                        </Link>
                    </div>
                </header> : excludedPath(pathname) ?
                    <header className={styles.onlyIconHeader}>
                        <div className={styles.logoSec}>
                            <Link href="/">
                                <Image
                                    priority
                                    src={Logo}
                                    fill
                                    alt="Logo"
                                    objectFit="cover"
                                />
                            </Link>
                        </div>
                    </header> : null
            }
        </>
    )
}

export default Header