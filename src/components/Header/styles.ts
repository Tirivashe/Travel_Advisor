import { alpha, Theme } from '@mui/material/styles'

export const componentStyles = () => ({
  title: (theme: Theme) => ({
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }),

  search: (theme: Theme) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' }
  }),

  searchIcon: (theme: Theme) => ({
    padding: theme.spacing(0, 2), 
    height: '100%', 
    position: 'absolute', 
    pointerEvents: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
  }),

  inputRoot: {
    color: 'inherit',
  },

  inputInput: (theme: Theme) => ({
    padding: theme.spacing(1, 1, 1, 0), 
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, 
    transition: theme.transitions.create('width'), 
    width: '100%', 
    [theme.breakpoints.up('md')]: { width: '20ch' },
  }),

  toolbar: {
    display: 'flex', 
    justifyContent: 'space-between',
  },

}) as const