import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin, register as apiRegister } from '../services/api';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    const user = await apiLogin(email, password);
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  };

  const register = async (username, email, password) => {
    // Similar to login implementation
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return { user, login, register, logout };
}