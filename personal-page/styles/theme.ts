import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#50b0cb',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#f6f6f6',
      default: '#f6f6f6',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 5,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: 50,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 0,
          background: '#f3f3f3',
        },
      },
    },
  },
});