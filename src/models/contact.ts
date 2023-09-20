import Address from './address';

class Contact {
  constructor(
    public id: number = 0,
    public phone: string = '',
    public cellphone: string = '',
    public email: string = '',
    public address?: Address,
  ) {}
}

export default Contact;
