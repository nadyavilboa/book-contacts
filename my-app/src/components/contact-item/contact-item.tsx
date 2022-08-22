import { 
  Grid, 
  Paper, 
  Typography, 
  Box,
} from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

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
  const { name, email, phone, image } = contact;
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img 
            className="img" 
            src={image} 
            alt=""
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {name}
            </Typography>
            <Box 
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <Email sx={{ width: 12.5, marginRight: 0.5 }} />
              <Typography variant="body2" component="p">
                {email}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Phone sx={{ width: 12.5, marginRight: 0.5 }} />
              <Typography variant="body2" component="p" marginRight={1.5}>
                {phone}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}
  
  export default ContactItem;