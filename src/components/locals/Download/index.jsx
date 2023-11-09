import { Box, Button, Typography } from '@mui/material';
import CustomTable from 'components/common/table';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const tableData = [
  {
    id: 1,
    title: 'Documentation title',
    file_src: 'https://pdcrodas.webs.ull.es/naturalismo/FitzgeraldTheGreatGastby.pdf'
  },
  {
    id: 2,
    title: 'This is a title of pdf',
    file_src: 'https://pdcrodas.webs.ull.es/naturalismo/FitzgeraldTheGreatGastby.pdf'
  },
  {
    id: 3,
    title: 'This is a title of pdf',
    file_src: 'https://pdcrodas.webs.ull.es/naturalismo/FitzgeraldTheGreatGastby.pdf'
  },
  {
    id: 4,
    title: 'Another ittle',
    file_src: 'https://pdcrodas.webs.ull.es/naturalismo/FitzgeraldTheGreatGastby.pdf'
  }
];

const Downloads = () => {
  // const { settings } = useSelector((state) => state.homepage);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Title',
      minWidth: 200,
      field: (row) => {
        return (
          <Box
            sx={{ '& a': { textDecoration: 'none', color: (theme) => theme.palette.text.main } }}>
            <Link to={`${row?.id}`} state={{ title: row?.title, file_src: row?.file_src }}>
              {row?.title}
            </Link>
          </Box>
        );
      }
    },
    {
      title: 'Action',
      minWidth: 200,
      field: (row) => {
        return (
          <>
            <a href={row.file_src} target="_blank" download={'download.pdf'} rel="noreferrer">
              <Button
                variant="text"
                sx={{
                  p: '10px !important',
                  ml: '-10px',
                  color: (theme) => theme.palette.text.main
                }}
                startIcon={<FileDownloadOutlinedIcon />}>
                Download
              </Button>
            </a>
          </>
        );
      }
    }
  ];
  return (
    <>
      <div className="main_content">
        <section className="all_events">
          <div className="container">
            <div className="about_title">Downloads</div>
            <CustomTable
              tableHeads={tableHeads}
              // tableData={data?.members}
              tableData={tableData}
              // loading={contact_loading}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              page={page}
              setPage={setPage}
              // total={data?.members?.length}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Downloads;
