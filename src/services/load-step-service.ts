import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import axios from './axios';
import LoadStep from '../models/load-step';
import { processApiError } from '../utils/process-api-error';

class LoadStepService {
  async update(step: LoadStep) {
    try {
      const response = await axios.put('/load-step/' + step.id, { step });
      if (response.data.length == 0) {
        toast.success('Etapa de carregamento atualizada com sucesso!');
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
}

export default LoadStepService;
