/* Third party libraries */

/* Third party libraries */
import { Report } from '@mui/icons-material';
import { Box, Checkbox, FormControlLabel, Skeleton, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Controller, useFormContext } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  inputField: {
    '& .MuiOutlinedInput-input': {
      background: '#fff'
    }
  }
}));

export default useStyles;

export const HookFormCheckbox = ({
  name,
  label,
  placeholder = '',
  type = 'text',
  icon = '',
  tooltipLabel = '',
  loading = false,
  disabled = false
}) => {
  const { control } = useFormContext();
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={'flex-start'}
        sx={{ paddingBottom: '4px' }}>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={31} animation="wave" />
        ) : (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <FormControlLabel
                  sx={{ '& .MuiTypography-root': { fontSize: '1.2rem' } }}
                  control={
                    <Checkbox
                      disabled={disabled}
                      onChange={onChange}
                      checked={value == 1 ? 1 : 0}
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: '2.4rem' }
                      }}
                      variant="h5"
                    />
                  }
                  label={label}
                />
              );
            }}
          />
        )}
        {tooltipLabel && (
          <Tooltip title={<Typography variant="body1">{tooltipLabel}</Typography>}>
            <Report sx={{ color: '#9D9CAF' }} />
          </Tooltip>
        )}
      </Box>
    </>
  );
};
