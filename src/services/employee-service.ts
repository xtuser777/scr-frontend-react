import { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import Employee from '../models/employee';
import axios from './axios';
import { processApiError } from '../utils/process-api-error';

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
      processApiError(e as AxiosError);
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
      processApiError(e as AxiosError);
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
      processApiError(e as AxiosError);
      return false;
    }
  }

  async getOne(id: number) {
    try {
      const response = await axios.get(`/employee/${id}`);
      const user = response.data ? new Employee(response.data) : undefined;

      return user;
    } catch (e) {
      processApiError(e as AxiosError);
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
      processApiError(e as AxiosError);
      return [];
    }
  }
}

export default EmployeeService;