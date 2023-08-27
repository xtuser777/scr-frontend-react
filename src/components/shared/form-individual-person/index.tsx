import React, { useContext } from 'react';
import FieldsetCard from '../fieldset-card';
import FormInputDate from '../form-input-date';
import FormInputText from '../form-input-text';
import FormIndividualPersonContextType from '../../../contexts/components/shared/form-individual-person/individual-person-context-type';
import { FormIndividualPersonContext } from '../../../contexts/components/shared/form-individual-person/individual-person-context';

const FormIndividualPerson = () => {
  const {
    name,
    cpf,
    birth,
    errorName,
    errorCpf,
    errorBirth,
    handleNameChange,
    handleCpfChange,
    handleBirthChange,
  } = useContext<FormIndividualPersonContextType>(FormIndividualPersonContext);

  return (
    <FieldsetCard legend="Dados pessoais" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={8}
          id="name"
          label="Nome"
          obrigatory={true}
          value={name}
          message={errorName}
          handle={handleNameChange}
        />
        <FormInputText
          col={2}
          id="cpf"
          label="CPF"
          obrigatory={true}
          value={cpf}
          message={errorCpf}
          handle={handleCpfChange}
        />
        <FormInputDate
          col={2}
          id="birth"
          label="Nascimento"
          obrigatory={true}
          value={birth}
          message={errorBirth}
          handle={handleBirthChange}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormIndividualPerson;
