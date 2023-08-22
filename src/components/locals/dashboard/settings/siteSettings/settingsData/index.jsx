import { Box, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Register from './Register';

export default function SettingsData() {
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

  //   const submitHandler = () => {
  //     console.log('dssssssata', data);
  //     const formdata = new FormData();
  //     if (data) {
  //       Object.keys(data)?.map((key) => formdata.append(key, data?.[key]));

  //       if (data?.deals_image?.length > 0) {
  //         formdata.append('deals_image', data?.deals_image?.[0]);
  //       }

  //     }

  //     postDeals({ data: formdata });
  //     console.log('nnnnnnnnnn', { formdata });
  //     successToast('Submitted deals form successfully');
  //   };

  //   useEffect(() => {
  //     if (dealsData?.data) {
  //       setValue('deals_name', dealsData?.data?.deals_name);
  //       setValue('deals_description', dealsData?.data?.deals_description);
  //       setValue('deals_image', dealsData?.data?.deals_image?.[0]);
  //     }
  //   }, [dealsData?.data]);

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
            Settings Data
          </Typography>
        </Box>

        <Register />
      </Paper>
    </>
  );
}
