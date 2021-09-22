// src/App.js
import { useState } from 'react';
import "./App.css";
import allContacts from './contacts.json';
const fiveContacts = [...allContacts].slice(0, 5)

function App() {
  
  const [contacts, setContacts] = useState(fiveContacts);
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
  
  const contactDeleter = id => {
    const filteredContacts =  [...contacts].filter(contact => contact.id !== id);
    setContacts(contacts => filteredContacts)
  }
  
  return (
    <div className='App'>
    <h1>Ironcontacts</h1>
    <div>
      <button onClick={randomAdder} >Add random </button>
      <button onClick={popularitySorter} >Sort by popularity </button>
      <button onClick={nameSorter} >Sort by name </button>
    </div>
    <table>
    <thead>
    <th></th>
    <th>Name</th>
    <th>Rating</th>
    <th>Oscar</th>
    <th>Emmy</th>
    <th></th>
    </thead>
    <tbody>
    
    

    {contacts.map(contact => {
      return (
        <tr key={contact.id} className="contactCard">
        <td><img
        style={{height: '40px'}}
        src={contact.pictureUrl}
        className="profile"
        alt="profile pic"
        /></td>
        <td><h3>{contact.name}</h3></td>
       <td> <h3>{Math.floor(contact.popularity * 10) / 10}</h3> </td>
       <td>{contact.wonOscar ? <h3>🏆</h3> : <h3> </h3>}</td>
       <td>{contact.wonEmmy ? <h3>🏆</h3> : <h3> </h3>}</td>
       <td><button onClick={() => contactDeleter(contact.id)} >Delete </button></td>
        </tr>
        );
      })}
      </tbody>
      </table>
      </div>
      );
    }
    
    export default App;
    