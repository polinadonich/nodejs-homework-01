const contactsOperations = require("./contacts.js");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);

      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);

      break;

    case "add":
      const addContacts = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(addContacts);
      break;

    case "remove":
      const remove = await contactsOperations.removeContact(id);
      console.log(remove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
