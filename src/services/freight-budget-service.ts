import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from './axios';
import { toast } from 'react-toastify';
import FreightBudget from '../models/freight-budget';
import { processApiError } from '../utils/process-api-error';

class FreightBudgetService {
  async save(budget: FreightBudget) {
    try {
      const response: AxiosRequestConfig = await axios.post('/freight-budget', { budget });
      if (response.data.length == 0) {
        toast.success('Orçamento de frete aberto com sucesso.');
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

  async update(budget: FreightBudget) {
    try {
      const response: AxiosRequestConfig = await axios.put('/freight-budget/' + budget.id, {
        budget,
      });
      if (response.data.length == 0) {
        toast.success('Orçamento de frete alterado com sucesso.');
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
      const response: AxiosRequestConfig = await axios.delete('/freight-budget/' + id);
      if (response.data.length == 0) {
        toast.success('Orçamento de frete removido com sucesso.');
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
      const response = await axios.get('/freight-budget/' + id);
      const budget: FreightBudget | undefined = response.data;

      return budget;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get('freight-budget');
      const budgets: FreightBudget[] = [];
      for (const data of response.data) budgets.push(data);

      return budgets;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default FreightBudgetService;
