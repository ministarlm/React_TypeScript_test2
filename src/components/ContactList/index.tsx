// import { Contact } from "models/contact.model";
// import ContactCard from "./ContactCard";
// import "./index.scss";

// type Props = {
//   className?: string;
//   contacts: Contact[];
// };

// const ContactList = ({ className = "", contacts }: Props) => {
//   const content = contacts.map((contact) => (
//     <li key={contact.id}>
//       <ContactCard contact={contact} />
//     </li>
//   ));

//   return <ul className={`contact-list ${className}`}>{content}</ul>;
// };

// export default ContactList;

import { Contact } from "models/contact.model";
import ContactCard from "./ContactCard";
import "./index.scss";

type Props = {
  className?: string;
  contacts: Contact[];
};

const ContactList = ({ className = "", contacts }: Props) => {
  const content = contacts.map((contact: Contact) => (
    <li key={contact.id}>
      <ContactCard contact={contact} />
    </li>
  ));

  return <ul className={`contact-list ${className}`}>{content}</ul>;
};

export default ContactList;

