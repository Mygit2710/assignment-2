// // import { useState, useEffect } from "react";
// // import Contact from "./Contact";

// // function Phones(props) {
// //     const [contactType, setContactType] = useState("");
// //     const [phoneNumber, setPhoneNumber] = useState("");
// //     const [contactInfo, setContactInfo] = useState([]);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         fetch(`http://localhost/api/contacts/${props.id}/phones`)
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error("Network response was not ok");
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 if (Array.isArray(data)) {
// //                     setContactInfo(data);
// //                 } else {
// //                     throw new Error("Data is not in the expected format");
// //                 }
// //             })
// //             .catch(error => {
// //                 console.error('Error', error);
// //                 setError(error);
// //             });
// //     }, [props.id]);

// //     function onChangeContactType(event) {
// //         setContactType(event.target.value);

// //     }
// //     function onChangePhoneNumber(event) {
// //         setPhoneNumber(event.target.value);
// //     }
// //     const handleSave = () => {
// //         const newContact = { contactType, phoneNumber };
// //         setContactInfo([...contactInfo, newContact]);

// //         fetch(`http://localhost/api/contacts/${props.id}/phones`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(newContact),
// //         })
// //             .then(response => response.json())
// //             .then(data => {
// //                 setContactInfo([...contactInfo, data]);
// //             })
// //             .catch(error => {
// //                 console.error('Error:', error);
// //             });

// //         setContactType("");
// //         setPhoneNumber("");
// //     }
// //     const handleDeletePhone = (phoneId) => {
// //         fetch(`http://localhost/api/contacts/${props.id}/phones/${phoneId}`, {
// //             method: 'DELETE',
// //         })
// //             .then(() => {
// //                 setContactInfo(prevState => prevState.filter(phone => phone.id !== phoneId));
// //             })
// //             .catch(error => {
// //                 console.error('Error:', error);
// //             });
// //     }

// //     return (
// //         <div>
// //             <input type="text" placeholder="Enter contact type" value={contactType} onChange={onChangeContactType}></input>
// //             <input type="text" placeholder="Enter phone number" value={phoneNumber} onChange={onChangePhoneNumber}></input>
// //             <button type="button" onClick={handleSave}> Add </button>
// //             {contactInfo.length > 0 && (
// //                 <div>
// //                     <Contacts contactInfo={contactInfo} onDeleteContact={handleDeletePhone} />
// //                 </div>
// //             )}
// //         </div>
// //     )
// // }
// // export default Phones;

import { useState, useEffect } from "react";
import Contact from "./Contact";
import './Phone.css';

function Phones(props) {
    const [contactType, setContactType] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [contactInfo, setContactInfo] = useState([]);


    useEffect(() => {
        // Fetch all phones and their associated contacts
        fetch(`http://localhost/api/contacts/${props.id}/phones`)
            .then(response => response.json())
            .then(data => {
                setContactInfo(data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, [props.id]);

    function onChangeContactType(event) {
        setContactType(event.target.value);
    }

    function onChangePhoneNumber(event) {
        setPhoneNumber(event.target.value);
    }
    // console.log(props.id)

    const handleSave = () => {
        if (!contactType || !phoneNumber) {
            console.error('Contact type and phone number are required.');
            return;
        }
        // Send a POST request to create the phone
        fetch(`http://localhost/api/contacts/${props.id}/phones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: contactType, number: phoneNumber, contactId: props.id })
        })
            .then(response => response.json())
            .then(data => {
                // Update the contactInfo state with the newly created data
                setContactInfo([...contactInfo, data]);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        setContactType("");
        setPhoneNumber("");
    }


    const handleDeletePhone = (phoneId) => {
        // Send a DELETE request to delete the phone
        fetch(`http://localhost/api/contacts/${props.id}/phones/${phoneId}`, {
            method: 'DELETE',
        })
            .then(() => {
                // Remove the deleted phone from contactInfo state
                setContactInfo(contactInfo.filter(phone => phone.id !== phoneId));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="phones-container">
            <input className="contact-type-input" type="text" placeholder="Enter contact type" value={contactType} onChange={onChangeContactType}></input>
            <input className="phone-number-input" type="text" placeholder="Enter phone number" value={phoneNumber} onChange={onChangePhoneNumber}></input>
            <button className="add-button" type="button" onClick={handleSave}> Add </button>

            {contactInfo && contactInfo.length > 0 && (
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>Contact type</th>
                            <th>Phone number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactInfo.length > 0 && contactInfo.map((phone, index) => (
                            <Contact
                                key={index}
                                contactType={phone.type}
                                phoneNumber={phone.number}
                                onDeleteContact={() => handleDeletePhone(phone.id)}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Phones;

// // import { useState, useEffect } from "react";

// // function Phone(props) {
// //     const { contact, showInfo, setShowInfo } = props;
// //     const [contactType, setContactType] = useState("");
// //     const [phoneNumber, setPhoneNumber] = useState("");
// //     const [phones, setPhones] = useState([]);


// //     useEffect(() => {
// //         fetch(`http://localhost/api/contacts/${props.id}/phones`)
// //             .then(response => response.json())
// //             .then(phones => {
// //                 setPhones(phones);
// //             })
// //             .catch(error => {
// //                 console.error('Error', error);
// //             });
// //     }, [showInfo]);

// //     function addPhone() {
// //         fetch(`http://localhost/api/contacts/${props.id}/phones`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ contactType, phoneNumber, contactId:props.id })
// //         })
// //             .then(response => response.json())
// //             .then(() => {
// //                 setShowInfo(!showInfo);
// //                 setContactType("");
// //                 setPhoneNumber("");
// //             })
// //             .catch(error => {
// //                 console.error('Error:', error);
// //             });
// //     }

// //     function handleDelele(phoneId) {
// //         fetch(`http://localhost/api/contacts/${props.id}/phones/${phoneId}`, {
// //             method: 'DELETE',
// //         })
// //             .then(() => {
// //                 setShowInfo(!showInfo)
// //             })
// //             .catch(error => {
// //                 console.error('Error:', error);
// //             })
// //     }


// //     return (
// //         <div className="phones-container">
// //             <input className="contact-type-input"
// //                 type="text"
// //                 placeholder="Enter contact type"
// //                 value={contactType}
// //                 onChange={(e) => setContactType(e.target.value)} />
// //             <input className="phone-number-input"
// //                 type="text"
// //                 placeholder="Enter phone number"
// //                 value={phoneNumber}
// //                 onChange={(e) => setPhoneNumber(e.target.value)} />
// //             <button className="add-button"
// //                 type="button"
// //                 onClick={addPhone(props.id)}> Add </button>
// //             <div>
// //                 {phones.map((props, index) => (
// //                     <div key={index}>
// //                         <table className="contact-table">
// //                             <thead>
// //                                 <tr>
// //                                     <th>Contact type</th>
// //                                     <th>Phone number</th>
// //                                     <th></th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 <tr>
// //                                     <td>{props.contactType}</td>
// //                                     <td>{props.phoneNumber}</td>
// //                                     <td>
// //                                         <button className="delete-button"
// //                                             type="button"
// //                                             onClick={handleDelele(props.id)}>Delete</button>
// //                                     </td>
// //                                 </tr>
// //                             </tbody>

// //                         </table>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>

// //     )
// // };
// // export default Phone;

