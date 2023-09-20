import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { Security } from './security';

export const processApiError = (e: AxiosError) => {
  switch (e.response?.status) {
    case 404:
      toast.error('Erro de requisição: Rota não encontrada.');
      break;
    case 400:
      toast.error(`Erro na requisição: ${e.response.data}`);
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
      toast.error(`Erro desconhecido: ${e}`);
      break;
  }
};
