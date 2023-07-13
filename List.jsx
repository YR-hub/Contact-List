import React, { useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [newContactName, setNewContactName] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleInputChange = (event) => {
    setNewContactName(event.target.value);
  };

  const handleCreateContact = () => {
    if (newContactName.trim() !== '') {
      setContacts([...contacts, { name: newContactName, status: 'Desconectado' }]);
      setNewContactName('');
    }
  };

  const handleDeleteContact = (contact) => {
    setContacts(contacts.filter((c) => c !== contact));
  };

  const handleToggleStatus = (contact) => {
    const updatedContacts = contacts.map((c) => {
      if (c === contact) {
        return {
          ...c,
          status: c.status === 'Conectado' ? 'Desconectado' : 'Conectado',
        };
      }
      return c;
    });
    setContacts(updatedContacts);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.status}
            <button onClick={() => handleDeleteContact(contact)}>Eliminar</button>
            <button onClick={() => handleToggleStatus(contact)}>Cambiar Estado</button>
            <button onClick={() => handleSelectContact(contact)}>Mostrar</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newContactName} onChange={handleInputChange} />
        <button onClick={handleCreateContact}>Crear Contacto</button>
      </div>
      {selectedContact && (
        <div>
          <h2>Contacto Seleccionado</h2>
          <p>Nombre: {selectedContact.name}</p>
          <p>Estado: {selectedContact.status}</p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
