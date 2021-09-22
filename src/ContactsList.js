import React from 'react'

function ContactsList(props) {
    let contactsList = [...props.contacts]
    
    const contactDeleter = id => {
        const filteredContacts =  [...contactsList].filter(contact => contact.id !== id);
        props.setContacts(filteredContacts)
      }

    const list = contactsList
    .filter(contact => contact.name.toLowerCase().includes(props.query.toLowerCase()))
    .map(contact => {
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
        })
        return (
            <>{list}</>
        )
    }
    
    export default ContactsList;