import { Delete } from '@mui/icons-material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box, Button, CircularProgress, IconButton } from '@mui/material';
import CustomAutoComplete from '../Form/CustomAutoComplete';
import CustomForm from '../Form/CustomForm';
import CustomFormProvider from '../Form/CustomFormProvider';
import CustomModal from './CustomModal';

const CustomRoleChangeModal = ({
  open,
  handleClose,
  handleConfirm,
  isLoading,
  role,
  modalTitle
}) => {
  const defaultValues = { role: role };
  const roleData = [
    { value: 'admin', label: 'Admin' },
    { value: 'member', label: 'Member' },
    { value: 'ncc', label: 'NCC' },
    { value: '', label: 'None' }
  ];
  const submitHandler = (data) => {
    console.log('mmmmmmmmmff', { data });
    handleConfirm(data?.role);
  };
  return (
    <>
      <CustomModal
        open={open}
        width={'500px'}
        height={'306px'}
        icon={<Delete />}
        handleClose={handleClose}>
        <Box>
          <Box>
            <Box
              style={{
                fontSize: '17px',
                textAlign: 'center',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                marginTop: '20px'
              }}>
              <IconButton
                style={{
                  backgroundColor: '#dffffc',
                  width: '40px',
                  height: '40px'
                }}>
                <AutorenewIcon style={{ color: '#009688' }} />
              </IconButton>

              <p
                style={{
                  fontWeight: '500',
                  margin: 0,
                  padding: 0,
                  marginTop: '10px'
                }}>
                Do you want to change role of this record?
              </p>
              {role ? (
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: '14px',
                    marginTop: '5px',
                    color: '#008478'
                  }}>
                  Your current status is {role}.
                </p>
              ) : (
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: '14px',
                    marginTop: '5px',
                    color: '#d92323'
                  }}>
                  You currenttly do not have a role.
                </p>
              )}
            </Box>
          </Box>

          <CustomFormProvider defaultValues={defaultValues}>
            <CustomForm onSubmit={submitHandler}>
              <Box sx={{ padding: '20px  50px 5px' }}>
                <CustomAutoComplete name="role" label="Select a role" options={roleData ?? []} />
              </Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  //   height: "60px",
                  gap: '10px',
                  marginTop: '30px'
                }}>
                <Button type="submit" variant="contained" disabled={isLoading} color="primary">
                  {isLoading ? (
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                      <CircularProgress size={15} style={{ color: '#fff' }} />
                      Submit
                    </Box>
                  ) : (
                    'Submit'
                  )}
                </Button>
                <Button variant="outlined" onClick={() => handleClose()} color="primary">
                  Cancel
                </Button>
              </Box>
            </CustomForm>
          </CustomFormProvider>
        </Box>
      </CustomModal>
    </>
  );
};

export default CustomRoleChangeModal;
