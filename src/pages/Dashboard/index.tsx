import { useEffect, useState } from "react";
import { api } from "../../service/Api";

export interface TContact {
  id: string;
  name: string;
  email: string;
  phone: number;
  createdAt: Date;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<TContact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<TContact[]>("/contact");
      setContacts(response.data);
    })();
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </>
  );
};
