import styles from "./footer.module.css"
import Image from "next/image"
import FooterLogo from "../../../public/footerLogo.png"
import Link from "next/link"

import { isDefinedPath } from "@/app/helpers/helperFunctions"

function Footer() {
  return (

    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.logo}>
          <Link href='/'><Image
            priority
            objectFit="cover"
            fill
            src={FooterLogo}
            color="black"
            alt="Logo"
          /></Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Link href="/about" > About project </Link>
        <Link href="/rules" > Rules of use </Link>
        <Link href="/advertisement" > Advertisement </Link>
        <Link href="/contact" > Contact </Link>
        <Link href="/help" > Help </Link>
      </div>
    </div>
  )
}

export default Footer;