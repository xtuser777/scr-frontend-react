import FreightOrder from './freight-order';
import Representation from './representation';

class LoadStep {
  constructor(
    public id: number,
    public order: number,
    public status: number,
    public load: number,
    public freightOrder?: FreightOrder,
    public representation?: Representation,
  ) {}
}

export default LoadStep;
