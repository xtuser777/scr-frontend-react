import { AxiosRequestConfig, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import Product from '../models/product';
import axios from './axios';
import { processApiError } from '../utils/process-api-error';
import { Security } from '../utils/security';

class ProductService {
  save = async (product: Product) => {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response: AxiosRequestConfig = await axios.post('/product', { product });
      if (response.data.length == 0) {
        toast.success('Produto cadastrado com sucesso!');
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

  update = async (product: Product) => {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response: AxiosRequestConfig = await axios.put('/product/' + product.id, { product });
      if (response.data.length == 0) {
        toast.success('Produto atualizado com sucesso!');
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
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response: AxiosRequestConfig = await axios.delete('/product/' + id);
      if (response.data.length == 0) {
        toast.success('Produto removido com sucesso!');
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
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await axios.get('/product/' + id);
      const product: Product | undefined = response.data;

      return product;
    } catch (e) {
      processApiError(e as AxiosError);
      return undefined;
    }
  };

  get = async () => {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await axios.get('/product');
      const products: Product[] = [];
      for (const data of response.data) products.push(data);

      return products;
    } catch (e) {
      processApiError(e as AxiosError);
      return [];
    }
  };
}

export default ProductService;
