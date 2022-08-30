import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type FormWarningProps = {
    name: string;
  }

function FormWarning({name}: FormWarningProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" color="error" onClick={handleClickOpen}>
        <DeleteForeverIcon sx={{ width: 18 }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            Delete this contact?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Contact: <strong>{name}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>No</Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormWarning;