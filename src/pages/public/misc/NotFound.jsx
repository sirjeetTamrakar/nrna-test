import { Box, Button, Typography } from '@mui/material';

import AuthLayout from 'layouts/authLayout';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout heading="Page not found">
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4rem' }}>
        <Typography textAlign={'center'} variant="h5">
          Sorry! The route you trying to access is not available
        </Typography>
      </Box>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </AuthLayout>
  );
};

export default NotFound;
