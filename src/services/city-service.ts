import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from './axios';
import { toast } from 'react-toastify';
import { Security } from '../utils/security';
import City from '../models/city';
import { processApiError } from '../utils/process-api-error';

class CityService {
  async get() {
    try {
      const result: AxiosRequestConfig = await axios.get('/city');
      const cities: City[] = result.data;
      return cities;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default CityService;
