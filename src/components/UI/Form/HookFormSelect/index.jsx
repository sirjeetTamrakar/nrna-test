/* Third party libraries */

/* Third party libraries */
import { Autocomplete, Box, InputLabel, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Error from '../Error';

export const HookFormAutoSelect = ({
  name,
  label,
  placeholder = '',
  type = 'select',
  tooltipLabel = '',
  required = false,
  disabled = false,
  options = []
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <Box display="flex" alignItems="center" columnGap={0.5} sx={{ paddingBottom: '4px' }}>
        <InputLabel sx={{ fontSize: '14px', color: '#201F37', fontWeight: '500' }}>
          {label}
        </InputLabel>
        {required && <span style={{ color: 'red' }}>*</span>}
      </Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <Autocomplete
              id="combo-box-demo"
              onChange={(e, newValue) => onChange(newValue?.value)}
              getOptionLabel={(option) => option.label}
              options={options}
              sx={{
                width: 300,
                '& .MuiInputBase-root': {
                  padding: '2px'
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          );
        }}
      />
      {errors && errors[name] && <Error>{errors[name]?.message}</Error>}
    </>
  );
};
