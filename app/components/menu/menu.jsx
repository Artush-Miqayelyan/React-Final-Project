import styles from "./menu.module.css"
import Audi from "../../../public/carsLogo/Audi.jpg"
import BMW from "../../../public/carsLogo/BMW.png"
import Chevrolet from "../../../public/carsLogo/Chevrolet.jpg"
import Ford from "../../../public/carsLogo/Ford.jpg"
import Tesla from "../../../public/carsLogo/Tesla.jpg"
import Hyundai from "../../../public/carsLogo/Hyundai.png"
import MercedesBenz from "../../../public/carsLogo/MercedesBenz.png"
import Nissan from "../../../public/carsLogo/Nissan.png"
import Toyota from "../../../public/carsLogo/Toyota.png"
import Volkswagen from "../../../public/carsLogo/Volkswagen.png"
import Image from "next/image"
import Tooltip from '@mui/material/Tooltip';


function Menu() {

    const carsLogo = [
        { name: "Mercedes Benz", src: MercedesBenz },
        { name: "BMW", src: BMW },
        { name: "Chevrolet", src: Chevrolet },
        { name: "Tesla", src: Tesla },
        { name: "Audi", src: Audi },
        { name: "Ford", src: Ford },
        { name: "Hyundai", src: Hyundai },
        { name: "Nissan", src: Nissan },
        { name: "Toyota", src: Toyota },
        { name: "Volkswagen", src: Volkswagen },
    ]


    return (
        <div className={styles.menu}>
            {
                carsLogo.map((logo, index) => {
                    return <div key={index} className={styles.carLogo}>
                        <Tooltip
                            title={logo.name}
                            arrow
                            TransitionProps={{ timeout: 700 }}
                        >
                            <Image
                                src={logo.src}
                                alt="carLogo"
                                fill
                                style={{ objectFit: "cover", mixBlendMode: "multiply", cursor: "pointer" }}
                            // layout="responsive"
                            />
                        </Tooltip>
                    </div>
                })
            }
        </div>
    )
}

export default Menu