import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Email, Phone } from '@mui/icons-material';

type ContactCommunicationsProps = {
    name: string,
    email: string,
    phone: string;
}

function ContactCommunications({name, email, phone}: ContactCommunicationsProps): JSX.Element {
    return (
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2" sx={{fontWeight: 'bold', marginBottom: '20px'}}>
          {name}
        </Typography>
        <Box 
          sx={{
            display: "flex",
            alignItems: "center",
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
    );
  }
  
export default ContactCommunications;