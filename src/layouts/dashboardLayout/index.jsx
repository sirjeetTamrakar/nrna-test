import { Box } from '@mui/system';
import useToggle from 'hooks/useToggle';
import CustomAppBar from './appbar';

const DasboardLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useToggle(true);
  const commonStyles = {
    width: '100%'
  };
  const customStyles = {
    openState: {
      ...commonStyles,
      marginTop: '6.5rem !important',
      transition: 'all .3s ease'
    },
    closedState: {
      ...commonStyles,
      marginTop: '6.1rem !important',
      marginLeft: '-210px',
      transition: 'all .3s ease'
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomAppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      <Box sx={drawerOpen ? customStyles.openState : customStyles.closedState}>{children}</Box>
    </Box>
  );
};

export default DasboardLayout;
