import { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import Driver from '../models/driver';
import axios from './axios';
import { Security } from '../utils/security';

class DriverService {
  save = async (driver: Driver) => {
    try {
      const response: AxiosRequestConfig = await axios.post('/driver', { driver });
      if (response.data.length == 0) {
        toast.success('Motorista cadastrado com sucesso!');
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
  };

  update = async (driver: Driver) => {
    try {
      const response: AxiosRequestConfig = await axios.put('/driver/' + driver.id, { driver });
      if (response.data.length == 0) {
        toast.success('Motorista atualizado com sucesso!');
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
  };

  delete = async (id: number) => {
    try {
      const response: AxiosRequestConfig = await axios.delete('/driver/' + id);
      if (response.data.length == 0) {
        toast.success('Motorista removido com sucesso!');
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
  };

  async getOne(id: number) {
    try {
      const response = await axios.get(`/driver/${id}`);
      const driver: Driver | undefined = response.data;

      return driver;
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

  async get() {
    try {
      const response = await axios.get(`/driver`);
      const drivers: Driver[] = [];
      for (const data of response.data) drivers.push(data);

      return drivers;
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

export default DriverService;
