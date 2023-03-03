import { CustomDialog, PersonsTable } from '@/components';
import { useAppSelector } from '@/hooks';
import useDialog from '@/hooks/useDialog';
import { selectFavorites } from '@/redux/states';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const Navbar = (): JSX.Element => {
  const { open, handleClose, handleOpen } = useDialog();

  const favedPersonsState = useAppSelector(selectFavorites);

  return (
    <AppBar position='sticky' sx={{ mb: 5 }}>
      <CustomDialog open={open} handleClose={handleClose} title='Favorites'>
        {favedPersonsState.length !== 0 ? (
          <PersonsTable
            peopleToRender={favedPersonsState}
            actionIcon={{
              checkedIcon: <DeleteIcon color='error' />,
            }}
          />
        ) : (
          <Typography align='center'>Nothing here</Typography>
        )}
      </CustomDialog>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color='secondary' variant='contained' onClick={handleOpen}>
          Your Favs
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
