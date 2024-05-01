import React, { useState } from 'react';

const AddContactForm = ({ onSaveContact, onCancel }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (element) => {
        element.preventDefault();
        onSaveContact({ name, surname, phone});
        setName('');
        setSurname('');
        setPhone('');
    };

    return(
        <div>
            <h2>Додати контакт</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ім'я:</label>
                    <input type="text" value={name} onChange={(element) => setName(element.target.value)}/>
                </div>
                <div>
                    <label>Призвіще:</label>
                    <input type="text" value={surname} onChange={(element) => setSurname(element.target.value)}/>
                </div>
                <div>
                    <label>Телефон:</label>
                    <input type="tel" value={phone} onChange={(element) => setPhone(element.target.value)}/>
                </div>
                <div>
                    <button type="submit">Зберегти</button>
                    <button type="button" onClick={onCancel}>Скасувати</button>
                </div>
            </form>
        </div>
    );
};

export default AddContactForm;