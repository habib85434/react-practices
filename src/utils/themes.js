import { createMuiTheme } from '@material-ui/core/styles';

export const themed = createMuiTheme({
  shadows: ['none'],
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffb74d'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    type: 'dark'
  },
  typography: {
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 400,
      fontSize: 12
    },
    button: {
      //fontStyle: 'italic',
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: '#ffb74d',
        borderRadius: 2,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        boxShadow: 'none'
      },

      root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ffb74d',
        borderColor: '#ffb74d',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(','),
        '&:hover': {
          backgroundColor: '#ffb74d',
          borderColor: '#ffb74d',
          boxShadow: 'none'
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#ffb74d',
          borderColor: '#ffb74d'
        },
        '&:focus': {
          //boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        }
      }
    }
  }
});

export const theme = createMuiTheme({
  // shadows: ['none'],
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#212121'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
    // type: 'dark',
  },
  typography: {
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 400,
      fontSize: 12
    },
    body2: {
      fontSize: 12,
      paddingTop: 11,
      paddingBottom: 11,
      paddingLeft: 5,
      fontWeight: '500'
    },
    button: {
      //fontStyle: 'italic',
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: '#ffb74d',
        borderRadius: 2,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        boxShadow: 'none'
      },
      root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ffb74d',
        borderColor: '#ffb74d',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(','),
        '&:hover': {
          backgroundColor: '#ffb74d',
          borderColor: '#ffb74d',
          boxShadow: 'none'
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#ffb74d',
          borderColor: '#ffb74d'
        },
        '&:focus': {
          //boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        }
      }
    },
    MuiTableCell: {
      body: {
        fontSize: 12,
        paddingTop: 11,
        paddingBottom: 11,
        paddingLeft: 5,
        fontWeight: '500'
      }
    },
    MuiPaginationItem: {
      page: {
        '&$selected': {
          color: '#ffb74d',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    }
  }
});
