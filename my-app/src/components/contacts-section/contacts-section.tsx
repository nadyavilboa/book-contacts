import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormAdd from "../FormAdd/form-add";
import ContactItem from "../contact-item/contact-item";

import { Contact } from "../../types/contacts";

type ContactsSectionProps = {
  contacts: Contact[];
}

function ContactsSection({contacts}: ContactsSectionProps): JSX.Element {
    return (
      <Container sx={{marginY: 5}}>
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginBottom: "30px", 
          }}
        >
          <Typography 
            variant="h4"
            component="h2"
          >
            Contacts List
          </Typography>
          <FormAdd />
        </Box>
        <Grid container spacing={5}>
          {contacts.map((contact: Contact) => (
            <ContactItem contact={contact} key={Number(contact.id)} />
          ))}
        </Grid>
      </Container>
    );
  }
  
export default ContactsSection;