import { useState } from 'react';

const useDialog = (): {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
} => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  return { open, handleClose, handleOpen };
};

export default useDialog;
