/* eslint-disable no-undef */

$(document).ready(function () {
  const cpf = document.getElementById('cpf');
  const code = document.getElementById('code');
  const phone = document.getElementById('phone');
  const cellphone = document.getElementById('cellphone');

  if (cpf) $(cpf).mask('000.000.000-00', { reverse: false });
  if (code) $(code).mask('00.000-000', { reverse: false });
  if (phone) $(phone).mask('(00) 0000-0000', { reverse: false });
  if (cellphone) $(cellphone).mask('(00) 00000-0000', { reverse: false });
});
