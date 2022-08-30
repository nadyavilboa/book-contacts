import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import { Contact } from "../../types/contacts";

import FormWarning from '../FormWarning/form-warning';
import FormEdit from '../FormEdit/form-edit';

type ContactPanelProps = {
  contact: Contact;
}

function ContactPanel({contact}: ContactPanelProps): JSX.Element {
    return (
      <Box 
        sx={{ 
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "5px",  
        }}
        >
          <Fab color="inherit" size="small" aria-label="edit" sx={{marginRight: "5px"}}>
            <FormEdit contact={contact} />
          </Fab>
          <Fab color="inherit" size="small" aria-label="delete">
            <FormWarning name={contact.name} />
          </Fab>
      </Box>
    );
  }
  
export default ContactPanel;