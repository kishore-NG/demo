import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

   const [Contacts, setContacts] = useState([]);

   const addContactHandler = (contact) => {
      console.log(contact);
      setContacts([...Contacts, contact]);
   }

  return (
    <div>
    <Header />
    < AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={Contacts} />
    </div>
   
  );
}

export default App;
