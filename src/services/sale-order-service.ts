import { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import SaleOrder from '../models/sale-order';
import axios from './axios';
import { processApiError } from '../utils/process-api-error';
import { Comission } from '../models/comission';

class SaleOrderService {
  async save(order: SaleOrder, comissions: Comission[], salesmanComissionPorcent: number) {
    try {
      const response: AxiosRequestConfig = await axios.post('/sale-order', {
        order,
        comissions,
        salesmanComissionPorcent,
      });
      if (response.data.length == 0) {
        toast.success('Pedido de venda aberto com sucesso.');
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
      const response: AxiosRequestConfig = await axios.delete('/sale-order/' + id);
      console.log(response);

      if (response.data.length == 0) {
        toast.success('Pedido de venda removido com sucesso.');
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
      const response = await axios.get('/sale-order/' + id);
      const order: SaleOrder | undefined = response.data;

      return order;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get('/sale-order');
      const orders: SaleOrder[] = [];
      for (const data of response.data) orders.push(data);

      return orders;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default SaleOrderService;
