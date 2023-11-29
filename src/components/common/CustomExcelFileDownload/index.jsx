import { Button } from '@mui/material';
import * as XLSX from 'xlsx';

const ExcelDownloadButton = ({ data, fileName }) => {
  const downloadExcel = () => {
    const extractedData = data.map((item) => ({
      Firstname: item.first_name,
      Lastname: item?.last_name ?? '-',
      Email: item?.email ?? '-',
      Phone: item?.phone ?? '-',
      Country: item?.country_of_residence ?? '-'
    }));

    const ws = XLSX.utils.json_to_sheet(extractedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  return (
    <Button variant="contained" color="success" onClick={downloadExcel}>
      {' '}
      Download excel sheet{' '}
    </Button>
  );
};

export default ExcelDownloadButton;
