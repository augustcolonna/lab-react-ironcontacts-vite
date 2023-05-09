import './App.css'
import contactsData from './contacts.json';
import React, { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))
  

  const handleClick = () => {
    const restOfContacts = contactsData.filter(element => !contacts.includes(element))

   const randomContact = Math.random() * restOfContacts.length
  }


  const imgStyle = {
    height: '100px',
  }

  return (
    
    <div className="App">
      <h1> IronContacts</h1>
      <button onClick={handleClick}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar</td>
            <td> Won an Emmy</td>
          </tr>
        </thead>
        <tr>
          <td><img style={imgStyle} src={contacts[0].pictureUrl} alt='' /></td>
          <td>{contacts[0].name}</td>
          <td>{contacts[0].popularity}</td>
          <td>{contacts[0].wonOscar ? '🏆' : ':('}</td>
          <td>{contacts[0].wonEmmy ? '🏆' : ':('}</td>
        </tr>
        <tr>
          <td><img style={imgStyle} src={contacts[1].pictureUrl} alt='' /></td>
          <td>{contacts[1].name}</td>
          <td>{contacts[1].popularity}</td>
          <td>{contacts[1].wonOscar ? '🏆' : ':('}</td>
          <td>{contacts[1].wonEmmy ? '🏆' : ':('}</td>
        </tr>
        <tr>
          <td><img style={imgStyle} src={contacts[2].pictureUrl} alt='' /></td>
          <td>{contacts[2].name}</td>
          <td>{contacts[2].popularity}</td>
          <td>{contacts[2].wonOscar ? '🏆' : ':('}</td>
          <td>{contacts[2].wonEmmy ? '🏆' : ':('}</td>
        </tr>
        <tr>
          <td><img style={imgStyle} src={contacts[3].pictureUrl} alt='' /></td>
          <td>{contacts[3].name}</td>
          <td>{contacts[3].popularity}</td>
          <td>{contacts[3].wonOscar ? '🏆' : ':('}</td>
          <td>{contacts[3].wonEmmy ? '🏆' : ':('}</td>
        </tr>
        <tr>
          <td><img style={imgStyle} src={contacts[4].pictureUrl} alt='' /></td>
          <td>{contacts[4].name}</td>
          <td>{contacts[4].popularity}</td>
          <td>{contacts[4].wonOscar ? '🏆' : ':('}</td>
          <td>{contacts[4].wonEmmy ? '🏆' : ':('}</td>
        </tr>
      </table>
    </div>
  )
}

export default App
