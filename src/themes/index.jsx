import { createTheme, lighten } from '@mui/material/styles';
const mainColor = '#3EC4D5';
const buttonSharedStyles = (color) => {
  return {
    color: color,
    background: lighten(color, 0.95),
    '&:hover': {
      background: color,
      color: '#fff'
    },
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
  };
};
const darkButtonSharedStyles = (color1, color2) => {
  return {
    color: '#fff',
    background: color1,
    '&:hover': {
      background: color2
    },
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
  };
};
const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
      light: lighten(mainColor, 0.925),
      contrastText: '#fff'
    },

    text: {
      main: '#121127',
      light: '#6C6B80',
      hover: '#007a6f',
      disabled: mainColor, // A darker shade of the primary color for disabled text
      active: '#4559BD'
    },
    primaryBtn: {
      main: '#017054',
      contrastText: '#fff'
    },
    grayBackground: {
      default: '#F7F8FA'
    },
    background: {
      default: '#FFF',
      light: '#F3FBFF',
      dark: '#E1F5FF'
    },
    common: {
      black: '#232323',
      white: '#fff'
    },
    input: {
      main: '#f6f6f6'
    },
    error: { main: '#FF3B3B' },
    info: { main: '#0063F7' },
    success: { main: '#06C270' },
    warning: { main: '#FFCC00' }
  },
  typography: {
    fontSize: {
      default: '12px',
      small: '12px',
      medium: '14px',
      large: '18px'
    }
  },
  overrides: {
    MuiCheckbox: {
      root: {
        color: 'blue', // Change the checkbox color
        '&$checked': {
          color: 'green' // Change the checked color
        }
      }
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#eee',
            width: '5px',
            height: '5px'
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#aaa',
            width: '5px'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: '#E5E5EB'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: '500',
          fontSize: '12px',
          padding: '9px 11px !important',
          height: '34px !important'
        },
        contained: {
          '&:hover': {
            background: '#38AEBA'
          }
        }
      },
      variants: [
        {
          props: { variant: 'active' },
          style: {
            textTransform: 'none',
            border: `1px solid #06C270`,
            color: '#06C270'
          }
        },
        {
          props: { variant: 'inactive' },
          style: {
            textTransform: 'none',
            border: `1px solid #DB2777`,
            color: '#DB2777'
          }
        },
        {
          props: {
            variant: 'purple'
          },
          style: {
            ...buttonSharedStyles('#7A1AC6')
          }
        },
        {
          props: {
            variant: 'orange'
          },
          style: {
            ...buttonSharedStyles('#FC7125')
          }
        },
        {
          props: {
            variant: 'teal'
          },
          style: {
            ...buttonSharedStyles('#16AFA7')
          }
        },
        {
          props: {
            variant: 'grey'
          },
          style: {
            ...buttonSharedStyles('#ddd')
          }
        },
        {
          props: {
            variant: 'lightBlue'
          },
          style: {
            ...buttonSharedStyles('#4E8AF4')
          }
        },
        {
          props: {
            variant: 'green'
          },
          style: {
            ...buttonSharedStyles('#06C270')
          }
        },
        {
          props: {
            variant: 'red'
          },
          style: {
            ...buttonSharedStyles('#DB2777')
          }
        },
        {
          props: {
            variant: 'blue'
          },
          style: {
            ...darkButtonSharedStyles('#4E8AF4', '#4C7CE5')
          }
        },
        {
          props: {
            variant: 'darkGreen'
          },
          style: {
            ...darkButtonSharedStyles('#00c770', '#05b267')
          }
        },
        {
          props: {
            variant: 'outlinedButton'
          },
          style: {
            color: '#496AD0',
            padding: '2px 10px',
            border: '1px solid #496AD0',
            fontSize: '13px',
            fontWeight: '400'
          }
        }
      ]
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '12px'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          maxHeight: '80vh',
          overflowY: 'auto',
          border: '1px solid #ddd',
          '& .MuiTable-root': {
            borderCollapse: 'separate'
          },
          '& .MuiTableCell-stickyHeader': {
            backgroundColor: '#fff',
            borderBottom: `1px solid #ddd`,
            padding: '8px',
            margin: '0px',
            fontWeight: '500',
            fontSize: '14px'
          }
        })
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          // borderBottom: `2px solid ${theme.palette.primary.light}`,
          backgroundColor: 'transparent',
          padding: '8px',
          margin: '0px',
          fontWeight: '500',
          fontSize: '14px'
        })
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '10px',
          margin: '0px',
          fontSize: '12px',
          '&.title': {
            cursor: 'pointer',
            '&:hover': {
              color: theme.palette.primary.main
            }
          }
        }),
        footer: ({ theme }) => ({
          fontWeight: '700',
          color: '#4559BD'
        })
      }
    },
    MuiTableFooter: {
      styleOverrides: {
        root: ({ theme }) => {
          console.log({ theme });
          return {
            fontSize: '16px',
            fontWeight: '600',
            position: 'sticky',
            bottom: 0,
            zIndex: 100,
            background: '#fff'
          };
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: '20px'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '20px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F9FB !important',
          outline: 'none',
          border: 'none',
          borderRadius: '3px',
          fontSize: '12px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          outline: 'none',
          border: 'none',
          borderRadius: '3px'
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          fontSize: 14
        },
        listbox: {
          paddingBlock: 0
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 28,
          height: 16,
          padding: 0,
          display: 'flex',

          '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
              transform: 'translateX(12px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#4C7CE5'
              }
            }
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
              duration: 200
            })
          },
          '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: '#E5E5EB',
            boxSizing: 'border-box'
          }
        })
      }
    }
  }
});
export default theme;
