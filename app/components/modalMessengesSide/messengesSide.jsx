import styles from "./messengesSide.module.css"
import Messenges from "../../../public/messenges.png"
import Image from "next/image"
import { Button } from "@mui/material"
import Link from "next/link"

function MessengesSide({ closeModal }) {

    return (
        <div className={styles.messengesSide}>
            <div className={styles.img}>
                <Image
                    src={Messenges}
                    width={200}
                    height={200}
                />
            </div>
            <div className={styles.text}>
                <span>
                    Dear user, to send or receive messages you first need to sign in to your account
                </span>
            </div>
            <div className={styles.btn} onClick={closeModal}>
                <Link href="/login">
                    <Button variant="contained" fullWidth >
                        Sign In
                    </Button>
                </Link>

            </div>

        </div>
    )
}

export default MessengesSide