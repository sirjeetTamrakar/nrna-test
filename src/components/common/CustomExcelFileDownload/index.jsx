import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Button } from '@mui/material';
import * as XLSX from 'xlsx';

const ExcelDownloadButton = ({ data, fileName, dataObject }) => {
  const downloadExcel = () => {
    const extractedData = data.map((item) => ({
      Firstname: item.first_name,
      Lastname: item?.last_name ?? '-',
      Email: item?.email ?? '-',
      Phone: item?.phone ?? '-',
      City: item?.city ?? '-',
      Address: item?.address ?? '-',
      Country: item?.country_of_residence ?? '-'
    }));

    const extractedDataObject = {
      Firstname: data.first_name,
      Lastname: data?.last_name ?? '-',
      Email: data?.email ?? '-',
      Phone: data?.phone ?? '-',
      City: data?.city ?? '-',
      Address: data?.address ?? '-',
      Country: data?.country_of_residence ?? '-'
    };

    const ws = XLSX.utils.json_to_sheet(dataObject ? extractedDataObject : extractedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  return (
    <Button
      startIcon={<ArticleOutlinedIcon />}
      variant="contained"
      color="success"
      onClick={downloadExcel}>
      {' '}
      Download excel sheet{' '}
    </Button>
  );
};

export default ExcelDownloadButton;
