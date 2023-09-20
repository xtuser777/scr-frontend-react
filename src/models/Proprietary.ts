import Driver from './driver';
import Person from './person';

class Proprietary {
  constructor(
    public id: number,
    public register: string,
    public driver?: Driver,
    public person?: Person,
  ) {}
}

export default Proprietary;
