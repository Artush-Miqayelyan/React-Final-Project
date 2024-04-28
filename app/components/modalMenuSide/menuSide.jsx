import styles from "./menuSide.module.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import GavelIcon from '@mui/icons-material/Gavel';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from "next/link";
import ProfileBarInMenu from '../ProfileForMenu/ProfileForMenu'
import ProfileTools from '../ProfileToolsForMenu/ProfileTools'

import { useSelector } from "react-redux";

import {
    selectIsLoggedIn
} from '../../redux/features/IsLoggedIn/IsLoggedInSlice'

function MenuSide({ closeModal }) {

    const IsLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <div className={styles.menuSide}>
            {IsLoggedIn === false ? <Link href="/login">
                <div className={styles.singin} onClick={closeModal}>
                    <AccountBoxIcon sx={{ fontSize: "64px" }} color="primary" />
                    <p>Sign In</p>
                </div>
            </Link> : <>
                <ProfileBarInMenu />
                <ProfileTools 
                    closeModal={closeModal}
                />
            </>
            }
            <div className={styles.items}>
                <Link href="/dealers">
                    <div className={styles.item} onClick={closeModal}>
                        <DirectionsCarFilledIcon fontSize="large" color="primary" />
                        <p>Dealers</p>
                    </div>
                </Link>
                <Link href="/advertisement">
                    <div className={styles.item} onClick={closeModal}>
                        <AddModeratorIcon fontSize="large" color="primary" />
                        <p>Advertisement</p>
                    </div>
                </Link>
                <Link href="/rules">
                    <div className={styles.item} onClick={closeModal}>
                        <GavelIcon fontSize="large" color="primary" />
                        <p>Terms of Use</p>
                    </div>
                </Link>
                <Link href="/help">
                    <div className={styles.item} onClick={closeModal}>
                        <HelpCenterIcon fontSize="large" color="primary" />
                        <p>Help</p>
                    </div>
                </Link>
                <Link href="/contact" onClick={closeModal}>
                    <div className={styles.item}>
                        <ContactPhoneIcon fontSize="large" color="primary" />
                        <p>Contact</p>
                    </div>
                </Link>
            </div>
            <div className={styles.socNetwork}>
                <Link href="https://www.facebook.com" target="_blank">
                    <FacebookIcon fontSize="large" color="primary" sx={{ cursor: "pointer" }} />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                    <InstagramIcon fontSize="large" color="error" sx={{ marginLeft: "4px", cursor: "pointer" }} />
                </Link>
                <Link href="https://twitter.com/" target="_blank">
                    <TwitterIcon fontSize="large" color="primary" sx={{ marginLeft: "4px", cursor: "pointer" }} />
                </Link>
                <Link href="https://web.telegram.org/" target="_blank">
                    <TelegramIcon fontSize="large" color="primary" sx={{ marginLeft: "4px", cursor: "pointer" }} />
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank">
                    <LinkedInIcon fontSize="large" color="primary" sx={{ marginLeft: "4px", cursor: "pointer" }} />
                </Link>
            </div>
            <div className={styles.copyright}>
                <p>©2024 G_A_G | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default MenuSide