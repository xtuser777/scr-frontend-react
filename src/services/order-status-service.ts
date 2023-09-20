import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import OrderStatus from '../models/order-status';
import { processApiError } from '../utils/process-api-error';
import axios from './axios';

class OrderStatusService {
  async update(id: number, status: OrderStatus) {
    try {
      const response = await axios.put('/order-status/' + id, { status });
      if (response.data.length == 0) {
        toast.success('Status do pedido atualizado com sucesso!');
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
}

export default OrderStatusService;
