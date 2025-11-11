import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const isInitialLoad = useRef(true);

  const addContactHandler = (contact) => {
    console.log("Adding contact:", contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  }

  // Remove contact handler 
  const removeContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  }

  // Single useEffect for localStorage operations
  useEffect(() => {
    if (isInitialLoad.current) {
      // First load - get from localStorage
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      console.log('App - retrieved from localStorage:', retriveContacts);

      if (retriveContacts && retriveContacts.length > 0) {
        setContacts(retriveContacts);
      }
      isInitialLoad.current = false;
    } else {
      // Subsequent updates - save to localStorage
      console.log('Saving to localStorage:', contacts);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]); // Only depend on contacts

  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;