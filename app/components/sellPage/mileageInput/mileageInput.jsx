import { FormHelperText, InputAdornment, OutlinedInput } from "@mui/material"
import { Controller } from "react-hook-form"

function MileageInput({ control, errors, message, name, measure }) {
    const label = name[0].toUpperCase() + name.slice(1, name.length)

    return  <Controller
                name={name}
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: message
                    },
                }}
                render={({ field: { value, onChange } }) => {

                    return <>
                    <OutlinedInput
                        sx={{ width: "300px",marginLeft: "20px",marginTop: "20px"}}
                        endAdornment={<InputAdornment position="end"> {measure}</InputAdornment>}
                        value={value || ""}
                        placeholder={label}
                        onChange={onChange}
                        type="number"
                        variant="standard"
                        error={!!errors[name]}
                    /> 
                      <FormHelperText  sx={{marginLeft: "40px"}} error={true}>{errors[name]?.message}</FormHelperText>
                    </>
                }
                }
            />
}

export default MileageInput