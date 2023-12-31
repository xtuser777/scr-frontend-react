import React from 'react';

const FormButton = (props: {
  col: number;
  id: string;
  color: string;
  label: boolean;
  text: string;
  action: () => void;
}) => {
  return (
    <div className={`col-sm-${props.col}`}>
      {props.label ? <label htmlFor={props.id}>&nbsp;</label> : <></>}
      <button
        name={props.id}
        id={props.id}
        className={`btn btn-sm ${props.color} expanded`}
        onClick={props.action}
      >
        {props.text}
      </button>
    </div>
  );
};

export default FormButton;
