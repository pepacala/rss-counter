import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { ReactNode, useState } from "react";

type Props = {
  onConfirm: () => void;
  title: string;
  className?: string;
  children: ReactNode;
};

export default function Confirm({
  title,
  onConfirm,
  className,
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <>
      <span className={className ? className : ""} onClick={handleClickOpen}>
        {children}
      </span>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Go back (close)
          </Button>
          <Button onClick={handleConfirm} variant="contained">
            Do it
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
