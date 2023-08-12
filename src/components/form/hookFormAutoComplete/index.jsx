/* Third party libraries */

/* Third party libraries */
import { Report } from '@mui/icons-material';
import { Autocomplete, Box, InputLabel, TextField, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Controller, useFormContext } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  inputField: {
    '& .MuiOutlinedInput-root': {
      padding: '0px 16px !important'
    },
    '& .MuiAutocomplete-endAdornment': {
      top: 'calc(50% - 10px)'
    },
    '& .MuiAutocomplete-input': {
      paddingTop: '6px !important',
      paddingBottom: '6px !important'
    }
  },
  autoCompleteField: {
    fontSize: '13px !important',
    '& .MuiAutocomplete-option': {
      fontSize: '13px'
    }
  }
}));

const HookFormAutoComplete = ({
  name,
  label,
  placeholder = '',
  type = 'text',
  icon = '',
  options = [],
  tooltipLabel = '',
  disabled = false
}) => {
  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext();
  const classes = useStyles();
  const watchValue = watch(name);
  const defaultValue = options?.filter((item) => item.value == watchValue);
  const fieldError = errors[name]?.message;
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        columnGap={0.5}
        sx={{ paddingBottom: '4px' }}>
        <InputLabel>{label}</InputLabel>
        {tooltipLabel && (
          <Tooltip title={<Typography variant="h6">{tooltipLabel}</Typography>}>
            <Report sx={{ color: '#9D9CAF', cursor: 'pointer' }} />
          </Tooltip>
        )}
      </Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            id="combo-box-demo"
            sx={{ fontSize: '14px !important' }}
            options={options}
            disabled={disabled}
            defaultValue={defaultValue ? defaultValue[0] : null}
            className={classes.autoCompleteField}
            isOptionEqualToValue={(option) => option.value}
            getOptionLabel={(option) => option.label}
            onChange={(e, data) => onChange(data?.value)}
            renderInput={(params) => (
              <TextField
                className={classes.inputField}
                error={fieldError ? true : false}
                {...params}
                value={value}
                helperText={fieldError}
              />
            )}
          />
        )}
      />
    </>
  );
};

export default HookFormAutoComplete;
