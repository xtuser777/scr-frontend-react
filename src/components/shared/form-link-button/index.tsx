import React from 'react';

const FormLinkButton = (props: {
  col: number;
  id: string;
  label: boolean;
  color: string;
  text: string;
  link: string;
}) => {
  return (
    <div className={`col-sm-${props.col}`}>
      {props.label ? <label htmlFor={props.id}>&nbsp;</label> : <></>}
      <a
        role="button"
        id={props.id}
        className={`btn btn-sm ${props.color} expanded`}
        href={props.link}
      >
        {props.text}
      </a>
    </div>
  );
};

export default FormLinkButton;
