import Representation from './representation';
import TruckType from './truck-type';

class Product {
  constructor(
    public id: number = 0,
    public description: string = '',
    public measure: string = '',
    public weight: number = 0,
    public price: number = 0,
    public priceOut: number = 0,
    public representation?: Representation,
    public types: TruckType[] = [],
  ) {}
}

export default Product;
