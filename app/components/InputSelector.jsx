"use client";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function InputSelector({
  label = "Input Selection",
  helperText = "Please select one of the options",
  options = [
    {
      value: "value-1",
      label: "value-1",
    },
    {
      value: "value-2",
      label: "value-2",
    },
    {
      value: "value-3",
      label: "value-3",
    },
  ],
  defaultValue=null,
  onChange,
}) {
  return (
    <>
      <TextField
        id={"outlined-select-currency"}
        select
        label={label}
        defaultValue={defaultValue}
        onChange={onChange}
        helperText={helperText}
        variant={"outlined"}
        fullWidth
        margin="normal"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label || option.value}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default InputSelector;
