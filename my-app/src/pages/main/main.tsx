import SeachAppBar from '../../components/search-app-bar/search-app-bar';
import ContactsSection from '../../components/contacts-section/contacts-section';

import {useAppSelector} from '../../hooks';
import { selectContacts, selectContactsStatus } from '../../store/contacts-process/selectors';
import { FetchStatus } from '../../const/const';
import Loader from '../../components/loader/loader';

function Main(): JSX.Element {
  const contacts = useAppSelector(selectContacts);
  const status = useAppSelector(selectContactsStatus);

  const isError = status === FetchStatus.Failed;

  if ([FetchStatus.Idle, FetchStatus.Loading].includes(status)) {
    return (
      <Loader />
    );
  }
    return (
      <div className="page page--main">
        <SeachAppBar />
        <ContactsSection requestError={isError} contacts={contacts} />
      </div>
    );
  }
  
export default Main;
