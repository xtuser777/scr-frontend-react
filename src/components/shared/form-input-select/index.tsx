import React, { ChangeEvent, ReactNode } from 'react';

const FormInputSelect = (props: {
  col: number;
  id: string;
  label: string;
  value: string;
  children: ReactNode;
  handle: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={`col-sm-${props.col}`}>
      <label htmlFor={props.id}>{props.label}:</label>
      <select
        name={props.id}
        id={props.id}
        className="form-control input-sm expanded"
        value={props.value}
        onChange={props.handle}
      >
        {props.children}
      </select>
    </div>
  );
};

export default FormInputSelect;
