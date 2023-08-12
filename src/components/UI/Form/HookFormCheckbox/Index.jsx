/* Third party libraries */
import React from 'react';

/* Third party libraries */
import { InputLabel, TextField, Tooltip, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { Report } from '@mui/icons-material';
import { Box } from '@mui/system';
import Error from '../Error';

export const HookFormCheckbox = ({
  name,
  label,
  placeholder = '',
  tooltipLabel = '',
  required = false,
  disabled = false
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <Box display="flex" alignItems="center" columnGap={0.5} sx={{ paddingBottom: '4px' }}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              disabled={disabled}
              variant="standard"
              InputLabelProps={{ shrink: false }}
              placeholder={placeholder}
              type="checkbox"
            />
          )}
        />
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

      {errors && errors[name] && <Error>{errors[name]?.message}</Error>}
    </>
  );
};
