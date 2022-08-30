import { 
  Grid, 
  Paper
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import ContactPanel from '../contact-panel/contact-panel';
import ContactCommunications from '../contact-communications/contact-communications';
import { Contact } from "../../types/contacts";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 15
          }
        },
        {
          props: {
            variant: "caption"
          },
          style: {
            fontSize: 12
          }
        }
      ]
    }
  }
})

type ContactItemProps = {
  contact: Contact;
}

function ContactItem({contact}: ContactItemProps): JSX.Element {
  const { name, email, phone } = contact;
  return (
    <Grid item lg={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <ContactPanel contact={contact} />
          <img 
            width="100px"
            height="auto"
            className="img" 
            src={"./man.png"} 
            alt=""
          />
          <ContactCommunications name={name} email={email} phone={phone} />
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}
  
  export default ContactItem;