export interface CartItem {
  id: string;
  name: string;
  price: number;
  portion: 'half' | 'full';
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
