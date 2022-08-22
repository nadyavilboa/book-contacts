import SeachAppBar from '../../components/app-bar/app-bar';
import ContactsSection from '../../components/contacts-section/contacts-section';

import { Contact } from '../../types/contacts';

type MainProps = {
  contacts: Contact[];
}

function Main({contacts}: MainProps): JSX.Element {
    return (
      <div>
        <SeachAppBar />
        <ContactsSection contacts={contacts} />
      </div>
    );
  }
  
export default Main;
