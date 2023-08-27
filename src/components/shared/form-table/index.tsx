import React, { ReactNode } from 'react';

const FormTable = (props: { id: string; children: ReactNode }) => {
  return (
    <table id={props.id} className="table table-condensed table-striped table-hover">
      {props.children}
    </table>
  );
};

export default FormTable;
