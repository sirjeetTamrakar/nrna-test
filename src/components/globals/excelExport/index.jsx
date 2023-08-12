import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Button } from '@mui/material';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import useStyles from './styles';

const ExcelExport = ({ excelData, fileName, fileTitle = 'Employee Payroll' }) => {
  const classes = useStyles();
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8';
  const fileExtension = '.xlsx';

  const length = excelData?.[0] ? Object.keys(excelData?.[0])?.length : 40;
  const findArray = (ws, value) => {
    var regex = /\d+/g;
    return Object.keys(ws)
      ?.map((list) => {
        if (list.match(regex) == value) {
          return list;
        }
      })
      ?.filter((item) => item);
  };

  const exportToExcel = async () => {
    let finalData = {};
    Object.keys(excelData?.[0])?.map((list) => {
      finalData = { ...finalData, [list]: list };
    });
    const ws = XLSX.utils.json_to_sheet([finalData, finalData, ...excelData]);
    const merge = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: length } },
      { s: { r: 1, c: 9 }, e: { r: 1, c: 13 } },
      { s: { r: 1, c: 14 }, e: { r: 1, c: 24 } },
      { s: { r: 1, c: 25 }, e: { r: 1, c: 27 } },
      { s: { r: 1, c: 28 }, e: { r: 1, c: 34 } },
      { s: { r: 1, c: 35 }, e: { r: 1, c: 41 } },
      { s: { r: 1, c: 42 }, e: { r: 1, c: 47 } }
    ];
    ws['!merges'] = merge;
    findArray(ws, 1)?.map((list) => {
      ws[list].v = fileTitle;
      ws[list].s = {
        font: {
          sz: 24,
          bold: true,
          color: '#000'
        }
        // alignment: {
        //   horizontal: 'center'
        // }
      };
    });
    findArray(ws, 2)?.map((list, index) => {
      if (list == 'J2') {
        ws[list].v = 'Social Security';
      } else if (list == 'O2') {
        ws[list].v = 'Working Settlement';
      } else if (list == 'Z2') {
        ws[list].v = 'NFZ';
      } else if (list == 'AC2') {
        ws[list].v = 'Tax';
      } else if (list == 'AJ2') {
        ws[list].v = 'Net Salary';
      } else if (list == 'AQ2') {
        ws[list].v = 'Employer Cost';
      } else {
        ws[list].v = '';
      }
      ws[list].s = {
        font: {
          sz: 16,
          bold: true,
          color: '#000'
        },
        alignment: {
          horizontal: 'center'
        }
      };
    });
    findArray(ws, 3)?.map(
      (list) =>
        (ws[list].s = {
          font: {
            bold: true,
            color: '#000'
          }
        })
    );

    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <div className={classes.root}>
      <Button className={classes.exportBtn} onClick={exportToExcel}>
        <SystemUpdateAltIcon /> Export
      </Button>
    </div>
  );
};

export default ExcelExport;
