import styles from "./footer.module.css"
import Image from "next/image"
import Logo from "../../../public/logo.png"
import Link from "next/link"
function Footer() {
  return (

    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.logo}>
          <Link href='/'><Image
            priority
            objectFit="cover"
            fill
            src={Logo}
            color="black"
            alt="Logo"
          /></Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.info}>
          <Link className={styles.link} href="/about" > <div className={styles.text}> About project</div>  </Link>
        </div>
        <div className={styles.info}>
          <Link className={styles.link} href="/rules" > Rules of use </Link>
        </div>
        <div className={styles.info}>
          <Link className={styles.link} href="/advertisement" > Advertisement </Link>
        </div>

        <div className={styles.info}>
          <Link className={styles.link} href="/contact" > Contact </Link>
        </div>
      </div>

    </div>
  )
}

export default Footer;