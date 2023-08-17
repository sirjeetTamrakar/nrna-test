import { Box, InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import styles from "./style";

export const CustomInput = ({
  name,
  control,
  type,
  errors,
  placeholder = null,
  label = "",
  rule = { required: false },
  title = "",
  disabled = false,
  hidden = false,
  required,
  min,
  max,
  rows,
  startIcon,
  endIcon,
}) => {
  const classes = styles();
  let error;
  const splitName = name.split(".");
  if (errors) {
    if (splitName?.length > 1) {
      let loopError = errors;
      splitName?.map((item, index) => {
        loopError = loopError?.[item];
      });
      error = loopError?.message;
    } else {
      error = errors?.[name]?.message;
    }
  }

  return (
    <div className="inputs">
      <div className={classes.root}>
        {title && (
          <Box display="flex" gridColumnGap={".1rem"}>
            <InputLabel className="inputTitle">
              {title?.toUpperCase()}{" "}
            </InputLabel>
            <InputLabel style={{ color: "red" }}>{required && "*"} </InputLabel>
          </Box>
        )}
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              type={type}
              onChange={onChange}
              value={value}
              fullWidth
              placeholder={placeholder}
              label={label}
              variant="outlined"
              title={title}
              disabled={disabled}
              onWheel={(e) => e.target.blur()}
              InputProps={{
                inputProps: { min: min || 0, max: max },
                startAdornment: startIcon,
                endAdornment: endIcon,
              }}
              hidden={hidden}
              multiline={rows}
              rows={rows}
            />
          )}
          rules={rule}
        />
        {error && (
          <Box style={{ color: "red", fontSize: "10px", marginTop: "5px" }}>
            {error}
          </Box>
        )}
      </div>
    </div>
  );
};
