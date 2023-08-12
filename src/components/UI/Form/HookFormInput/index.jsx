/* Third party libraries */

/* Third party libraries */
import { Report } from '@mui/icons-material';
import { InputLabel, TextField, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, useFormContext } from 'react-hook-form';
import Error from '../Error';

export const HookFormInput = ({
  name,
  label,
  placeholder = '',
  type = 'text',
  tooltipLabel = '',
  required = false,
  disabled = false,
  multiline = false,
  rows = 0
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
        {tooltipLabel && (
          <Tooltip title={<Typography variant="body1">{tooltipLabel}</Typography>}>
            <Report sx={{ color: '#9D9CAF' }} />
          </Tooltip>
        )}
      </Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            sx={{ width: '100%' }}
            onChange={onChange}
            multiline={multiline}
            rows={rows}
            value={value}
            disabled={disabled}
            InputLabelProps={{ shrink: false }}
            placeholder={placeholder}
            type={type}
          />
        )}
      />
      {errors && errors[name] && <Error>{errors[name]?.message}</Error>}
    </>
  );
};
