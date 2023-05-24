// import { Contact } from "models/contact.model";
// import "./index.scss";
// import ImageFrame from "components/ImageFrame";
// import {
//   faEnvelope,
//   faHeart,
//   faPencil,
//   faPhone,
//   faTrash,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useContext, useState } from "react";
// import ContactsHttp from "http/contacts.http";
// import { ContactsContext } from "context/contacts.context";

// const MAX_TEXT_LENGTH = 25;

// const ContactCard = ({ contact: _contact }: Props) => {
//   const { contacts, setContacts } = useContext(ContactsContext);
//   const [contact, setContact] = useState(_contact);
//   const {
//     id,
//     fullName,
//     profilePicture,
//     phoneNumber,
//     emailAddress,
//     isFavorite,
//   } = contact;
//   const contactsHttp = new ContactsHttp();

//   const deleteHandler = async () => {
//     console.log("hohohoho");
//   };

//   const favoriteHandler = async () => {
//     const newContact = await contactsHttp.updateContact(id, {
//       isFavorite: !isFavorite,
//     });
//     const newContacts = contacts.map((contact) =>
//       contact.id === id ? newContact : contact
//     );

//     setContact(newContact);
//     setContacts(newContacts);
//   };

//   const getEmailText = () => {
//     if (emailAddress.length > MAX_TEXT_LENGTH) {
//       return emailAddress.slice(0, MAX_TEXT_LENGTH) + "...";
//     } else {
//       return emailAddress;
//     }
//   };

//   const getPhoneText = () => {
//     if (phoneNumber.length > MAX_TEXT_LENGTH) {
//       return phoneNumber.slice(0, MAX_TEXT_LENGTH) + "...";
//     } else {
//       return phoneNumber;
//     }
//   };

//   return (
//     <article className="contact-card">
//       <FontAwesomeIcon
//         className="contact-card__icon contact-card__icon--left"
//         onClick={deleteHandler}
//         icon={faTrash}
//         size="lg"
//         color="gray"
//       />
//       <div className="contact-card__icon contact-card__icon--right">
//         <FontAwesomeIcon
//           className="m-r-5"
//           onClick={favoriteHandler}
//           icon={faHeart}
//           size="lg"
//           color={isFavorite ? "darkred" : "gray"}
//         />
//         <FontAwesomeIcon icon={faPencil} size="lg" color="gray" />
//       </div>

//       <ImageFrame imageUrl={profilePicture}></ImageFrame>
//       <h3>{fullName}</h3>
//       <div className="contact-card__info">
//         <div className="flex">
//           <FontAwesomeIcon icon={faEnvelope} size="lg" color="gray" />
//           <span>{getEmailText()}</span>
//         </div>
//         <div className="flex">
//           <FontAwesomeIcon icon={faPhone} size="lg" color="gray" />
//           <span>{getPhoneText()}</span>
//         </div>
//       </div>
//     </article>
//   );
// };

// type Props = {
//   contact: Contact;
// };

// export default ContactCard;

import { Contact } from "models/contact.model";
import "./index.scss";
import ImageFrame from "components/ImageFrame";
import {
  faEnvelope,
  faHeart,
  faPencil,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import ContactsHttp from "http/contacts.http";
import { ContactsContext } from "context/contacts.context";

const MAX_TEXT_LENGTH = 25;

type Props = {
  contact: Contact;
};

const ContactCard = ({ contact }: Props) => {
  const { contacts, setContacts } = useContext(ContactsContext);
  const [currentContact, setCurrentContact] = useState(contact);
  const {
    id,
    fullName,
    profilePicture,
    phoneNumber,
    emailAddress,
    isFavorite,
  } = currentContact;
  const contactsHttp = new ContactsHttp();

  const deleteHandler = async () => {
    console.log("hohohoho");
  };

  const favoriteHandler = async () => {
    const newContact = await contactsHttp.updateContact(id, {
      isFavorite: !isFavorite,
    });
    const newContacts = contacts.map((contact) =>
      contact.id === id ? newContact : contact
    );

    setCurrentContact(newContact);
    setContacts(newContacts);
  };

  const getEmailText = () => {
    if (emailAddress.length > MAX_TEXT_LENGTH) {
      return emailAddress.slice(0, MAX_TEXT_LENGTH) + "...";
    } else {
      return emailAddress;
    }
  };

  const getPhoneText = () => {
    if (phoneNumber.length > MAX_TEXT_LENGTH) {
      return phoneNumber.slice(0, MAX_TEXT_LENGTH) + "...";
    } else {
      return phoneNumber;
    }
  };

  return (
    <article className="contact-card">
      <FontAwesomeIcon
        className="contact-card__icon contact-card__icon--left"
        onClick={deleteHandler}
        icon={faTrash}
        size="lg"
        color="gray"
      />
      <div className="contact-card__icon contact-card__icon--right">
        <FontAwesomeIcon
          className="m-r-5"
          onClick={favoriteHandler}
          icon={faHeart}
          size="lg"
          color={isFavorite ? "darkred" : "gray"}
        />
        <FontAwesomeIcon icon={faPencil} size="lg" color="gray" />
      </div>

      <ImageFrame imageUrl={profilePicture}></ImageFrame>
      <h3>{fullName}</h3>
      <div className="contact-card__info">
        <div className="flex">
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="gray" />
          <span>{getEmailText()}</span>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faPhone} size="lg" color="gray" />
          <span>{getPhoneText()}</span>
        </div>
      </div>
    </article>
  );
};

export default ContactCard;
