import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import SaleBudget from '../models/sale-budget';
import { processApiError } from '../utils/process-api-error';

class SaleBudgetService {
  save = async (budget: SaleBudget) => {
    try {
      const response: AxiosRequestConfig = await axios.post('/sale-budget', { budget });
      if (response.data.length == 0) {
        toast.success('Orçamento de venda aberto com sucesso.');
        return true;
      } else {
        toast.error('Erro: ' + response.data);
        return false;
      }
    } catch (e) {
      processApiError(e as AxiosError);
      return false;
    }
  };

  async update(budget: SaleBudget) {
    try {
      const response: AxiosRequestConfig = await axios.put('/sale-budget/' + budget.id, { budget });
      if (response.data.length == 0) {
        toast.success('Orçamento de venda alterado com sucesso.');
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
      const response: AxiosRequestConfig = await axios.delete('/sale-budget/' + id);
      if (response.data.length == 0) {
        toast.success('Orçamento de venda excluído com sucesso.');
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
      const response = await axios.get('/sale-budget/' + id);
      const budget: SaleBudget | undefined = response.data;

      return budget;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get('/sale-budget');
      const budgets: SaleBudget[] = [];
      for (const data of response.data) budgets.push(data);

      return budgets;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default SaleBudgetService;
