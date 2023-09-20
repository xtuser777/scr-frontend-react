import { AxiosRequestConfig, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import axios from './axios';
import Client from '../models/client';
import { processApiError } from '../utils/process-api-error';

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
      processApiError(e as AxiosError);
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
      processApiError(e as AxiosError);
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
      processApiError(e as AxiosError);
      return false;
    }
  }

  async getOne(id: number) {
    try {
      const response = await axios.get(`/client/${id}`);
      const client: Client | undefined = response.data;

      return client;
    } catch (e) {
      processApiError(e as AxiosError);
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
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default ClientService;
