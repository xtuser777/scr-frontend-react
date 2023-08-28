import React, { useContext } from 'react';
import FieldsetCard from '../fieldset-card';
import FormInputText from '../form-input-text';
import FormInputSelect from '../form-input-select';
import FormInputGroupText from '../form-input-group-text';
import FormContactContextType from '../../../contexts/components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../contexts/components/shared/form-contact/contact-context';

const FormContact = () => {
  const {
    states,
    cities,
    street,
    number,
    neighborhood,
    complement,
    code,
    state,
    city,
    phone,
    cellphone,
    email,
    errorStreet,
    errorNumber,
    errorNeighborhood,
    errorCode,
    errorState,
    errorCity,
    errorPhone,
    errorCellphone,
    errorEmail,
    handleStreetChange,
    handleNumberChange,
    handleNeighborhoodChange,
    handleComplementChange,
    handleCodeChange,
    handleStateChange,
    handleCityChange,
    handlePhoneChange,
    handleCellphoneChange,
    handleEmailChange,
  } = useContext<FormContactContextType>(FormContactContext);

  return (
    <FieldsetCard legend="Dados de contato" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={4}
          id="street"
          label="Endereço"
          obrigatory
          value={street}
          message={errorStreet}
          handle={handleStreetChange}
        />
        <FormInputText
          col={1}
          id="number"
          label="Número"
          obrigatory
          value={number}
          message={errorNumber}
          handle={handleNumberChange}
        />
        <FormInputText
          col={3}
          id="neighborhood"
          label="Bairro / Distrito"
          obrigatory
          value={neighborhood}
          message={errorNeighborhood}
          handle={handleNeighborhoodChange}
        />
        <FormInputText
          col={2}
          id="complement"
          label="Complemento"
          obrigatory={false}
          value={complement}
          handle={handleComplementChange}
        />
        <FormInputText
          col={2}
          id="code"
          label="CEP"
          obrigatory
          value={code}
          message={errorCode}
          handle={handleCodeChange}
        />
      </div>
      <div className="row">
        <FormInputSelect
          col={2}
          id="state"
          label="Estado"
          obrigatory
          value={state}
          message={errorState}
          handle={handleStateChange}
        >
          <option value="0">SELECIONE</option>
        </FormInputSelect>
        <FormInputSelect
          col={3}
          id="city"
          label="Cidade"
          obrigatory
          value={city}
          message={errorCity}
          handle={handleCityChange}
        >
          <option value="0">SELECIONE</option>
        </FormInputSelect>
        <FormInputGroupText
          col={2}
          id="phone"
          label="Telefone"
          icon="glyphicon-phone-alt"
          obrigatory
          value={phone}
          message={errorPhone}
          handle={handlePhoneChange}
        />
        <FormInputGroupText
          col={2}
          id="cellphone"
          label="Celular"
          icon="glyphicon-phone"
          obrigatory
          value={cellphone}
          message={errorCellphone}
          handle={handleCellphoneChange}
        />
        <FormInputGroupText
          col={3}
          id="email"
          label="E-mail"
          icon="glyphicon-envelope"
          obrigatory
          value={email}
          message={errorEmail}
          handle={handleEmailChange}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormContact;
