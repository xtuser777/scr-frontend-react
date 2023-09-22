import React, { ReactNode } from 'react';

const FieldsetCard = (props: {
  legend: string;
  obrigatoryFields: boolean;
  children: ReactNode;
}) => {
  return (
    <div className="fieldset-card">
      <div className="fieldset-card-legend">{props.legend}</div>
      <div className="fieldset-card-container">
        {props.children}
        {props.obrigatoryFields ? (
          <div className="fieldset-card-legend-obg">* Campos de preenchimento obrigatório.</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FieldsetCard;
