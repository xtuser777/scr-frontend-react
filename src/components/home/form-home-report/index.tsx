import React, { useContext } from 'react';
import FormButton from '../../shared/form-button';
import axios from '../../../services/axios';
import { HomeContext } from '../../../contexts/home/home-context';
import { HomeContextType } from '../../../contexts/home-context-type';

const FormHomeReport = () => {
  const { filter, date, orderType } = useContext<HomeContextType>(HomeContext);

  const handlePdfClick = async () => {
    const result = await axios.get(
      `/event/report/{"filter": "${filter}", "date": "${date}", "type": "${orderType}"}`,
    );
    if (result.data) {
      const fileDate = new Date().toISOString().substring(0, 10);
      const time = new Date()
        .toLocaleTimeString('en-US', {
          timeZone: 'America/Sao_Paulo',
        })
        .substring(0, 8);
      const guia = window.open(
        `http://localhost:3001/reports/RelatorioEventos${fileDate.replaceAll(
          '-',
          '',
        )}-${time.trim().replaceAll(':', '')}.pdf`,
        '_blank',
      );
    }
  };

  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <FormButton
        col={4}
        id="do-report"
        label={false}
        text="GERAR PDF"
        action={handlePdfClick}
      />
      <div className="col-sm-4"></div>
    </div>
  );
};

export default FormHomeReport;
