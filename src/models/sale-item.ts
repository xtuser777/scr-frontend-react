import Product from './product';
import SaleBudget from './sale-budget';
import SaleOrder from './sale-order';

class SaleItem {
  constructor(
    public id: number = 0,
    public quantity: number = 0,
    public weight: number = 0,
    public price: number = 0,
    public product?: Product,
    public budget?: SaleBudget,
    public order?: SaleOrder,
  ) {}
}

export default SaleItem;
