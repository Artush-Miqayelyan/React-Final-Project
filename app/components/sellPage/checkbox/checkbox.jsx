import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Controller } from "react-hook-form"

function CheckboxSingl({ control, name, nameWordsTwo, isDisabled = false }) {
    const label = nameWordsTwo ? name.split("_").map(word => (word[0].toUpperCase() + word.slice(1, word.length))).join(" ") : name[0].toUpperCase() + name.slice(1, name.length)

    return <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {

            return <FormControlLabel
                disabled={isDisabled}
                sx={{ marginLeft: "10px", marginTop: "5px" }}
                value={value}
                onChange={onChange}
                control={<Checkbox />}
                label={label}
            />
        }
        }
    />
}

export default CheckboxSingl