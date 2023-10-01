import React from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputSelect from '../../../shared/form-input-select';
import FormButton from '../../../shared/form-button';
import FormTable from '../../../shared/form-table';

const FormPoductTruckTypes = () => {
  return (
    <div className="row">
      <div className="col-sm-5">
        <FieldsetCard legend="Adicionar tipos de caminhão compatíveis" obrigatoryFields>
          <div className="row">
            <FormInputSelect
              col={12}
              id="tipocaminhao"
              label="Tipo de Caminhão"
              obrigatory
              value={'0'}
              handle={(e) => {
                /** */
              }}
              message={undefined}
            >
              <option value="0">SELECIONE</option>
              {/* {types.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.description + ' - ' + item.axes + ' Eixos'}
                </option>
              ))} */}
            </FormInputSelect>
          </div>
          <div className="row">
            <FormButton
              col={12}
              id="add-type"
              color="success"
              label={false}
              text="ADICIONAR TIPO"
              action={() => {
                /** */
              }}
            />
          </div>
        </FieldsetCard>
      </div>
      <div className="col-sm-7">
        <FieldsetCard legend="Tipos de caminhão compatíveis" obrigatoryFields={false}>
          <div className="row">
            <div className="table-container" style={{ height: '150px' }}>
              <FormTable id="table-links">
                <thead>
                  <tr>
                    <th className="hidden">ID</th>
                    <th style={{ width: '40%' }}>DESCRIÇÃO</th>
                    <th style={{ width: '16%' }}>EIXOS</th>
                    <th style={{ width: '10%' }}>CAPACIDADE</th>
                    <th style={{ width: '2%' }}>&nbsp;</th>
                  </tr>
                </thead>

                <tbody id="tbodyLinks">
                  {/* {typesLinked.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.description}</td>
                      <td>{item.axes}</td>
                      <td>{item.capacity}</td>
                      <td>
                        <FaTrash
                          role="button"
                          color="red"
                          size={14}
                          title="Excluir"
                          onClick={() => this.delType(item.id)}
                        />
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </FormTable>
            </div>
          </div>
        </FieldsetCard>
      </div>
    </div>
  );
};

export default FormPoductTruckTypes;
