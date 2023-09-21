import Proprietary from './proprietary';
import TruckType from './truck-type';

class Truck {
  constructor(
    public id: number = 0,
    public plate: string = '',
    public brand: string = '',
    public model: string = '',
    public color: string = '',
    public manufactureYear: number = 0,
    public modelYear: number = 0,
    public type?: TruckType,
    public proprietary?: Proprietary,
  ) {}
}

export default Truck;
