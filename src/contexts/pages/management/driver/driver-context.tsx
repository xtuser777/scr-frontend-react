import React, { ChangeEvent, createContext, useContext, useEffect, useState } from 'react';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import DriverContextType from './driver-context-type';
import Driver from '../../../../models/driver';
import BankData from '../../../../models/bank-data';
import { useParams } from 'react-router-dom';
import DriverService from '../../../../services/driver-service';
import Person from '../../../../models/person';
import IndividualPerson from '../../../../models/individual-person';
import Contact from '../../../../models/contact';

export const DriverContext = createContext<DriverContextType>({
  cnh: '',
  bank: '',
  agency: '',
  account: '',
  type: '0',
  handleCnhChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleBankChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleAgencyChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleAccountChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const DriverProvider = (props: any) => {
  const individualPersonContext = useContext<FormIndividualPersonContextType>(
    FormIndividualPersonContext,
  );
  const contactContext = useContext<FormContactContextType>(FormContactContext);

  const [driver, setDriver] = useState(new Driver());

  const [cnh, setCnh] = useState('');
  const [bank, setBank] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [type, setType] = useState('0');

  const [errorCnh, setErrorCnh] = useState<string | undefined>(undefined);
  const [errorBank, setErrorBank] = useState<string | undefined>(undefined);
  const [errorAgency, setErrorAgency] = useState<string | undefined>(undefined);
  const [errorAccount, setErrorAccount] = useState<string | undefined>(undefined);
  const [errorType, setErrorType] = useState<string | undefined>(undefined);

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getData = async () => {
    const service = new DriverService();
    const data = await service.getOne(id);

    if (data) {
      setDriver(data);
      individualPersonContext.loadPerson(
        (driver.person as Person).individual as IndividualPerson,
        false,
      );
      setCnh(data.cnh);
      setBank((data.bankData as BankData).bank);
      setAgency((data.bankData as BankData).agency);
      setAccount((data.bankData as BankData).account);
      setType((data.bankData as BankData).type.toString());
      await contactContext.loadContact((driver.person as Person).contact as Contact);
    }
  };

  useEffect(() => {
    if (method == 'editar' && id) getData();
  }, []);

  const validate = {
    cnh: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'A CNH do motorista precisa ser preenchida.',
          isValid: false,
        };
      } else {
        driver.cnh = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    bank: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O número do banco precisa ser preenchido.',
          isValid: false,
        };
      } else {
        (driver.bankData as BankData).bank = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    agency: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'A agência do banco precisa ser preenchida.',
          isValid: false,
        };
      } else {
        (driver.bankData as BankData).agency = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    account: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'A conta do banco precisa ser preenchida.',
          isValid: false,
        };
      } else {
        (driver.bankData as BankData).account = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    type: (value: string) => {
      if (value == '0') {
        return {
          message: 'O tipo de conta precisa ser selecionado.',
          isValid: false,
        };
      } else {
        (driver.bankData as BankData).type = Number(value);
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
  };

  const handleCnhChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCnh(e.target.value);
    setErrorCnh(validate.cnh(e.target.value).message);
  };
  const handleBankChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBank(e.target.value);
    setErrorBank(validate.bank(e.target.value).message);
  };
  const handleAgencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgency(e.target.value);
    setErrorAgency(validate.agency(e.target.value).message);
  };
  const handleAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
    setErrorAccount(validate.account(e.target.value).message);
  };
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    setErrorType(validate.type(e.target.value).message);
  };

  const validateFields = () => {
    setErrorCnh(validate.cnh(cnh).message);
    setErrorBank(validate.bank(bank).message);
    setErrorAgency(validate.agency(agency).message);
    setErrorAccount(validate.account(account).message);
    setErrorType(validate.type(type).message);

    return (
      validate.cnh(cnh).isValid &&
      validate.bank(bank).isValid &&
      validate.agency(agency).isValid &&
      validate.account(account).isValid &&
      validate.type(type).isValid
    );
  };

  const clearFields = () => {
    individualPersonContext.clearFields();
    setCnh('');
    setBank('');
    setAgency('');
    setAccount('');
    setType('0');
    contactContext.clearFields();
  };
  const persistData = async () => {
    individualPersonContext.validateFields();
    validateFields();
    contactContext.validateFields();
  };

  return (
    <DriverContext.Provider
      value={{
        cnh,
        bank,
        agency,
        account,
        type,
        errorCnh,
        errorBank,
        errorAgency,
        errorAccount,
        errorType,
        handleCnhChange,
        handleBankChange,
        handleAgencyChange,
        handleAccountChange,
        handleTypeChange,
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </DriverContext.Provider>
  );
};

export default DriverProvider;
