import { useState, useEffect } from 'react';  // import useEffect
import List from './components/List';
import './App.css';


function App() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/contacts')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch((error) => {
                console.error('Error:', error);
            });

    }, []);

    return (

        <div className='page'>
            <List tasks={tasks} setTasks={setTasks} />
        </div>
    )
}
export default App;

// // import { useEffect, useState } from 'react';
// // import Contact from './components/Contact';

// // function App() {
// //     const [contacts, setContacts] = useState([]);
// //     const [newName, setNewName] = useState("");
// //     const [showInfo, setShowInfo] = useState(false);

// //     useEffect(() => {
// //         fetch('http://localhost/api/contacts')
// //             .then(response => response.json())
// //             .then(data => setContacts(data))
// //             .catch((error) => {
// //                 console.error('Error:', error);
// //             });

// //     }, [showInfo]);

// //     function addContact() {

// //         fetch('http://localhost/api/contacts', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-type': 'application/json'
// //             },
// //             body: JSON.stringify({ name: newName })
// //         })
// //             .then(response => response.json())
// //             .then(data => {
// //                 setContacts([...contacts, data]); // Add the new contact to the contacts list
// //                 setNewName(""); // Clear the input field
// //                 setShowInfo(showInfo);
// //             })
// //             .catch(error => {
// //                 console.error('Error:', error);
// //             })

// //     }


// //     return (
// //         <div className="list-container">
// //             <h1>Contactor</h1>
// //             <h2>Contacts</h2>
// //             <div className="input-container">
// //                 <input
// //                     type='text'
// //                     placeholder='Enter contact name'
// //                     value={newName}
// //                     onChange={(e) => setNewName(e.target.value)} />
// //                 <br /><br />
// //                 <button className="create-button" type="button" onClick={addContact}> Create contact</button>

// //             </div>
// //             <div className="contact-list">
// //                 {contacts.map((contact, index) => (
// //                     <Contact
// //                         key={index}
// //                         contact={contact}
// //                         showInfo={showInfo}
// //                         setShowInfo={setShowInfo} />
// //                 ))}
// //             </div>
// //         </div>
// //     )

// // }

// // export default App;

