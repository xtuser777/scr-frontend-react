import React from 'react';
import FieldsetCard from '../fieldset-card';
import FormInputText from '../form-input-text';
import FormInputSelect from '../form-input-select';
import FormInputGroupText from '../form-input-group-text';

const FormContact = () => {
  return (
    <FieldsetCard legend="Dados de contato" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={4}
          id="street"
          label="Endereço"
          obrigatory
          value=""
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputText
          col={1}
          id="number"
          label="Número"
          obrigatory
          value=""
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputText
          col={3}
          id="neighborhood"
          label="Bairro / Distrito"
          obrigatory
          value=""
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputText
          col={2}
          id="complement"
          label="Complemento"
          obrigatory={false}
          value=""
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputText
          col={2}
          id="code"
          label="CEP"
          obrigatory
          value=""
          message={undefined}
          handle={() => {
            /** */
          }}
        />
      </div>
      <div className="row">
        <FormInputSelect
          col={2}
          id="state"
          label="Estado"
          value="0"
          handle={() => {
            /** */
          }}
        >
          <option value="0">SELECIONE</option>
        </FormInputSelect>
        <FormInputSelect
          col={3}
          id="city"
          label="Cidade"
          value="0"
          handle={() => {
            /** */
          }}
        >
          <option value="0">SELECIONE</option>
        </FormInputSelect>
        <FormInputGroupText
          col={2}
          id="phone"
          label="Telefone"
          icon="glyphicon-phone-alt"
          obrigatory
          value=""
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputGroupText
          col={2}
          id="cellphone"
          label="Celular"
          icon="glyphicon-phone"
          obrigatory
          value=""
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputGroupText
          col={3}
          id="email"
          label="E-mail"
          icon="glyphicon-envelope"
          obrigatory
          value=""
          message={undefined}
          handle={() => {
            /** */
          }}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormContact;
