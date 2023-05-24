// import React, { createContext, ReactNode, useState } from "react";
// import { Contact } from "models/contact.model";

// type ContactsContextProps = {
//   contacts: Contact[];
//   setContacts: (contacts: Contact[]) => void;
// };

// export const ContactsContext = createContext<ContactsContextProps>({
//   contacts: [],
//   setContacts: () => {},
// });

// type Props = {
//   children: ReactNode;
//   contacts: Contact[];
//   setContacts: (contacts: Contact[]) => void;
// };

// const ContactsProvider = ({ children, contacts, setContacts }: Props) => {
//   return (
//     <ContactsContext.Provider value={{ contacts, setContacts }}>
//       {children}
//     </ContactsContext.Provider>
//   );
// };

// export default ContactsProvider;

import React, { createContext, useState, ReactNode } from "react";
import { Contact } from "models/contact.model";

type ContactsContextType = {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

export const ContactsContext = createContext<ContactsContextType>({
  contacts: [],
  setContacts: () => {},
});

type ContactsProviderProps = {
  children: ReactNode;
};

const ContactsProvider: React.FC<ContactsProviderProps> = ({ children }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
