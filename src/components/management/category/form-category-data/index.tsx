import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import CategoryContextType from '../../../../contexts/pages/management/category/category-context-type';
import { CategoryContext } from '../../../../contexts/pages/management/category/category-context';

const FormCategoryData = () => {
  const { description, errorDescription, handleDescriptionChange } =
    useContext<CategoryContextType>(CategoryContext);

  return (
    <FieldsetCard legend="Dados do tipo de caminhão" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={12}
          id="description"
          label="Descrição"
          obrigatory
          value={description}
          message={errorDescription}
          handle={handleDescriptionChange}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormCategoryData;
