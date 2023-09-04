import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TLogin } from "../pages/Login/validator";
import { api } from "../service/Api";
import { TContact } from "../pages/Dashboard";
import { TRegister } from "../pages/Register copy/validator";
import { TCreateContactSchema } from "../components/FormContac/validator";
import { TUpadateContactSchema } from "../components/UpdateTec/validator";

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginResponse {
  token: string;
}

export interface UserRequest {
  name: string;
  email: string;
  password: string;
  phone: number;
}

export interface ICreateContact {
  name: string;
  email: string;
  phone: number;
}

interface LoginContextValues {
  loginUser: (data: TLogin) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  Logout: () => void;
  createUser: (data: TRegister) => Promise<void>;
  CreateContact: (data: TCreateContactSchema) => Promise<void>;
  DeleteContact: (id: string) => Promise<void>;
  UpdateContact: (data: TUpadateContactSchema) => Promise<void>;
  editionContact: TContact | null;
  setEditionContact: React.Dispatch<React.SetStateAction<TContact | null>>;
  setContacts: React.Dispatch<React.SetStateAction<TContact[]>>;
  contacts: TContact[];
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginContext = createContext({} as LoginContextValues);

export const LoginProvider = ({ children }: AuthProviderProps) => {
  const [openForm, setOpenForm] = useState(true);
  const [contacts, setContacts] = useState([] as TContact[]);
  const [editionContact, setEditionContact] = useState<TContact | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      navigate("/");
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginUser = async (data: TLogin) => {
    try {
      const response = await api.post<LoginResponse>("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("token", token);
      setLoading(false);

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (data: TRegister) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      await api.post("/users", data);
      navigate("/");
    } catch (errors) {
      console.log(errors);
    }
  };

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const CreateContact = async (data: TCreateContactSchema) => {
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

  const UpdateContact = async (data: TUpadateContactSchema) => {
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
      setContacts([newContact]);
      setEditionContact(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        createUser,
        loginUser,
        Logout,
        loading,
        setLoading,
        openForm,
        setOpenForm,
        contacts,
        setContacts,
        editionContact,
        setEditionContact,
        CreateContact,
        DeleteContact,
        UpdateContact,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
