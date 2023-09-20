import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from './axios';
import Level from '../models/level';
import { processApiError } from '../utils/process-api-error';

class LevelService {
  async get() {
    try {
      const result: AxiosRequestConfig = await axios.get('/level');
      const levels: Level[] = result.data;
      return levels;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default LevelService;
