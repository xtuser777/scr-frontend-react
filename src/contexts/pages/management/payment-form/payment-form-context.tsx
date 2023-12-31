import { ChangeEvent, createContext, useEffect, useState } from 'react';
import PaymentFormContextType from './payment-form-context-type';
import PaymentForm from '../../../../models/payment-form';
import { useParams } from 'react-router-dom';
import PaymentFormService from '../../../../services/payment-form-service';

export const PaymentFormContext = createContext<PaymentFormContextType>({
  description: '',
  deadline: 0,
  link: '',
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleDeadlineChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleLinkChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const PaymentFormProvider = (props: any) => {
  const [paymentForm, setPaymentForm] = useState(new PaymentForm());

  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(0);
  const [link, setLink] = useState('');

  const [errorDescription, setErrorDescription] = useState<string | undefined>(undefined);
  const [errorDeadline, setErrorDeadline] = useState<string | undefined>(undefined);
  const [errorLink, setErrorLink] = useState<string | undefined>(undefined);

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getData = async () => {
    const service = new PaymentFormService();
    const data = await service.getOne(id);
    
    if (data) {
      setPaymentForm(data);
      setDescription(data.description);
      setDeadline(data.deadline);
      setLink(data.link.toString());
    }
  };

  useEffect(() => {
    if (method == 'editar' && id) getData();
  }, []);

  const validate = {
    description: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'A descrição da forma precisa ser preenchida.',
          isValid: false,
        };
      } else {
        paymentForm.description = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    deadline: (value: string) => {
      if (value.length <= 0 || Number(value) <= 0) {
        return {
          message: 'O pazo de pagamento precisa ser preenchido.',
          isValid: false,
        };
      } else {
        paymentForm.deadline = Number(value);
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    link: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'O Vínculo precisa ser selecionado.',
          isValid: false,
        };
      } else {
        paymentForm.link = Number(value);
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    setErrorDescription(validate.description(e.target.value).message);
  };
  const handleDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeadline(Number(e.target.value));
    setErrorDeadline(validate.deadline(e.target.value).message);
  };
  const handleLinkChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLink(e.target.value);
    setErrorLink(validate.link(e.target.value).message);
  };

  const validateFields = () => {
    setErrorDescription(validate.description(description).message);
    setErrorDeadline(validate.deadline(deadline.toString()).message);
    setErrorLink(validate.link(link).message);

    return (
      validate.description(description).isValid &&
      validate.deadline(deadline.toString()).isValid &&
      validate.link(link).isValid
    );
  };

  const clearFields = () => {
    setDescription('');
    setDeadline(0);
    setLink('');
  };
  const persistData = async () => {
    if (validateFields()) {
      const service = new PaymentFormService();
      if (method == 'novo') await service.save(paymentForm);
      else await service.update(paymentForm);
    }
  };

  return (
    <PaymentFormContext.Provider
      value={{
        description,
        deadline,
        link,
        errorDescription,
        errorDeadline,
        errorLink,
        handleDescriptionChange,
        handleDeadlineChange,
        handleLinkChange,
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </PaymentFormContext.Provider>
  );
};

export default PaymentFormProvider;
