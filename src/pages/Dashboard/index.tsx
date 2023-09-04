import { useContext, useEffect } from "react";
import { Header } from "../../components/HeaderDash";
import { SectionContact, ContactList, ContactDescript } from "./style";
import { ListContact } from "../../components/ContactList";
import { FormContact } from "../../components/FormContac";
import { UpDateContact } from "../../components/UpdateTec";
import { LoginContext } from "../../providers/LoginProvider";
import { api } from "../../service/Api";

export interface TContact {
  id: string;
  name: string;
  email: string;
  phone: number;
  createdAt: Date;
}

export const Dashboard = () => {
  const {
    editionContact,
    contacts,
    loading,
    openForm,
    setOpenForm,
    setContacts,
    setLoading,
  } = useContext(LoginContext);

  useEffect(() => {
    (async () => {
      const response = await api.get("/contact");
      setContacts(response.data);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Header />
      <SectionContact>
        {openForm === false ? <FormContact /> : true}
        {editionContact ? <UpDateContact /> : true}
        <ContactDescript>
          <h2>Contatos</h2>
          <button onClick={() => setOpenForm(false)}>Mais</button>
        </ContactDescript>
        {loading ? (
          <p>Adicione Contatos</p>
        ) : (
          <ContactList>
            {contacts.map((contact) => (
              <ListContact
                key={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                contact={contact}
              />
            ))}
          </ContactList>
        )}
      </SectionContact>
    </>
  );
};
