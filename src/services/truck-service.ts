import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from '../services/axios';
import { toast } from 'react-toastify';
import Truck from '../models/truck';
import { processApiError } from '../utils/process-api-error';

class TruckService {
  save = async (truck: Truck) => {
    try {
      const response: AxiosRequestConfig = await axios.post('/truck', { truck });
      if (response.data.length == 0) {
        toast.success('Caminhão cadastrado com sucesso!');
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

  update = async (truck: Truck) => {
    try {
      const response: AxiosRequestConfig = await axios.put('/truck/' + truck.id, { truck });
      if (response.data.length == 0) {
        toast.success('Caminhão atualizado com sucesso!');
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
      const response: AxiosRequestConfig = await axios.delete('/truck/' + id);
      if (response.data.length == 0) {
        toast.success('Caminhão removido com sucesso!');
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
      const response = await axios.get(`/truck/${id}`);
      const truck: Truck | undefined = response.data;

      return truck;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get(`/truck`);
      const trucks: Truck[] = [];
      for (const data of response.data) trucks.push(data);

      return trucks;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default TruckService;
