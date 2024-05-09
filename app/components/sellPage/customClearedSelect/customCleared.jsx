
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material"
import { Controller } from "react-hook-form"

function CustomCleared({ control, errors, message, name }) {

  const label = name.split("_").map(word => (word[0].toUpperCase() + word.slice(1, word.length))).join(" ")

  return <FormControl sx={{ width: "300px", marginLeft: "20px", marginTop: "20px" }}>
    <InputLabel id="select-label">{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: message
        }
      }}
      render={({ field: { value, onChange } }) => {
        return <Select
          labelId="select-label"
          value={value || ""}
          label={label}
          onChange={onChange}
          error={!!errors[name]}
        >
          <MenuItem value={"true"} divider >Yes</MenuItem>
          <MenuItem value={"false"}>No</MenuItem>
        </Select>
      }}
    />
    <FormHelperText error={true}>{errors[name]?.message}</FormHelperText>
  </FormControl>
}


export default CustomCleared