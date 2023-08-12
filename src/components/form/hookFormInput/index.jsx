/* Third party libraries */

/* Third party libraries */
import { Report } from '@mui/icons-material';
import { InputLabel, Skeleton, TextField, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Controller, useFormContext } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  inputField: {
    '& .MuiOutlinedInput-input': {
      background: '#fff'
    }
  }
}));

export default useStyles;

export const HookFormInput = ({
  name,
  label,
  placeholder = '',
  type = 'text',
  icon = '',
  tooltipLabel = '',
  loading = false,
  multiple = false,
  defaultValue,
  disabled,
  inputProps = {}
}) => {
  const classes = useStyles();
  const {
    control,
    formState: { errors }
  } = useFormContext();
  const fieldError = errors[name]?.message;
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
            <TextField
              className={classes.inputField}
              sx={{ width: '100%' }}
              onChange={onChange}
              value={defaultValue || value}
              InputLabelProps={{ shrink: false }}
              placeholder={placeholder}
              error={fieldError ? true : false}
              disabled={disabled}
              helperText={fieldError}
              inputProps={inputProps}
              type={type}
              onWheel={(e) => e.target.blur()}
            />
          )}
        />
      )}
    </>
  );
};
