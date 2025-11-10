import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

   const [Contacts, setContacts] = useState([]);

  return (
    <div>
    <Header />
    < AddContact />
    <ContactList contacts={Contacts} />
    </div>
   
  );
}

export default App;
