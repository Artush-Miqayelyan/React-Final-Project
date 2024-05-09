import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import styles from "./publishSection.module.css"
import { Controller } from "react-hook-form"

function PublishSection({ control }) {
    return (
        <section className={styles.publish}>
            <h1>Publish</h1>
            <div className={styles.container}>
                <Controller
                    name="priority"
                    control={control}
                    render={({ field: { value, onChange } }) => {
                        console.log(value, "dw")

                        return <div className={styles.radioContainer}>
                            <RadioGroup
                                sx={{ width: "20%" }}
                                value={value || ""}
                                onChange={onChange}
                            >
                                <FormControlLabel className={value === "free" ? styles.checkedLabel : styles.label} value="free" control={<Radio className={value === "free" ? styles.checkedRadio : styles.radio} />} label="Free Ad" />
                                <FormControlLabel className={value === "ontop" ? styles.checkedLabel : styles.label} value="ontop" control={<Radio className={value === "ontop" ? styles.checkedRadio : styles.radio} />} label="Top Ad" />
                                <FormControlLabel className={value === "urgent sale" ? styles.checkedLabel : styles.label} value="urgent sale" control={<Radio className={value === "urgent sale" ? styles.checkedRadio : styles.radio} />} label="Urgent Sale" />
                                <FormControlLabel className={value === "emphatic" ? styles.checkedLabel : styles.label} value="emphatic" control={<Radio className={value === "emphatic" ? styles.checkedRadio : styles.radio} />} label="Marked Ad" />
                                <FormControlLabel className={value === "search top" ? styles.checkedLabel : styles.label} value="search top" control={<Radio className={value === "search top" ? styles.checkedRadio : styles.radio} />} label="Search Top Ad" />
                            </RadioGroup>
                            <div className={styles.prices}>
                                <div className={value === "free" ? styles.checkedPrice : styles.price} >
                                    0$
                                </div>
                                <div className={value === "ontop" ? styles.checkedPrice : styles.price} >
                                    100$
                                </div>
                                <div className={value === "urgent sale" ? styles.checkedPrice : styles.price} >
                                    80$
                                </div>
                                <div className={value === "emphatic" ? styles.checkedPrice : styles.price} >
                                    50$
                                </div>
                                <div className={value === "search top" ? styles.checkedPrice : styles.price} >
                                    50$
                                </div>
                            </div>
                        </div>
                    }
                    }
                />

            </div>
        </section>
    )
}

export default PublishSection