import { AxiosError } from 'axios';
import Status from '../models/status';
import { processApiError } from '../utils/process-api-error';
import axios from './axios';

class StatusService {
  async get() {
    try {
      const response = await axios.get('/status');
      const statuses: Status[] = [];
      for (const data of response.data) statuses.push(data);
      return statuses;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default StatusService;
