import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from '../services/axios';
import { toast } from 'react-toastify';
import Representation from '../models/representation';
import { processApiError } from '../utils/process-api-error';

class RepresentationService {
  save = async (representation: Representation) => {
    try {
      const response: AxiosRequestConfig = await axios.post('/representation', { representation });
      if (response.data.length == 0) {
        toast.success('Representação cadastrada com sucesso!');
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

  async update(representation: Representation) {
    try {
      const response: AxiosRequestConfig = await axios.put(`/representation/${representation.id}`, {
        representation,
      });
      if (response.data.length == 0) {
        toast.success('Representação atualizada com sucesso!');
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
      const response: AxiosRequestConfig = await axios.delete(`/representation/${id}`);
      if (response.data.length == 0) {
        toast.success('Representação excluída com sucesso!');
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
      const response = await axios.get(`/representation/${id}`);
      const representation: Representation = response.data;

      return representation;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get(`/representation`);
      const reps: Representation[] = [];
      for (const data of response.data) reps.push(data);

      return reps;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default RepresentationService;
