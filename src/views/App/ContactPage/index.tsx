import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactList from "components/ContactList";
import InputField from "components/InputField";
import ContactsProvider, { ContactsContext } from "context/contacts.context";
import { useEffect, useState } from "react";
import ContactsHttp from "http/contacts.http";
import { Contact } from "models/contact.model";

const ContactPage = ({ isFavorites }: Props) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const contactsHttp = new ContactsHttp();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    filterContacts(term);
  };

  const fetchContacts = async () => {
    const fetchedContacts = await contactsHttp.getContacts();
    setContacts(fetchedContacts);
    filterContacts("");
  };

  const filterContacts = (term: string) => {
    const filtered = term.trim().toLowerCase();
    const filteredResults = isFavorites
      ? contacts.filter(
          (contact) =>
            contact.fullName.toLowerCase().includes(filtered) &&
            contact.isFavorite
        )
      : contacts.filter((contact) =>
          contact.fullName.toLowerCase().includes(filtered)
        );
    setFilteredContacts(filteredResults);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactsProvider>
      <ContactsContext.Provider
        value={{ contacts: filteredContacts, setContacts }}
      >
        <InputField className={isFavorites ? "hidden" : ""} icon={faSearch}>
          <input onChange={inputHandler} type="text" placeholder="Search..." />
        </InputField>
        <ContactList className="w-100" contacts={filteredContacts} />{" "}
        {/* Pass filteredContacts here */}
      </ContactsContext.Provider>
    </ContactsProvider>
  );
};

type Props = {
  isFavorites?: boolean;
};

export default ContactPage;
