import SeachAppBar from '../../components/search-app-bar/search-app-bar';
import ContactsSection from '../../components/contacts-section/contacts-section';

import { Contact } from '../../types/contacts';

type MainProps = {
  contacts: Contact[];
}

function Main({contacts}: MainProps): JSX.Element {
    return (
      <div className="page page--main">
        <SeachAppBar />
        <ContactsSection contacts={contacts} />
      </div>
    );
  }
  
export default Main;
