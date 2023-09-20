import { AxiosError, AxiosRequestConfig, isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import BillPay from '../models/bill-pay';
import axios from './axios';
import { processApiError } from '../utils/process-api-error';

class BillPayService {
  async save(bill: BillPay, installments: number, interval: number, frequency: number) {
    try {
      const response: AxiosRequestConfig = await axios.post('/bill-pay', {
        bill,
        installments,
        interval,
        frequency,
      });
      if (response.data.length == 0) {
        toast.success('Conta a pagar lançada com sucesso!');
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

  async update(bill: BillPay) {
    const payload = {
      bill: {
        amountPaid: bill.amountPaid,
        paymentDate: bill.amountPaid > 0 ? bill.paymentDate : undefined,
        situation: bill.amountPaid > 0 ? (bill.amountPaid < bill.amount ? 2 : 3) : 1,
        paymentForm: bill.paymentForm,
      },
    };

    try {
      const response: AxiosRequestConfig = await axios.put('/bill-pay/' + bill.id, payload);
      if (response.data.length == 0) {
        toast.success(
          payload.bill.situation == 1
            ? 'Conta a pagar estornada com sucesso!'
            : 'Conta a pagar quitada com sucesso!',
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

  async delete(id: number) {
    try {
      const response: AxiosRequestConfig = await axios.delete('/bill-pay/' + id);
      if (response.data.length == 0) {
        toast.success('Conta a pagar excluída com sucesso!');
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
      const response = await axios.get('/bill-pay/' + id);
      const bill: BillPay | undefined = response.data;

      return bill;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get('/bill-pay');
      const bills: BillPay[] = [];
      for (const data of response.data) bills.push(data);
      return bills;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default BillPayService;
