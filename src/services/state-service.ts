import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from './axios';
import State from '../models/state';
import { processApiError } from '../utils/process-api-error';
import { Security } from '../utils/security';

class StateService {
  async get() {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const result: AxiosRequestConfig = await axios.get('/state');
      const states: State[] = result.data;
      return states;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default StateService;
