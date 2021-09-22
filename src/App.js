// src/App.js
import react from 'react'
import { useState } from 'react';
import "./App.css";
import allContacts from './contacts.json';
import SearchField from './SearchField';
import ContactsList from './ContactsList';

const fiveContacts = [...allContacts].slice(0, 5)

function App() {
  
  const [contacts, setContacts] = useState(fiveContacts);
  const [query, setQuery] = useState('');
  
  const randomAdder = () => {
    const otherContacts = allContacts.filter(contact => ![...contacts].map(contact => contact.id).includes(contact.id))
    if (otherContacts.length > 0){
      
      const newContact = otherContacts[Math.floor(Math.random() * otherContacts.length)] || []
      setContacts(contacts => [newContact, ...contacts]);
    } else {
      setContacts(contacts => [...contacts]);
    }
  }
  
  const popularitySorter = () => {
    let sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(contacts => sortedContacts)
  }
  
  const nameSorter = () => {
    let sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    setContacts(contacts => sortedContacts)
  }
  
  
  
  return (
    <div className='App'>
    <h1>Ironcontacts</h1>
    
    <SearchField setQueryProp={setQuery} />
    <div>
    <button onClick={randomAdder} >Add random </button>
    <button onClick={popularitySorter} >Sort by popularity </button>
    <button onClick={nameSorter} >Sort by name </button>
    </div>
    <table>
    <thead>
    <tr>
    <th></th>
    <th>Name</th>
    <th>Rating</th>
    <th>Oscar</th>
    <th>Emmy</th>
    <th></th>
    </tr>
    </thead>
    <tbody>
    
    <ContactsList contacts={contacts} setContacts={setContacts} query={query}/>
    
    </tbody>
    </table>
    </div>
    );
  }
  
  export default App;
  