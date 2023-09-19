import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from './axios';
import { toast } from 'react-toastify';
import { Security } from '../utils/security';
import Level from '../models/level';

class LevelService {
  async get() {
    try {
      const result: AxiosRequestConfig = await axios.get('/level');
      const levels: Level[] = result.data;
      return levels;
    } catch (e) {
      const error = e as AxiosError;
      switch (error.response?.status) {
        case 404:
          toast.error('Erro de requisição: Rota não encontrada.');
          break;
        case 400:
          toast.error(`Erro na requisição: ${error.response.data}`);
          break;
        case 401:
          toast.error('Token de autenticação inválido. Faça login novamente.');
          Security.clear();
          window.document.location.reload();
          break;
        case 500:
          toast.error('Erro de servidor.');
          break;
        default:
          toast.error(`Erro desconhecido: ${error}`);
          break;
      }
      return [];
    }
  }
}

export default LevelService;
