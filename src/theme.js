import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const SANS_FONT_FAMILY = "'Poppins', 'Helvetica', 'Arial', sans-serif"

let theme = createMuiTheme({
  fontFamily: SANS_FONT_FAMILY,
  palette: {
    background: {
      paper: '#3A4665',
      default: '#1E212B',
    },
    primary: {
      main: '#F9F871',
      contrastText: '#1E212B',
    },
    text: {
      primary: '#F9F9FF',
    },
  },
  typography: {
    h1: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.6,
      letterSpacing: '-0.00625em',
    },
    h2: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.5,
      letterSpacing: '-0.001625em',
    },
    h3: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 800,
      fontSize: '1.5rem',
      lineHeight: 1.6,
      letterSpacing: '0.03125em',
    },
    h4: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0025em',
    },
    h5: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.05em',
    },
    h6: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.0325em',
    },
    body1: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.035em',
    },
    button: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.0935em',
    },
    caption: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 300,
      fontSize: '0.75rem',
      lineHeight: 2,
      letterSpacing: '0.15em',
    },
  },
})

theme = responsiveFontSizes(theme)

theme.overrides.MuiChip = {
  root: {
    height: '2.1rem',
    borderRadius: '3rem',
    padding: '0.8em 1em ',
    [theme.breakpoints.up('sm')]: {
      height: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '2.8rem',
    },
  },
  label: {
    fontFamily: SANS_FONT_FAMILY,
    fontSize: '0.75rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
}

export default theme
