import AddImages from "../addImages/addImages"
import styles from "./imageSection.module.css"

function ImageSection({ control, images, setImages }) {

    return (
        <section className={styles.imageSection}>
            <h1>Images</h1>
            <AddImages
                name="imgUrl"
                control={control}
                images={images}
                setImages={setImages}
            />
        </section>
    )
}

export default ImageSection