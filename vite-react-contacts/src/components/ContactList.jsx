import React from 'react';

const ContactList = ({contacts, onDeleteContact}) => {
    return(
        <div>
            <h2 className='h2Style'>Список контактів</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ім'я</th>
                        <th>Призвіще</th>
                        <th>Телефон</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.surname}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ContactList;