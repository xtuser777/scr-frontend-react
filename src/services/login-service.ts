import { AxiosError, AxiosRequestConfig, isAxiosError } from 'axios';
import axios from './axios';
import { Security, UserToken } from '../utils/security';
import { toast } from 'react-toastify';

class LoginService {
  async login(user: string, password: string) {
    try {
      const response: AxiosRequestConfig = await axios.post('/token', { login: user, password });
      const userToken: UserToken = response.data;
      Security.setUser(userToken);
      Security.setToken(userToken.token);
      axios.defaults.headers.Authorization = `Bearer ${userToken.token}`;
      return true;
    } catch (e) {
      if (isAxiosError(e)) {
        switch ((e as AxiosError).response?.status) {
          case 404:
            toast.error(`Erro de requisição: rota não encontrada.`);
            break;
          case 400:
            toast.error(`Erro de requisição: ${((e as AxiosError).response?.data as any).errors}`);
            break;
          case 500:
            toast.error(`Erro de servidor: ${(e as AxiosError).message}`);
            break;
        }
      }
      return false;
    }
  }

  logout() {
    Security.clear();
  }
}

export default LoginService;
