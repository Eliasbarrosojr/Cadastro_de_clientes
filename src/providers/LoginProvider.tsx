import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TLogin } from "../pages/Login/validator";
import { api } from "../service/Api";

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginResponse {
  token: string;
}

interface LoginContextValues {
  loginUser: (data: TLogin) => Promise<void>;
  loading: boolean;
}

export const LoginContext = createContext({} as LoginContextValues);

export const LoginProvider = ({ children }: AuthProviderProps) => {
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

  return (
    <LoginContext.Provider value={{ loginUser, loading }}>
      {children}
    </LoginContext.Provider>
  );
};
