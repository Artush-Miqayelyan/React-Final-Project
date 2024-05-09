'use client'

import styles from "./footer.module.css"
import React , {Fragment} from "react"
import Image from "next/image"
import FooterLogo from "../../../public/footerLogo.png"
import Link from "next/link"

import { isDefinedPathForfooter } from "@/app/helpers/helperFunctions"
import { usePathname } from "next/navigation"


function Footer() {

  const pathname = usePathname()

  return <>
    {isDefinedPathForfooter(pathname) || pathname.includes('/cars/')?
      <div className={styles.footerContainer} >
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
      </div > : null
    }
  </>
}

export default Footer;