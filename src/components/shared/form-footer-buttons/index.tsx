import React from 'react';
import FormLinkButton from '../form-link-button';
import FormButton from '../form-button';

const FormFooterButtons = (props: {
  link: string;
  clear: boolean;
  save: boolean;
  clearFields?: () => void;
  persistData?: () => Promise<void>;
}) => {
  return (
    <div className="row">
      <FormLinkButton
        col={2}
        id="back"
        color="btn-default"
        label={false}
        text="VOLTAR"
        link={props.link}
      />
      <div className={`col-sm-${props.clear ? '6' : '8'}`}></div>
      {props.clear ? (
        <FormButton
          col={2}
          id="clear"
          color="btn-primary"
          label={false}
          text="LIMPAR"
          action={() => {
            if (props.clear && props.clearFields) props.clearFields();
          }}
        />
      ) : (
        ''
      )}
      {props.save ? (
        <FormButton
          col={2}
          id="save"
          color="btn-success"
          label={false}
          text="SALVAR"
          action={async () => {
            if (props.save && props.persistData) await props.persistData();
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default FormFooterButtons;
