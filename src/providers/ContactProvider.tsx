/* import { ReactNode, createContext, useState } from "react";
import { api } from "../service/Api";
import { TContact } from "../pages/Dashboard";

interface ProviderProps {
  children: ReactNode;
}

export interface ICreateContact {
  name: string;
  email: string;
  phone: number;
}

interface ContactContextValues {
  CreateContact: (data: ICreateContact) => Promise<void>;
  DeleteContact: (id: string) => Promise<void>;
  UpdateContact: (data: Partial<ICreateContact>) => Promise<void>;
  editionContact: TContact | null;
  setEditionContact: React.Dispatch<React.SetStateAction<TContact | null>>;
  contacts: TContact[];
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactContext = createContext({} as ContactContextValues);

export const ContactProvider = ({ children }: ProviderProps) => {
  const [openForm, setOpenForm] = useState(true);
  const [contacts, setContacts] = useState([] as TContact[]);
  const [editionContact, setEditionContact] = useState<TContact | null>(null);

  const CreateContact = async (data: ICreateContact) => {
    try {
      const response = await api.post("/contact", data);

      setContacts([...contacts, response.data]);
      setOpenForm(true);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteContact = async (id: string) => {
    try {
      await api.delete(`/contact/${id}`);

      const newContact = contacts.filter((contact) => contact.id !== id);
      setContacts(newContact);
      setEditionContact(null);
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (data: Partial<ICreateContact>) => {
    const id = editionContact!.id;
    try {
      await api.put(`/users/techs/${id}`, data);
      const newContact = contacts.map((contact) => {
        if (id === contact.id) {
          return { ...contact, ...data };
        } else {
          return contact;
        }
      });
      setContacts(newContact);
      setEditionContact(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        CreateContact,
        DeleteContact,
        UpdateContact,
        contacts,
        editionContact,
        setEditionContact,
        openForm,
        setOpenForm,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}; */
