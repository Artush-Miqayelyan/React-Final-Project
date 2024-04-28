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

import { excludedPath, isDefinedPath } from "@/app/helpers/helperFunctions";



function Header() {

    const [modalPosition, setModalPosition] = useState("")
    const closeModal = () => setModalPosition("")
    const openSignInModal = () => setModalPosition("middle")
    const openMenuModal = () => setModalPosition("left")
    const openMessengesInModal = () => setModalPosition("right")

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const handleMouseEnter = () => setDropdownVisible(true);
    const handleMouseLeave = () => setDropdownVisible(false);

    const pathname = usePathname()
    console.log(pathname)
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

            {isDefinedPath(pathname) ?
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
                        <div className={styles.helpSec} onClick={openMessengesInModal} >
                            <MessageIcon fontSize="large" color="primary" />
                            <p>Messages</p>
                        </div>
                        <div className={styles.accountSec} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <AccountBoxIcon fontSize="large" color="primary" />
                            <p>My Account</p>
                            {isDropdownVisible && <DropdownMenu openSignInModal={openSignInModal} />}
                        </div>
                        <div className={styles.soldSec}>
                            <Button variant="contained">Sell</Button>
                        </div>
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