

// // import React, { useState } from "react";
// // import Phone from './Phone';

// // function Contact(props) {
// //     const { contact, showInfo, setShowInfo } = props;
// //     const [displayPhone, setDisplayPhone] = useState(false);

// //     function deleteContact(id) {
// //         fetch(`http://localhost/api/contacts/${id}`, {
// //             method: 'DELETE'
// //         })
// //             .then(() => {
// //                 setShowInfo((showInfo) => !showInfo);
// //             })
// //             .catch((error) => {
// //                 console.error('Error:', error);
// //             });
// //     }



// //     return (
// //         <div className="contact-info" onClick={() => setDisplayPhone(!displayPhone)}>
// //             {contact.contacType}
// //             <button className="delete-button" onClick={() => deleteContact(contact.id)}>Delete</button>
// //             {displayPhone && (
// //                 <Phone
// //                     contact={contact}
// //                     showInfo={showInfo}
// //                     setShowInfo={setShowInfo} />
// //             )}
// //         </div>
// //     )


// // }
// // export default Contact;

// // import React, { useState } from "react";
// // import Phone from './Phone';

// // function Contact(props) {
// //     const { contact, showInfo, setShowInfo } = props;
// //     const [displayPhone, setDisplayPhone] = useState(false);

// //     function deleteContact(id) {
// //         fetch(`http://localhost/api/contacts/${id}`, {
// //             method: 'DELETE'
// //         })
// //             .then(() => {
// //                 setShowInfo((showInfo) => !showInfo);
// //             })
// //             .catch((error) => {
// //                 console.error('Error:', error);
// //             });
// //     }

// //     return (
// //         <div className="contact-info" onClick={() => setDisplayPhone(!displayPhone)}>
// //             {contact.name}
// //             <button className="delete-button" onClick={() => deleteContact(contact.id)}>Delete</button>
// //             {displayPhone && (
// //                 <Phone
// //                     contact={contact}
// //                     showInfo={showInfo}
// //                     setShowInfo={setShowInfo} />
// //             )}
// //         </div>
// //     )
// // }

// // export default Contact;

import React from "react";
import './Contact.css';

function Contact(props) {
    const handleDeleteContact = () => {
        props.onDeleteContact();
    }

    return (
        <tr>
            <td>{props.contactType}</td>
            <td>{props.phoneNumber}</td>
            <td>
                <button className="delete-button" type="button" onClick={handleDeleteContact}>Delete</button>
            </td>
        </tr>
    );
}



export default Contact;

