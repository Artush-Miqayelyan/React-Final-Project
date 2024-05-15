import styles from "./description.module.css"
import AutoComplete from "../autocomplete/AutoComplete"
import MARKS from "../../../constants/CarsData/Marks"
import YEARS from "@/app/constants/CarsData/Years"
import BODY_TYPES from "@/app/constants/CarsData/BodyTypes"
import ENGINE_TYPES from "@/app/constants/CarsData/EngineTypes"
import TRANSMISSION_TYPES from "@/app/constants/CarsData/TransmissionTypes"
import STEERINGS from "@/app/constants/CarsData/Steering"
import COLORS_TYPES from "@/app/constants/CarsData/colorsTypes"
import MileageInput from "../mileageInput/mileageInput"
import CARS_AND_MODELS from "@/app/constants/CarsData/CarsAndModels"
import CustomCleared from "../customClearedSelect/customCleared"
import CheckboxSingl from "../checkbox/checkbox"
import CONDITION_TYPES from "@/app/constants/CarsData/conditionTypes"
import ENGINE_VOLUME_TYPES from "@/app/constants/CarsData/engineVolumeType"
import DRIVE_TYPES from "@/app/constants/CarsData/DriveTypes"

function Description({ control, errors, watch }) {
    return (
        <section className={styles.description}>
            <div className={styles.secLeft}>
                <h1>Description</h1>
                <AutoComplete
                    control={control}
                    options={MARKS}
                    errors={errors}
                    name="brand"
                    message="Brand is required"
                />
                {watch().brand && <AutoComplete
                    control={control}
                    options={CARS_AND_MODELS[watch().brand]}
                    errors={errors}
                    name="model"
                    message="Model is required"
                />}
                <AutoComplete
                    control={control}
                    options={YEARS}
                    errors={errors}
                    name="year"
                    message="Year is required"
                />
                <AutoComplete
                    nameWordsTwo={true}
                    control={control}
                    options={BODY_TYPES}
                    errors={errors}
                    name="body_type"
                    message="Body type is required"
                />
                <AutoComplete
                    control={control}
                    options={CONDITION_TYPES}
                    errors={errors}
                    name="condition"
                    message="Condition is required"
                />
                <AutoComplete
                    control={control}
                    options={ENGINE_TYPES}
                    errors={errors}
                    name="engine"
                    message="Engine type is required"
                />
                <AutoComplete
                    control={control}
                    options={TRANSMISSION_TYPES}
                    errors={errors}
                    name="transmission"
                    message="Transmission type is required"
                />
                <AutoComplete
                    control={control}
                    options={STEERINGS}
                    errors={errors}
                    name="steering"
                    message="Steering type is required"
                />
                <AutoComplete
                    control={control}
                    options={COLORS_TYPES}
                    errors={errors}
                    name="color"
                    message="Color is required"
                />
                <AutoComplete
                    isRequired={false}
                    nameWordsTwo={true}
                    control={control}
                    options={ENGINE_VOLUME_TYPES}
                    errors={errors}
                    name="engineVolume"
                    message="Engine Volume is required"
                />
                <AutoComplete
                    control={control}
                    options={DRIVE_TYPES}
                    errors={errors}
                    name="drive"
                    message="Drive type is required"
                />
            </div>
            <div className={styles.secRigth}>
                {!watch().negotiable && <MileageInput
                    control={control}
                    errors={errors}
                    name="price"
                    measure="$"
                    message="Price is requred"
                />}
                <MileageInput
                    control={control}
                    errors={errors}
                    name="mileage"
                    measure="km"
                    message="Mileage is requred"
                />
                  <MileageInput
                    control={control}
                    errors={errors}
                    name="power"
                    measure="hp"
                    message="Power is requred"
                />
                <CustomCleared
                    control={control}
                    errors={errors}
                    name="customs_cleared"
                    message="Customs Cleared is required"
                />
                <CheckboxSingl
                    name="negotiable"
                    control={control}
                />
                <CheckboxSingl
                    name="exchange"
                    control={control}
                />
                <CheckboxSingl
                    name="installment"
                    control={control}
                />

            </div>

        </section>
    )
}

export default Description