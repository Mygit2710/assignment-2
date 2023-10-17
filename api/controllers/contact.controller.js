// const db = require("../models");
// const Contacts = db.contacts;
// //const Phones = db.phones;
// const Op = db.Sequelize.Op;

// // Create contact
// exports.create = (req, res) => {
//     const contact = {
//         name: req.body.name
//     };
//     Contacts.create(contact)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred"
//             });
//         });
// };

// // Get all contacts
// exports.findAll = (req, res) => {
//     Contacts.findAll()
//         .then((contacts) => {
//             res.send(contacts);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred"
//             });
//         });
// };

// // Get one contact by id
// exports.findOne = (req, res) => {
//     //   const id = req.params.id;
//     //   Contacts.findOne(res.body, {where: {id: id}})
//     //   .then ((task) => {
//     //     if (task){
//     //         res.send(task);
//     //     }
//     //     else {
//     //         res.send({
//     //             message: "Task not found"
//     //         })
//     //     }
//     //   })
//     //   .catch (err => {
//     //     res.status(500).send({
//     //         message: "Error retrieving task"
//     //     })
//     //   })
// };

// // Update one contact by id
// exports.update = (req, res) => {
//     // Contacts.update(req.body, {
//     //     where: {id: id}
//     // })
//     // .then(num => {
//     //     if (num == 1){
//     //         res.send({
//     //             message: "Task was updated successfully."
//     //         });
//     //     }
//     //     else {
//     //         res.send ({
//     //             message : "Cannot update Task"
//     //         });
//     //     }
//     // })
//     // .catch (err => {
//     //     res.status(500).send({
//     //         message: "Error updating task with id=" + id
//     //     });
//     // });
// };

// // Delete one contact by id
// exports.delete = (req, res) => {
//     const id = req.params.contactId;

//     Contacts.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Task was deleted successfully."
//                 });
//             }
//             else {
//                 res.send({
//                     message: "Cannot delete Task"
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete task with id=" + id
//             });
//         });
// };

const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;


// Create a new contact
exports.create = (req, res) => {
  const { name } = req.body;

  // Validate input
  if (!name) {
    return res.status(400).send({ message: "Name is required" });
  }

  // Create a new contact
  Contacts.create({ name })
    .then((contact) => {
      res.status(201).send(contact);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the contact.",
      });
    });
};

// Get all contacts
exports.findAll = (req, res) => {
  Contacts.findAll()
    .then((contacts) => {
      res.send(contacts);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving contacts.",
      });
    });
};

// Get a single contact by ID
exports.findOne = (req, res) => {
  // const contactId = req.params.contactId;

  // Contacts.findByPk(contactId)
  //   .then((contact) => {
  //     if (!contact) {
  //       return res.status(404).send({ message: "Contact not found" });
  //     }
  //     res.send(contact);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while retrieving the contact.",
  //     });
  //   });
};

// Update a contact by ID
exports.update = (req, res) => {
  // const contactId = req.params.contactId;
  // const { name } = req.body;

  // Contacts.findByPk(contactId)
  //   .then((contact) => {
  //     if (!contact) {
  //       return res.status(404).send({ message: "Contact not found" });
  //     }

  //     contact.name = name;
  //     contact
  //       .save()
  //       .then(() => {
  //         res.send(contact);
  //       })
  //       .catch((err) => {
  //         res.status(500).send({
  //           message: err.message || "Some error occurred while updating the contact.",
  //         });
  //       });
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while retrieving the contact.",
  //     });
  //   });
};

// Delete a contact by ID
exports.delete = (req, res) => {
  const contactId = req.params.contactId;

  Contacts.destroy({
    where: { id: contactId },
  })
    .then((num) => {
      if (num === 1) {
        res.send({ message: "Contact was deleted successfully." });
      } else {
        res.status(404).send({ message: "Contact not found" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the contact.",
      });
    });
};