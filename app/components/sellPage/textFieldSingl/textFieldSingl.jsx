import { Controller } from "react-hook-form"
import TextField from '@mui/material/TextField';

function TextFieldSingl({ control, name }) {
    return <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {

            return <TextField
                sx={{ width: "430px", marginLeft: "20px", marginTop: "20px" }}
                value={value || ""}
                onChange={onChange}
                label="Region, City, Settlement"
                variant="outlined"
            />
        }
        }
    />
}

export default TextFieldSingl