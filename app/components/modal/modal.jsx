"use client"
import { createPortal } from "react-dom"
import styles from "./modal.module.css"
import { useClickOutside } from "../hooks/hooks"

function Modal({ children, position, closeModal }) {

    const [modalRef] = useClickOutside(closeModal)

    return position ? createPortal(
        <div className={position === "left" ? styles.modal_backdrop_left : position === "right" ? styles.modal_backdrop_right : styles.modal_backdrop_middle}>
            <div ref={modalRef} className={position === "middle" ? styles.modalMiddle : styles.modal}>
                {children}
            </div>
        </div>, document.getElementById("body")) : null
}

export default Modal
