import { Box, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Register from './Register';

export default function Profile() {
  const defaultValues = {
    deals_name: '',
    deals_description: '',
    deals_image: ''
  };
  const methods = useForm({
    defaultValues
  });

  const {
    //  handleSubmit,
    //  formState: { errors },
    //  control,
    watch,
    setValue
    //  clearErrors
  } = methods;

  return (
    <>
      <Paper sx={{ padding: '20px', marginInline: '-20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Typography component="h4" sx={{ fontSize: '20px', marginBottom: '10px' }}>
            Profile section
          </Typography>
        </Box>

        <Register />
      </Paper>
    </>
  );
}
