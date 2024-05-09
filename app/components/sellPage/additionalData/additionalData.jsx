import TextAreaSingl from "../textAreaSingl/textAreaSingl"
import styles from "./additionalData.module.css"

function AdditionalDataSection({ control, errors, watch }) {
    return <section className={styles.additionalDataSection}>
        <h1>Additional Data</h1>
        <div className={styles.secMain}>
            <TextAreaSingl
                control={control}
                name="description"
            />
        </div>
    </section>
}

export default AdditionalDataSection