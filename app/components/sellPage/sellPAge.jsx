"use client"
import styles from "./sellPage.module.css"
import { useForm } from "react-hook-form"
import { Button, debounce } from "@mui/material"
import Description from "./description/description"
import LocationSection from "./location/location"
import AdditionalDataSection from "./additionalData/additionalData"
import ImageSection from "./imageSection/imageSection"
import { useState } from "react"
import PublishSection from "./publishSection/publishSection"


function SellPage() {
    const [images, setImages] = useState([])

    const { handleSubmit, reset, watch, control, formState: { errors } } = useForm({
        defaultValues: {
            mark: "",
            model: "",
            body_type: "",
            city: "",
            color: "",
            condition: "",
            country: "",
            customs_cleared: false,
            description: "",
            drive: "",
            engine: "",
            engine_volume: "",
            exchange: false,
            img: [],
            installment: false,
            mileage: "",
            negotiable: false,
            on_auction: false,
            on_road: false,
            price: "",
            priority: "",
            province: "",
            steering: "",
            transmission: "",
            year: "",
        }
    })
    const onSubmit = (data) => {
        const fullData = {
            ...data,
            img: images,
        }
        fetch("http://localhost:4000/cars",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fullData),
        }).then(res => console.log(res))

        reset()
    }

    return (
        <div className={styles.sellPage}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Description
                    watch={watch}
                    control={control}
                    errors={errors}
                />
                <LocationSection
                    watch={watch}
                    control={control}
                    errors={errors}
                />
                <AdditionalDataSection
                    watch={watch}
                    control={control}
                    errors={errors}
                />
                <ImageSection
                    control={control}
                    images={images}
                    setImages={setImages}
                />
                <PublishSection
                    control={control}
                />

                <Button type="submit" variant="contained" className={styles.btn}>Place Ad</Button>
            </form>
        </div>
    )
}

export default SellPage