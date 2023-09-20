import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from './axios';
import { toast } from 'react-toastify';
import PaymentForm from '../models/payment-form';
import { processApiError } from '../utils/process-api-error';

class PaymentFormService {
  save = async (form: PaymentForm) => {
    try {
      const response: AxiosRequestConfig = await axios.post('payment-form', { form });
      if (response.data.length == 0) {
        toast.success('Forma de pagamento cadastrada com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  };

  update = async (form: PaymentForm) => {
    try {
      const response: AxiosRequestConfig = await axios.put('payment-form/' + form.id, { form });
      if (response.data.length == 0) {
        toast.success('Forma de pagamento atualizada com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  };

  delete = async (id: number) => {
    try {
      const response: AxiosRequestConfig = await axios.delete('payment-form/' + id);
      if (response.data.length == 0) {
        toast.success('Forma de pagamento removida com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  };

  getOne = async (id: number) => {
    if (id <= 0) return undefined;
    try {
      const response = await axios.get('/payment-form/' + id);
      const form: PaymentForm | undefined = response.data;

      return form;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  };

  get = async () => {
    try {
      const response = await axios.get('/payment-form');
      const forms: PaymentForm[] = [];
      for (const data of response.data) forms.push(data);

      return forms;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  };
}

export default PaymentFormService;
