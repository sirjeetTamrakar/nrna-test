import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from '@mui/material';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDateFormat } from 'utils/dateUtils';
import { getNbnsFollowers } from '../redux/actions';
import { useStyles } from './styles';
import View from './View';

const NBNSFollowers = () => {
  const dispatch = useDispatch();

  const [openView, viewOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const classes = useStyles();

  const { businessFollowData, get_business_follow_loading } = useSelector(
    (state) => state.business
  );

  const { nbns_followers } = useSelector((state) => state.settings);

  console.log({ nbns_followers });

  const filterNbnsFollowers = nbns_followers?.filter((item) => item?.follow_nbns === '1');
  console.log({ filterNbnsFollowers });

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },
    {
      title: 'Name',
      minWidth: 150,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">
              {row?.first_name && row?.first_name} {row?.first_name && row?.last_name}{' '}
              {!row?.first_name && row?.username}
            </Typography>
          </Box>
        );
      }
    },
    {
      title: 'Created at',
      minWidth: 150,
      field: (row) => {
        return (
          <Box>
            <Typography variant="subtitle1">{changeDateFormat(row?.created_at)}</Typography>
          </Box>
        );
      }
    },
    {
      title: 'Email/Phone',
      minWidth: 100,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.email}</Typography>
            <Typography variant="subtitle1">{row?.phone}</Typography>
          </Box>
        );
      }
    },

    {
      title: 'Country of residence',
      minWidth: 120,
      field: (row) => {
        return <Typography variant="body2">{` ${row?.country_of_residence ?? '-'}`}</Typography>;
      }
    },
    {
      title: 'Actions',
      minWidth: 85,
      field: (row) => {
        return (
          <CustomPopover ButtonComponent={<MoreVertIcon />}>
            <ul className={classes.listWrapper}>
              <li onClick={() => handleView(row)}>View Details</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

  const handleView = (row) => {
    setDetail(row);
    viewOpenFunction();
  };

  const refetch = () => {
    // const data = { page: page + 1, pagination_limit: rowsPerPage, business_id: 2 };
    dispatch(getNbnsFollowers());
  };

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage, 1]);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
          <Box>NBNS Followers</Box>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={nbns_followers}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={nbns_followers?.length}
          loading={get_business_follow_loading}
        />

        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle="Banner detail"
          // modalSubtitle="Get full detail"
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
      </Box>
    </>
  );
};

export default NBNSFollowers;
