import styles from "./menu.module.css"
import Audi from "../../../public/carsLogo/Audi.jpg"
import BMW from "../../../public/carsLogo/BMW.png"
import Chevrolet from "../../../public/carsLogo/Chevrolet.jpg"
import Ford from "../../../public/carsLogo/Ford.jpg"
import Honda from "../../../public/carsLogo/Honda.jpg"
import Hyundai from "../../../public/carsLogo/Hyundai.png"
import MercedesBenz from "../../../public/carsLogo/MercedesBenz.png"
import Nissan from "../../../public/carsLogo/Nissan.png"
import Toyota from "../../../public/carsLogo/Toyota.png"
import Volkswagen from "../../../public/carsLogo/Volkswagen.png"
import Image from "next/image"

function Menu() {

    const carsLogo = [MercedesBenz, BMW, Chevrolet, Honda, Audi, Ford, Hyundai, Nissan, Toyota, Volkswagen]

    return (
        <div className={styles.menu}>
            {
                carsLogo.map((logo, index) => {
                    return <div key={index} className={styles.carLogo}>
                        <Image
                            src={logo}
                            alt="carLogo"
                            fill
                            style={{ objectFit: "cover", mixBlendMode: "multiply",cursor:"pointer"}}
                        // layout="responsive"
                        />
                    </div>
                })
            }
        </div>
    )
}

export default Menu