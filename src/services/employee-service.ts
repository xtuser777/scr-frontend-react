import { AxiosError, AxiosRequestConfig, isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import Employee from '../models/employee';
import axios from './axios';
import { Security } from '../utils/security';

class EmployeeService {
  async save(employee: Employee) {
    try {
      const response: AxiosRequestConfig = await axios.post('/employee', { employee });
      if (response.data.length == 0) {
        toast.success('Funcionário cadastrado com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      if (isAxiosError(e)) toast.error('Erro de requisição: ' + e.response?.data);
      return false;
    }
  }

  async update(employee: Employee) {
    try {
      const response: AxiosRequestConfig = await axios.put(`/employee/${employee.id}`, {
        employee,
      });
      if (response.data.length == 0) {
        toast.success('Funcionário atualizado com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      const error = e as AxiosError;
      switch (error.response?.status) {
        case 404:
          toast.error('Erro de requisição: Rota não encontrada.');
          break;
        case 400:
          toast.error(`Erro na requisição: ${error.response.data}`);
          break;
        case 401:
          toast.error('Token de autenticação inválido. Faça login novamente.');
          Security.clear();
          window.document.location.reload();
          break;
        case 500:
          toast.error('Erro de servidor.');
          break;
        default:
          toast.error(`Erro desconhecido: ${error}`);
          break;
      }
      return false;
    }
  }

  async delete(id: number) {
    try {
      const response: AxiosRequestConfig = await axios.delete(`/employee/${id}`);
      if (response.data.length == 0) {
        toast.success('Funcionário excluído com sucesso!');
        return true;
      } else {
        toast.error(`Erro: ${response.data}`);
        return false;
      }
    } catch (e) {
      const error = e as AxiosError;
      switch (error.response?.status) {
        case 404:
          toast.error('Erro de requisição: Rota não encontrada.');
          break;
        case 400:
          toast.error(`Erro na requisição: ${error.response.data}`);
          break;
        case 401:
          toast.error('Token de autenticação inválido. Faça login novamente.');
          Security.clear();
          window.document.location.reload();
          break;
        case 500:
          toast.error('Erro de servidor.');
          break;
        default:
          toast.error(`Erro desconhecido: ${error}`);
          break;
      }
      return false;
    }
  }

  async getOne(id: number) {
    try {
      const response = await axios.get(`/employee/${id}`);
      const user = response.data ? new Employee(response.data) : undefined;

      return user;
    } catch (e) {
      const error = e as AxiosError;
      switch (error.response?.status) {
        case 404:
          toast.error('Erro de requisição: Rota não encontrada.');
          break;
        case 400:
          toast.error(`Erro na requisição: ${error.response.data}`);
          break;
        case 401:
          toast.error('Token de autenticação inválido. Faça login novamente.');
          Security.clear();
          window.document.location.reload();
          break;
        case 500:
          toast.error('Erro de servidor.');
          break;
        default:
          toast.error(`Erro desconhecido: ${error}`);
          break;
      }
      return undefined;
    }
  }

  async get() {
    try {
      const response = await axios.get(`/employee`);
      const users: Employee[] = [];
      for (const data of response.data) users.push(data);

      return users;
    } catch (e) {
      const error = e as AxiosError;
      switch (error.response?.status) {
        case 404:
          toast.error('Erro de requisição: Rota não encontrada.');
          break;
        case 400:
          toast.error(`Erro na requisição: ${error.response.data}`);
          break;
        case 401:
          toast.error('Token de autenticação inválido. Faça login novamente.');
          Security.clear();
          window.document.location.reload();
          break;
        case 500:
          toast.error('Erro de servidor.');
          break;
        default:
          toast.error(`Erro desconhecido: ${error}`);
          break;
      }
      return [];
    }
  }
}
