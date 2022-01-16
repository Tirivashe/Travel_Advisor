//import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import { Search } from '@mui/icons-material'
import { componentStyles } from './styles'

interface Props {
  
}

const Header = (props: Props) => {
  const classes = componentStyles()
  return (
    <AppBar position='static'>
      <Toolbar sx={classes.toolbar}>
        <Typography variant='h5' sx={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant='h6' sx={classes.title}>
            Explore New Places
          </Typography>
          {/* <Autocomplete> */}
            <Box component="div" sx={{...classes.search }}>
              <Box component="div"sx={{...classes.searchIcon}}>
                <Search />
              </Box>
              <InputBase placeholder="Search..." sx={{ root: classes.inputRoot, input: classes.inputInput }}/>
            </Box>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
