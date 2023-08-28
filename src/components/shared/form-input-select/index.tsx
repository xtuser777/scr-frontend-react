import React, { ChangeEvent, ReactNode } from 'react';

const FormInputSelect = (props: {
  col: number;
  id: string;
  label: string;
  value: string;
  obrigatory: boolean;
  message?: string;
  children: ReactNode;
  handle: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={`col-sm-${props.col}`}>
      <label htmlFor={props.id}>
        {props.label}
        {props.obrigatory ? <span className="obrigatory-flag">&nbsp;*</span> : ''}:
      </label>
      <select
        name={props.id}
        id={props.id}
        className="form-control input-sm expanded"
        value={props.value}
        onChange={props.handle}
      >
        {props.children}
      </select>
      {props.message ? (
        <span id="msNome" className="label label-danger">
          {props.message}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormInputSelect;
