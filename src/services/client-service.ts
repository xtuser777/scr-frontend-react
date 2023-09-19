import { AxiosRequestConfig, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { Security } from '../utils/security';
import axios from './axios';
import Client from '../models/client';

class ClientService {
  async save(client: Client) {
    try {
      const response: AxiosRequestConfig = await axios.post('/client', { client });
      if (response.data.length == 0) {
        toast.success('Cliente cadastrado com sucesso!');
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

  async update(client: Client) {
    try {
      const response: AxiosRequestConfig = await axios.put(`/client/${client.id}`, { client });
      if (response.data.length == 0) {
        toast.success('Cliente atualizado com sucesso!');
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

  async delete(id: number) {
    try {
      const response: AxiosRequestConfig = await axios.delete(`/client/${id}`);
      if (response.data.length == 0) {
        toast.success('Cliente excluído com sucesso!');
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

  async getOne(id: number) {
    try {
      const response = await axios.get(`/client/${id}`);
      const client: Client | undefined = response.data;

      return client;
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
      const response = await axios.get(`/client`);
      const clients: Client[] = [];
      for (const data of response.data) clients.push(data);

      return clients;
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

export default ClientService;
