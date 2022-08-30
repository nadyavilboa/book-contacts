import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { Contact } from '../../types/contacts';

type FormEditProps = {
    contact: Contact;
  }

function FormEdit({contact}: FormEditProps): JSX.Element {
  const {name, email, phone}  = contact;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" color="secondary" onClick={handleClickOpen}>
        <EditIcon sx={{ width: 18}} />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit this contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            value={name}
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            value={email}
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            value={phone}
            id="phone"
            label="Phone"
            type="phone"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormEdit;