import { AxiosError } from 'axios';
import { processApiError } from '../utils/process-api-error';
import axios from './axios';
import Event from '../models/event';
import { Security } from '../utils/security';

class EventService {
  async getOne(id: number) {
    if (id <= 0) return undefined;
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await axios.get('/event/' + id);
      const event: Event | undefined = response.data;

      return event;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get(): Promise<Event[]> {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await axios.get('/event');
      const events: Event[] = [];
      for (const data of response.data) events.push(data);
      return events;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default EventService;
