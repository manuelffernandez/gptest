import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = (): JSX.Element => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
