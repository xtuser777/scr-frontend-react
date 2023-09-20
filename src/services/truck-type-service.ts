import { toast } from 'react-toastify';
import axios from '../services/axios';
import { AxiosError, AxiosRequestConfig } from 'axios';
import TruckType from '../models/truck-type';
import { processApiError } from '../utils/process-api-error';

class TruckTypeService {
  save = async (truckType: TruckType) => {
    try {
      const response: AxiosRequestConfig = await axios.post('/type', { truckType });
      if (response.data.length == 0) {
        toast.success('Tipo de caminhão cadastrado com sucesso!');
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

  update = async (truckType: TruckType) => {
    try {
      const response: AxiosRequestConfig = await axios.put('/type/' + truckType.id, { truckType });
      if (response.data.length == 0) {
        toast.success('Tipo de caminhão atualizado com sucesso!');
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
      const response: AxiosRequestConfig = await axios.delete('/type/' + id);
      if (response.data.length == 0) {
        toast.success('Tipo de caminhão removido com sucesso!');
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
      const response = await axios.get(`/type/${id}`);
      const type: TruckType = response.data;

      return type;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get(`/type`);
      const types: TruckType[] = [];
      for (const data of response.data) types.push(data);

      return types;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default TruckTypeService;
