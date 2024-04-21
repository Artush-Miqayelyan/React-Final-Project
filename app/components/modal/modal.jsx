"use client"

import { Drawer } from "@mui/material";
// import { createPortal } from "react-dom"
// import styles from "./modal.module.css"
// import { useClickOutside } from "../hooks/hooks"
import { useState } from "react";



function Modal({anchor, open ,children }) {
    const [state, setState] = useState({
        top: false,
        left: false,
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      return (
        <div >
          {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <Drawer
                key={anchor}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
              </Drawer>
          ))}                {children}

        </div>
      );

    // const [modalRef] = useClickOutside(closeModal)

    // function closeModal() {
    //     showModalCallbek(!showModal)
    // }

    // return showModal ? createPortal(
    //     <div className={isLeftSide ? styles.modal_backdrop_left: styles.modal_backdrop_right}>
    //         <div ref={modalRef} className={styles.modal}>
    //             {children}
    //         </div>
    //     </div>, document.getElementById("main")) : null
}

export default Modal


// export default function AnchorTemporaryDrawer() {
//     const [state, setState] = React.useState({
//       top: false,
//       left: false,
//       bottom: false,
//       right: false,
//     });
//     const toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//           return;
//         }
    
//         setState({ ...state, [anchor]: open });
//       };

//      return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }