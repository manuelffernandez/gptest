import { Dialog, DialogTitle } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  open: boolean;
  handleClose: () => void;
}

const CustomDialog = (props: Props): JSX.Element => {
  const { children, title, open, handleClose } = props;

  return (
    <Dialog fullWidth={true} maxWidth='lg' open={open} onClose={handleClose}>
      <DialogTitle fontWeight='600' align='center' color='primary'>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
