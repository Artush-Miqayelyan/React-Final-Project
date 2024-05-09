import { Textarea } from "@mui/joy"
import { Controller } from "react-hook-form"

function TextAreaSingl({ control, name }) {

    return <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {

            return <Textarea
                value={value}
                onChange={onChange}
                sx={{ width: "400px", marginLeft: "20px", marginTop: "20px" }}
                color="neutral"
                placeholder="It is prohibited to put in this field: Phone numbers, website and email links. Advertising texts 200 characters maximum"
                minRows={5}
                variant="outlined"
            />
        }
        }
    />
}

export default TextAreaSingl