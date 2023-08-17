import {
  Autocomplete,
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
}));
export const CustomMultipleSelect = ({
  name,
  control,
  errors,
  label,
  data = [],
  title = "",
  disabled,
  defaultValue,
  placeholder,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {title && (
          <InputLabel className="title">{title?.toUpperCase()}</InputLabel>
        )}
        <FormControl variant="outlined">
          {/* <InputLabel>{label}</InputLabel> */}
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Autocomplete
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={data}
                  onChange={(e, data) =>
                    onChange(data?.map((item) => item?.value))
                  }
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField {...params} label={label} />
                  )}
                />
              </>
            )}
          />
        </FormControl>
        {errors[name] && errors[name].type === "required" && (
          <FormHelperText style={{ color: "red" }}>
            This field is required
          </FormHelperText>
        )}
      </div>
    </>
  );
};
