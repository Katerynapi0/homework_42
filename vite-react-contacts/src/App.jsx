import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => {
      if(!responce.ok){
        throw new Error('Не вдалося отримати контакти');
      }
      return responce.json();
    })
    .then(data => {
      setContacts(data);
    })
    .catch(error => {
      console.error('Помилка отримання контактів:', error);
    });
  }, []);

  const handleDeleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleSaveContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, {id: prevContacts.length + 1 , ...newContact}]);
    setShowAddForm(false);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
  };

  return(
    <div>
      <h1>Контакти</h1>
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
      {!showAddForm && <button onClick={() => setShowAddForm(true)}>Додати контакт</button>}
      {showAddForm && <AddContactForm onSaveContact={handleSaveContact} onCancel={handleCancelAdd} />}
    </div>
  )
};

export default App;