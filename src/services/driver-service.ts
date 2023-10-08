import { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import Driver from '../models/driver';
import axios from './axios';
import { processApiError } from '../utils/process-api-error';
import { Security } from '../utils/security';

class DriverService {
  save = async (driver: Driver) => {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response: AxiosRequestConfig = await axios.post('/driver', { driver });
      if (response.data.length == 0) {
        toast.success('Motorista cadastrado com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  };

  update = async (driver: Driver) => {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response: AxiosRequestConfig = await axios.put('/driver/' + driver.id, { driver });
      if (response.data.length == 0) {
        toast.success('Motorista atualizado com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  };

  delete = async (id: number) => {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response: AxiosRequestConfig = await axios.delete('/driver/' + id);
      if (response.data.length == 0) {
        toast.success('Motorista removido com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  };

  async getOne(id: number) {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await axios.get(`/driver/${id}`);
      const driver: Driver | undefined = response.data;

      return driver;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await axios.get(`/driver`);
      const drivers: Driver[] = [];
      for (const data of response.data) drivers.push(data);

      return drivers;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default DriverService;
