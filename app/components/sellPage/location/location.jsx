import PROVINCE_TYPES from "@/app/constants/CarsData/provinceByCountryTypes"
import COUNTRIES from "../../../constants/CarsData/Countries"
import AutoComplete from "../autocomplete/AutoComplete"
import styles from "./location.module.css"
import TextFieldSingl from "../textFieldSingl/textFieldSingl"
import CheckboxSingl from "../checkbox/checkbox"

function LocationSection({ control, errors, watch }) {
    return (
        <section className={styles.location}>
            <div className={styles.secLeft}>
                <h1>Location</h1>
                <AutoComplete
                    control={control}
                    options={COUNTRIES}
                    errors={errors}
                    name="country"
                    message="Country is required"
                />
                <TextFieldSingl
                    control={control}
                    name="city"
                />
            </div>
            <div className={styles.secRigth}>
                <AutoComplete
                    isRequired={false}
                    control={control}
                    options={watch().country ? PROVINCE_TYPES[watch().country] : []}
                    errors={errors}
                    name="province"
                    message="Province is required"
                />
                <CheckboxSingl
                    control={control}
                    name="on_road"
                    nameWordsTwo={true}
                    isDisabled={watch().on_auction || watch().country === "Armenia" ? true : false}
                />
                <CheckboxSingl
                    control={control}
                    name="on_auction"
                    nameWordsTwo={true}
                    isDisabled={watch().on_road || watch().country === "Armenia" ? true : false}
                />


            </div>
        </section>
    )
}

export default LocationSection