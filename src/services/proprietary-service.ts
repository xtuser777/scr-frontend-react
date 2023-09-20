import { toast } from 'react-toastify';
import axios from '../services/axios';
import { AxiosError, AxiosRequestConfig } from 'axios';
import Proprietary from '../models/proprietary';
import { processApiError } from '../utils/process-api-error';

class ProprietaryService {
  save = async (proprietary: Proprietary) => {
    try {
      const response: AxiosRequestConfig = await axios.post('/proprietary', { proprietary });
      if (response.data.length == 0) {
        toast.success('Proprietário cadastrado com sucesso!');
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

  update = async (proprietary: Proprietary) => {
    try {
      const response: AxiosRequestConfig = await axios.put('/proprietary/' + proprietary.id, {
        proprietary,
      });
      if (response.data.length == 0) {
        toast.success('Proprietário atualizado com sucesso!');
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
      const response: AxiosRequestConfig = await axios.delete('/proprietary/' + id);
      if (response.data.length == 0) {
        toast.success('Proprietário removido com sucesso!');
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
      const response = await axios.get(`/proprietary/${id}`);
      const prop: Proprietary | undefined = response.data;

      return prop;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get(`/proprietary`);
      const props: Proprietary[] = [];
      for (const data of response.data) props.push(data);

      return props;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default ProprietaryService;
