import './contacts-empty.css';

type ContactsEmptyProps = {
  requestError: boolean;
}

function ContactsEmpty({requestError}: ContactsEmptyProps): JSX.Element {
    return (
      <div className="contacts-empty">
        {requestError ? (
           <b className="cities__status">Something went wrong, please try again later</b>
        ) : (
         <>
          <h2 className="contacts-empty__title">No contacts</h2>
          <p>You can add contacts</p>
         </>
        )}
      </div>
    );
  }
  
export default ContactsEmpty;