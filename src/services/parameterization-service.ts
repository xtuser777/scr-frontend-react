import { toast } from 'react-toastify';
import Parameterization from '../models/parameterization';
import axios from './axios';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { processApiError } from '../utils/process-api-error';

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
      processApiError(e as AxiosError);
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
      processApiError(e as AxiosError);
      return false;
    }
  }

  async get() {
    try {
      const response = await axios.get(`/parameterization`);
      const parameterization: Parameterization | undefined = response.data;

      return parameterization;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }
}

export default ParameterizationService;
