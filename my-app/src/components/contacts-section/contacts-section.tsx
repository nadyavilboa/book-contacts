import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ContactItem from "../contact-item/contact-item";

import { Contact } from "../../types/contacts";

type ContactsSectionProps = {
  contacts: Contact[];
}

function ContactsSection({contacts}: ContactsSectionProps): JSX.Element {
    return (
      <Container sx={{marginY: 5}}>
        <Typography 
          variant="h4"
          component="h2"
          marginTop={5}
          marginBottom={3}
        >
          Contacts List
        </Typography>
        <Grid container spacing={5}>
          {contacts.map((contact: Contact) => (
            <ContactItem contact={contact} key={Number(contact.id)} />
          ))}
        </Grid>
      </Container>
    );
  }
  
export default ContactsSection;