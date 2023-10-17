const db = require("../models");
const Phones = db.phones;
//const Contacts = db.contacts;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
    const phone = {
        type: req.body.contactType,
        number: req.body.phoneNumber,
        contactId: req.body.contactId
    }
    Phones.create(phone)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};




// Get all phones
// exports.findAll = (req, res) => {
//     Phones.findAll()
//         .then((data) => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred"
//             });
//         });

// };

exports.findAll = (req, res) => {
    const contactId = req.params.contactId;
    Phones.findAll({
        where: { contactId: contactId }
    })
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one phone by id
exports.findOne = (req, res) => {

};

// Update one phone by id
exports.update = (req, res) => {

};

// Delete one phone by id
// exports.delete = (req, res) => {
//     const phoneId = req.params.phoneId;
//     Phones.destroy({
//         where: { id: phoneId }
//     })
//         .then(num => {
//             if (num === 1) {
//                 // Phone record deleted successfully
//                 // Now delete the associated contact type
//                 Contacts.destroy({
//                     where: { phoneId: phoneId }
//                 })
//                     .then(() => {
//                         res.send({ message: "Phone and contact type were deleted successfully." });
//                     })
//                     .catch(err => {
//                         res.status(500).send({
//                             message: "Error deleting associated contact type."
//                         });
//                     });
//             } else {
//                 res.send({ message: "Phone record not found." });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error deleting phone record."
//             });
//         });

// };

exports.delete = (req, res) => {
    const phoneId = req.params.phoneId;
    const contactId = req.params.contactId;
    Phones.destroy({
        where: { id: phoneId, contactId: contactId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Task was deleted successfully."
                });
            }
            else {
                res.send({
                    message: "Cannot delete Task"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete task with id=" + phoneId
            });
        });
};