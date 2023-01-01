import Box from "@mui/material/Box";
import { Contact } from "../../types/contacts";

import FormWarning from '../FormWarning/form-warning';
import FormEdit from '../FormEdit/form-edit';

import './contact-panel.css';

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
          <div className="button-wrapper" aria-label="edit">
            <FormEdit contact={contact} />
          </div>
          <div className="button-wrapper" aria-label="delete">
            <FormWarning name={contact.name} />
          </div>
      </Box>
    );
  }
  
export default ContactPanel;