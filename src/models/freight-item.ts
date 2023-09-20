import Product from './product';
import FreightBudget from './freight-budget';
import FreightOrder from './freight-order';

class FreightItem {
  constructor(
    public id: number = 0,
    public quantity: number = 0,
    public weight: number = 0,
    public product?: Product,
    public budget?: FreightBudget,
    public order?: FreightOrder,
  ) {}
}

export default FreightItem;
