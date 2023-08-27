import React, { ChangeEvent } from 'react';

const FormInputText = (props: {
  col: number;
  id: string;
  label: string;
  value: string;
  obrigatory: boolean;
  message?: string;
  handle: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={`col-sm-${props.col}`}>
      <label htmlFor={props.id}>
        {props.label}
        {props.obrigatory ? <span className="obrigatory-flag">&nbsp;*</span> : ''}:
      </label>
      <input
        type="text"
        name={props.id}
        id={props.id}
        className="form-control input-sm expanded"
        value={props.value}
        onChange={props.handle}
      />
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

export default FormInputText;
