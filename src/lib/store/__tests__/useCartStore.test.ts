import { useCartStore } from '../useCartStore';

describe('useCartStore', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  test('adds item to cart', () => {
    const store = useCartStore.getState();
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 1200,
      portion: 'full',
      quantity: 1,
    });

    expect(store.items).toHaveLength(1);
    expect(store.getTotalItems()).toBe(1);
    expect(store.getTotalPrice()).toBe(1200);
  });

  test('increments quantity if item with same id and portion exists', () => {
    const store = useCartStore.getState();
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 1200,
      portion: 'full',
      quantity: 1,
    });
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 1200,
      portion: 'full',
      quantity: 2,
    });

    expect(store.items).toHaveLength(1);
    expect(store.items[0].quantity).toBe(3);
    expect(store.getTotalItems()).toBe(3);
  });

  test('allows different portions of same item', () => {
    const store = useCartStore.getState();
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 1200,
      portion: 'full',
      quantity: 1,
    });
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 600,
      portion: 'half',
      quantity: 1,
    });

    expect(store.items).toHaveLength(2);
    expect(store.getTotalItems()).toBe(2);
    expect(store.getTotalPrice()).toBe(1800);
  });

  test('removes item from cart', () => {
    const store = useCartStore.getState();
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 1200,
      portion: 'full',
      quantity: 1,
    });
    store.removeItem('1', 'full');

    expect(store.items).toHaveLength(0);
  });

  test('updates item quantity', () => {
    const store = useCartStore.getState();
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 1200,
      portion: 'full',
      quantity: 1,
    });
    store.updateItemQuantity('1', 'full', 5);

    expect(store.items[0].quantity).toBe(5);
    expect(store.getTotalItems()).toBe(5);
    expect(store.getTotalPrice()).toBe(6000);
  });

  test('prevents negative quantities', () => {
    const store = useCartStore.getState();
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 1200,
      portion: 'full',
      quantity: 1,
    });
    store.updateItemQuantity('1', 'full', -5);

    expect(store.items[0].quantity).toBe(0);
  });

  test('clears entire cart', () => {
    const store = useCartStore.getState();
    store.addItem({
      id: '1',
      name: 'Jerk Chicken',
      price: 1200,
      portion: 'full',
      quantity: 1,
    });
    store.addItem({
      id: '2',
      name: 'Oxtail Stew',
      price: 1500,
      portion: 'full',
      quantity: 1,
    });
    store.clearCart();

    expect(store.items).toHaveLength(0);
    expect(store.getTotalItems()).toBe(0);
    expect(store.getTotalPrice()).toBe(0);
  });
});
