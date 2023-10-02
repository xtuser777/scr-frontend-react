import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormInputSelect from '../../../shared/form-input-select';
import FormInputGroupText from '../../../shared/form-input-group-text';
import ProductContextType from '../../../../contexts/pages/management/product/product-context-type';
import { ProductContext } from '../../../../contexts/pages/management/product/product-context';
import Person from '../../../../models/person';

const FormProductData = () => {
  const {
    representations,
    description,
    measure,
    weight,
    price,
    priceOut,
    representation,
    errorDescription,
    errorRepresentation,
    errorMeasure,
    errorWeight,
    errorPrice,
    errorPriceOut,
    handleDescriptionChange,
    handleRepresentationChange,
    handleMeasureChange,
    handleWeightChange,
    handlePriceChange,
    handlePriceOutChange,
  } = useContext<ProductContextType>(ProductContext);
  return (
    <FieldsetCard legend="Dados do Produto" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={7}
          id="descricao"
          label="Descrição"
          obrigatory
          value={description}
          handle={handleDescriptionChange}
          message={errorDescription}
        />
        <FormInputSelect
          col={5}
          id="representacao"
          label="Representação"
          obrigatory
          value={representation}
          handle={handleRepresentationChange}
          message={errorRepresentation}
        >
          <option value="0">SELECIONE</option>
          {representations.map((item) => (
            <option key={item.id} value={item.id}>
              {(item.person as Person).enterprise?.fantasyName + ' (' + item.unity + ')'}
            </option>
          ))}
        </FormInputSelect>
      </div>
      <div className="row">
        <FormInputText
          col={3}
          id="medida"
          label="Medida"
          obrigatory
          placeholder="Exemplo: Kg, Sacos de X Kg..."
          value={measure}
          handle={handleMeasureChange}
          message={errorMeasure}
        />
        <FormInputGroupText
          col={3}
          id="peso"
          label="Peso"
          icon={'glyphicon-scale'}
          obrigatory
          value={weight}
          handle={handleWeightChange}
          message={errorWeight}
        />
        <FormInputGroupText
          col={3}
          id="preco"
          label="Preço"
          icon={'glyphicon-usd'}
          obrigatory
          value={price}
          handle={handlePriceChange}
          message={errorPrice}
        />
        <FormInputGroupText
          col={3}
          id="preco-out"
          label="Preço fora do estado"
          icon={'glyphicon-usd'}
          obrigatory
          value={priceOut}
          handle={handlePriceOutChange}
          message={errorPriceOut}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormProductData;
