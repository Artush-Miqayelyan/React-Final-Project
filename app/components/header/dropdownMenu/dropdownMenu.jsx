import { memo } from "react";
import styles from "./dropdownMenu.module.css"

const DropdownMenu = ({openSignInModal}) => {
    
    return (
        <div className={styles.dropdownMenu}>
            <div className={styles.menuItem} onClick={openSignInModal}>Sign In</div>
            <div className={styles.menuItem}>Sign Up </div>
        </div>
    );
};

export default memo(DropdownMenu);