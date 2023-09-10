/* eslint-disable no-undef */

$(document).ready(function () {
  const cpf = document.getElementById('cpf');
  const code = document.getElementById('code');
  const phone = document.getElementById('phone');
  const cellphone = document.getElementById('cellphone');
  const cnh = document.getElementById('cnh');
  const bank = document.getElementById('bank');
  const agency = document.getElementById('agency');
  const account = document.getElementById('account');
  const plate = document.getElementById('plate');
  const manufactureYear = document.getElementById('manufacture-year');
  const modelYear = document.getElementById('model-year');

  if (cpf) $(cpf).mask('000.000.000-00', { reverse: false });
  if (code) $(code).mask('00.000-000', { reverse: false });
  if (phone) $(phone).mask('(00) 0000-0000', { reverse: false });
  if (cellphone) $(cellphone).mask('(00) 00000-0000', { reverse: false });
  if (cnh) $(cnh).mask('00000000000', { reverse: false });
  if (bank) $(bank).mask('000', { reverse: false });
  if (agency) $(agency).mask('0000-0', { reverse: false });
  if (account) $(account).mask('0000000000-0', { reverse: true });
  if (plate) $(plate).mask('SSS-0A00', { reverse: false });
  if (manufactureYear) $(manufactureYear).mask('0000', { reverse: false });
  if (modelYear) $(modelYear).mask('0000', { reverse: false });
});
