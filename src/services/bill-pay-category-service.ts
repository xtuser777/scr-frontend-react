import { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import BillPayCategory from '../models/bill-pay-category';
import axios from './axios';
import { processApiError } from '../utils/process-api-error';

class BillPayCategoryService {
  save = async (category: BillPayCategory) => {
    try {
      const response: AxiosRequestConfig = await axios.post('/bill-pay-category', { category });
      if (response.data.length == 0) {
        toast.success('Categoria cadastrada com sucesso!');
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

  update = async (category: BillPayCategory) => {
    try {
      const response: AxiosRequestConfig = await axios.put('/bill-pay-category/' + category.id, {
        category,
      });
      if (response.data.length == 0) {
        toast.success('Categoria atualizada com sucesso!');
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
      const response: AxiosRequestConfig = await axios.delete('/bill-pay-category/' + id);
      if (response.data.length == 0) {
        toast.success('Categoria removida com sucesso!');
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
      const response = await axios.get('/bill-pay-category/' + id);
      const category: BillPayCategory | undefined = response.data;

      return category;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  };

  get = async () => {
    try {
      const response = await axios.get('/bill-pay-category');
      const categories: BillPayCategory[] = [];
      for (const data of response.data) categories.push(data);

      return categories;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  };
}

export default BillPayCategoryService;
