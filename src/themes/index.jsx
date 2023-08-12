import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: '#496AD0',
      dark: '#4559BD',
      light: '#599BF9'
    },
    secondary: {
      main: '#FC7125',
      2: '#FF9129',
      3: '#FF9E2A',
      4: '#FFD89F',
      5: '#FFD89F'
    },
    btnColor: {
      main: '#4E8AF4',
      contrastText: '#fff'
    },
    grayBackground: {
      default: '#F9F9FB'
    },
    background: {
      default: '#0000'
    },
    pureBlack: '#000',
    tableHead: '#687182',
    modalHead: '#4C4B63',
    grey: {
      1: '#6C6B80',
      2: '#F3F3F6',
      3: '#E5E5EB',
      4: '#D1D1DB',
      5: '#9D9CAF',
      6: '#4C4B63'
    },
    lightGrey: {
      1: '#F9F9FB',
      2: '#F3F3F6',
      3: '#E5E5EB',
      4: '#D1D1DB',
      5: '#9D9CAF'
    },
    blue: '#2c67cf',
    lightBlue: {
      1: '#599BF9',
      2: '#6EADFC',
      3: '#94C5FF',
      4: '#BDE3FF',
      5: '#BDE3FF'
    },
    common: {
      black: '#232323',
      white: '#fff'
    },
    error: { main: '#FF3B3B' },
    info: { main: '#0063F7' },

    success: { main: '#06C270' },
    warning: { main: '#FFCC00' }
  },
  typography: {
    fontFamily: ['Euclid'].join(',')
    // fontSize: `16px`
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0.6rem 2rem',
          lineHeight: '1.6rem',
          fontSize: '1.3rem',
          textTransform: 'capitalize',
          borderRadius: '0.2rem',
          boxShadow: 'none'
        }
      },
      defaultProps: {
        color: 'btnColor'
      }
    },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '1.2rem'
    //     }
    //   }
    // },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1.2rem'
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          fontSize: '1.2rem'
        },
        listbox: {
          background: '#fff'
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          fontSize: '1.2rem'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: '600',
          fontSize: '12px',
          color: '#6C6B80',
          padding: '10px',
          textTransform: 'capitalize',
          letterSpacing: '0.6px'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '0'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: '#E5E5EB'
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          color: '#6C6B80',
          fontWeight: '600',
          '& .MuiInputBase-root': {
            marginRight: '0'
          }
        },
        selectLabel: {
          fontSize: '12px'
        },
        displayedRows: {
          fontSize: '12px',
          position: 'absolute'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontSize: '12px'
          },
          '& .PrivatePickersFadeTransitionGroup-root': {
            fontSize: '12px'
          },
          '& .PrivatePickersYear-yearButton': {
            fontSize: '12px'
          }
        }
      }
    },

    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: '12px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '0'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: '6px 16px',
          fontSize: '12px',
          background: '#fff',
          borderRadius: '0',
          '& input': {
            padding: '0'
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '10px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          color: '#201F37',
          fontWeight: '500'
        }
      }
    }

    // MuiTable: {
    //   styleOverrides: {
    //     root: {
    //       MuiTableCell: {
    //         root: {
    //           padding: '0.5rem'
    //         }
    //       }
    //     }
    //   }
    // }
  }
});

export default theme;
