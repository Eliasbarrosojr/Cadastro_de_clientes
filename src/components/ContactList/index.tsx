import { useContext } from "react";
import { ItemList } from "./style";

import { TContact } from "../../pages/Dashboard";
import { LoginContext } from "../../providers/LoginProvider";

interface IList {
  name: string;
  email: string;
  phone: number;
  contact: TContact;
}

export const ListContact = ({ name, email, phone, contact }: IList) => {
  const { setEditionContact } = useContext(LoginContext);
  return (
    <ItemList>
      <h3>{name}</h3>
      <span>{email}</span>
      <span>{phone}</span>
      <button onClick={() => setEditionContact(contact)}>editar</button>
    </ItemList>
  );
};
