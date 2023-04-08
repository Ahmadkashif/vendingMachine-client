import { User } from './user';
import { Product } from './product';

export interface Purchase {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    totalCost: number;
    user: User;
    product: Product;
}
