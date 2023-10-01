import React from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormInputSelect from '../../../shared/form-input-select';
import FormInputGroupText from '../../../shared/form-input-group-text';

const FormProductData = () => {
  return (
    <FieldsetCard legend="Dados do Produto" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={7}
          id="descricao"
          label="Descrição"
          obrigatory
          value={''}
          handle={(e) => {
            /** */
          }}
          message={undefined}
        />
        <FormInputSelect
          col={5}
          id="representacao"
          label="Representação"
          obrigatory
          value={'0'}
          handle={(e) => {
            /** */
          }}
          message={undefined}
        >
          <option value="0">SELECIONE</option>
          {/* {representations.map((item) => (
            <option key={item.id} value={item.id}>
              {item.person.enterprise?.fantasyName + ' (' + item.unity + ')'}
            </option>
          ))} */}
        </FormInputSelect>
      </div>
      <div className="row">
        <FormInputText
          col={3}
          id="medida"
          label="Medida"
          obrigatory
          placeholder="Exemplo: Kg, Sacos de X Kg..."
          value={''}
          handle={(e) => {
            /** */
          }}
          message={undefined}
        />
        <FormInputGroupText
          col={3}
          id="peso"
          label="Peso"
          icon={'glyphicon-scale'}
          obrigatory
          value={''}
          handle={(e) => {
            /** */
          }}
          message={undefined}
        />
        <FormInputGroupText
          col={3}
          id="preco"
          label="Preço"
          icon={'glyphicon-usd'}
          obrigatory
          value={''}
          handle={(e) => {
            /** */
          }}
          message={undefined}
        />
        <FormInputGroupText
          col={3}
          id="preco-out"
          label="Preço fora do estado"
          icon={'glyphicon-usd'}
          obrigatory
          value={''}
          handle={(e) => {
            /** */
          }}
          message={undefined}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormProductData;
