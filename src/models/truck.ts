import Proprietary from './proprietary';
import TruckType from './truck-type';

class Truck {
  constructor(
    public id: number,
    public plate: string,
    public brand: string,
    public model: string,
    public color: string,
    public manufactureYear: number,
    public modelYear: number,
    public type?: TruckType,
    public proprietary?: Proprietary,
  ) {}
}

export default Truck;
