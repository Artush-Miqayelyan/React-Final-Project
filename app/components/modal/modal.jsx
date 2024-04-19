"use client"

import { createPortal } from "react-dom"
import styles from "./modal.module.css"
import { useClickOutside } from "../hooks/hooks"

function Modal({ children, showModal, showModalCallbek,isLeftSide }) {
    const [modalRef] = useClickOutside(closeModal)

    function closeModal() {
        showModalCallbek(!showModal)
    }

    return showModal ? createPortal(
        <div className={isLeftSide ? styles.modal_backdrop_left: styles.modal_backdrop_right}>
            <div ref={modalRef} className={styles.modal}>
                {children}
            </div>
        </div>, document.getElementById("main")) : null
}

export default Modal