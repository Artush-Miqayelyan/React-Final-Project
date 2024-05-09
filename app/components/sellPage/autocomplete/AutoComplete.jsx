"use client"
import { Autocomplete, TextField } from "@mui/material"
import { Controller } from "react-hook-form"

function AutoComplete({ control, options, errors, message, name, nameWordsTwo, isRequired = true }) {

    const label = nameWordsTwo ? name.split("_").map(word => (word[0].toUpperCase() + word.slice(1, word.length))).join(" ") : name[0].toUpperCase() + name.slice(1, name.length)

    return <Controller
        name={name}
        control={control}
        rules={{
            required: {
                value: isRequired,
                message: message
            }
        }}
        render={({ field: { value, onChange } }) => {
            return <Autocomplete
                sx={{ width: "430px", marginLeft: "20px", marginTop: "20px" }}
                value={value || ""}
                onChange={(event, values) => onChange(values || null)}
                freeSolo
                options={options.map((option) => option)}
                renderInput={(params) => <TextField  {...params} label={label} error={!!errors[name]} helperText={errors[name]?.message} />}
            />
        }
        }
    />
}

export default AutoComplete