import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from './axios';
import { toast } from 'react-toastify';
import { Security } from '../utils/security';
import State from '../models/state';
import { processApiError } from '../utils/process-api-error';

class StateService {
  async get() {
    try {
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
