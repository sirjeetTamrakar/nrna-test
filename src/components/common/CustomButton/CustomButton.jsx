import { Box, Button, CircularProgress } from '@mui/material';

const CustomButton = ({
  type,
  variant,
  buttonName,
  loading,
  justifyContent,
  handleClick,
  disabled = false,
  fullWidth = false
}) => {
  return (
    <Box display={'flex'} justifyContent={justifyContent || 'end'} marginTop={'17px'}>
      <Button
        variant={variant || 'contained'}
        type={type || 'submit'}
        disabled={loading || disabled}
        fullWidth={fullWidth}
        onClick={handleClick}>
        {loading ? (
          <Box display={'flex'} alignItems={'center'} gap={'10px'}>
            <CircularProgress size={15} />
            {buttonName || 'Save'}
          </Box>
        ) : (
          <Box display={'flex'} alignItems={'center'} gap={'10px'}>
            {buttonName || 'Save'}
          </Box>
        )}
      </Button>{' '}
    </Box>
  );
};

export default CustomButton;
