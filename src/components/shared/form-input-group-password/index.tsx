import React, { ChangeEvent } from 'react';

const FormInputGroupPassword = (props: {
  col: number;
  id: string;
  label: string;
  icon: string;
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
      <div className="input-group expanded">
        <div className="input-group-addon">
          <span className={`glyphicon ${props.icon}`} aria-hidden="true"></span>
        </div>
        <input
          type="password"
          name={props.id}
          id={props.id}
          className="form-control input-sm expanded"
          value={props.value}
          onChange={props.handle}
        />
      </div>
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

export default FormInputGroupPassword;
