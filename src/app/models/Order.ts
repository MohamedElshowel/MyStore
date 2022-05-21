import { CartItem } from './CartItem';

export interface Order {
  fullName: string;
  address: string;
  creditCardNum: number | string;
  items: CartItem[];
}