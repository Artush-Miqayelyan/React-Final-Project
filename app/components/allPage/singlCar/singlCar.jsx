"use client"
import Image from "next/image"
import styes from "./singlCar.module.css"
import Link from "next/link"
import { useState } from "react"

function SingleCar({ car }) {

    const { id, brand, img, year, model, mileage, body_type, color, transmission, steering, engine, price, country, customs_cleared, on_auction, on_road, priority } = car
    const [imgSrc, setImgSrc] = useState(img[0]["imgUrl"])
    const handleOnMouseEnter = ()=> setImgSrc(img[1]["imgUrl"])
    const handleOnMouseLeave = ()=> setImgSrc(img[0]["imgUrl"])

    return (
        <div className={`${styes.singlCar} ${priority === "urgent sale" ? styes.singlCarBorderRed : styes.singlCarBorderGrey}`}>
            <Link href={`/cars/${id}`}>
                <div className={styes.imgContainer} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    <Image
                        style={{ borderRadius: "7px" }}
                        priority
                        src={imgSrc}
                        alt="car"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        objectFit="cover"
                    />
                </div>
                <div className={styes.mainInfo}>
                    <div className={styes.year_mark}>
                        <span className={styes.year}>{year}</span>
                        <span className={styes.brand_model}>{brand} {model}</span>
                    </div>
                    <span className={styes.body_type}>{body_type.toLowerCase()}</span>
                    <span className={styes.mileage}>{mileage + " km"} </span>
                    <span className={styes.engine}>{engine + "/"}{transmission + "/"}{steering + "/"}{color.toLowerCase()}</span>
                    <div className={styes.country}>
                        {country + ", "} {on_auction ? "On the auction, " : on_road ? "On the road, " : null}
                        {!customs_cleared ? <span className={styes.green}>Custom cleared </span> : <span className={styes.red}>Custom not cleared</span>}
                    </div>
                </div>
                <div className={styes.price}>
                    <span>{price + " $"}</span>
                </div>
            </Link>
        </div>
    )
}

export default SingleCar