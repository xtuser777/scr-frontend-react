import React, { ChangeEvent, createContext, useContext, useState } from 'react';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import DriverContextType from './driver-context-type';
import { Driver } from '../../../../models/Driver';

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

  const validate = {
    cnh: (value: string) => {
      if (value.length == 0) {
        setErrorCnh('A CNH do motorista precisa ser preenchida.');
        return false;
      } else {
        setErrorCnh(undefined);
        driver.cnh = value;
        return true;
      }
    },
    bank: (value: string) => {
      if (value.length == 0) {
        setErrorBank('O número do banco precisa ser preenchido.');
        return false;
      } else {
        setErrorBank(undefined);
        driver.bankData.bank = value;
        return true;
      }
    },
    agency: (value: string) => {
      if (value.length == 0) {
        setErrorAgency('A agência do banco precisa ser preenchida.');
        return false;
      } else {
        setErrorAgency(undefined);
        driver.bankData.agency = value;
        return true;
      }
    },
    account: (value: string) => {
      if (value.length == 0) {
        setErrorAccount('A conta do banco precisa ser preenchida');
        return false;
      } else {
        setErrorAccount(undefined);
        driver.bankData.account = value;
        return true;
      }
    },
    type: (value: string) => {
      if (value == '0') {
        setErrorType('O tipo de conta precisa ser selecionado.');
        return false;
      } else {
        setErrorType(undefined);
        driver.bankData.type = Number(value);
        return true;
      }
    },
  };

  const handleCnhChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCnh(e.target.value);
    validate.cnh(e.target.value);
  };
  const handleBankChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBank(e.target.value);
    validate.bank(e.target.value);
  };
  const handleAgencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgency(e.target.value);
    validate.agency(e.target.value);
  };
  const handleAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
    validate.account(e.target.value);
  };
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    validate.type(e.target.value);
  };

  const validateFields = () => {
    return (
      validate.cnh(cnh) &&
      validate.bank(bank) &&
      validate.agency(agency) &&
      validate.account(account) &&
      validate.type(type)
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
