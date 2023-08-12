/* Third party libraries */
import React from 'react';

/* Third party libraries */
import { InputLabel, Skeleton, TextareaAutosize, Tooltip, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { Report } from '@mui/icons-material';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  inputField: {
    '& .MuiOutlinedInput-input': {
      background: '#fff'
    }
  }
}));

export default useStyles;

export const HookFormTextarea = ({
  name,
  label,
  placeholder = '',
  tooltipLabel = '',
  loading = false,
  rows = 4
}) => {
  const { control } = useFormContext();
  return (
    <>
      <Box display="flex" alignItems="center" columnGap={0.5} sx={{ paddingBottom: '4px' }}>
        <InputLabel>{label}</InputLabel>
        {tooltipLabel && (
          <Tooltip title={<Typography variant="body1">{tooltipLabel}</Typography>}>
            <Report sx={{ color: '#9D9CAF' }} />
          </Tooltip>
        )}
      </Box>
      {loading ? (
        <Skeleton variant="rectangular" height={31} animation="wave" />
      ) : (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextareaAutosize
              minRows={rows}
              // className={classes.inputField}
              style={{ width: '100%', border: '1px solid #bdbdbd' }}
              onChange={onChange}
              value={value}
              InputLabelProps={{ shrink: false }}
              placeholder={placeholder}
            />
          )}
        />
      )}
    </>
  );
};
