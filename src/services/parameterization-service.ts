import { toast } from 'react-toastify';
import Parameterization from '../models/parameterization';
import axios from './axios';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { Security } from '../utils/security';

class ParameterizationService {
  async save(parameterization: Parameterization) {
    try {
      const response: AxiosRequestConfig = await axios.post('/parameterization', {
        parameterization,
      });
      if (response.data.length == 0) {
        toast.success('Parametrização cadastrada com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
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
      return false;
    }
  }

  async update(parameterization: Parameterization) {
    try {
      const response: AxiosRequestConfig = await axios.put(`/parameterization/`, {
        parameterization,
      });
      if (response.data.length == 0) {
        toast.success('Parametrização atualizada com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
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
      return false;
    }
  }

  async get() {
    try {
      const response = await axios.get(`/parameterization`);
      const parameterization: Parameterization | undefined = response.data;

      return parameterization;
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
      return undefined;
    }
  }
}

export default ParameterizationService;
