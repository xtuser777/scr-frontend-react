import { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import FreightOrder from '../models/freight-order';
import axios from './axios';
import { processApiError } from '../utils/process-api-error';

class FreightOrderService {
  async save(order: FreightOrder) {
    try {
      const response: AxiosRequestConfig = await axios.post('/freight-order', { order });
      if (response.data.length == 0) {
        toast.success('Pedido de frete aberto com sucesso.');
        return true;
      } else {
        toast.error('Erro: ' + response.data);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  }

  async delete(id: number) {
    try {
      const response: AxiosRequestConfig = await axios.delete('/freight-order/' + id);
      if (response.data.length == 0) {
        toast.success('Pedido de frete removido com sucesso.');
        return true;
      } else {
        toast.error('Erro: ' + response.data);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  }

  async getOne(id: number) {
    if (id <= 0) return undefined;
    try {
      const response = await axios.get('/freight-order/' + id);
      const order: FreightOrder | undefined = response.data;

      return order;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get('/freight-order');
      const orders: FreightOrder[] = [];
      for (const data of response.data) orders.push(data);

      return orders;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default FreightOrderService;
