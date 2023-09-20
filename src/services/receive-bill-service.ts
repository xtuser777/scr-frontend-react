import { AxiosError, AxiosRequestConfig, isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import axios from './axios';
import ReceiveBill from '../models/receive-bill';
import { processApiError } from '../utils/process-api-error';

class ReceiveBillService {
  async update(bill: ReceiveBill) {
    const payload = {
      bill: {
        amountReceived: bill.amountReceived,
        receiveDate: bill.amountReceived > 0 ? bill.receiveDate : undefined,
        situation: bill.amountReceived > 0 ? (bill.amountReceived < bill.amount ? 2 : 3) : 1,
        paymentForm: bill.paymentForm,
      },
    };

    try {
      const response: AxiosRequestConfig = await axios.put('/receive-bill/' + bill.id, payload);
      if (response.data.length == 0) {
        toast.success(
          payload.bill.situation == 1
            ? 'Conta a pagar estornada com sucesso!'
            : 'Conta a pagar recebida com sucesso!',
        );
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

  async getOne(id: number) {
    if (id <= 0) return undefined;
    try {
      const response = await axios.get('/receive-bill/' + id);
      const bill: ReceiveBill | undefined = response.data;

      return bill;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get('/receive-bill');
      const bills: ReceiveBill[] = [];
      for (const data of response.data) bills.push(data);
      return bills;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default ReceiveBillService;
