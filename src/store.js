import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  persist(
    devtools(set => ({
      user: null,
      user_location: 'Select your address',
      Query: '',
      setQuery: query => set(() => ({ Query: query })),
      signIn: user => set(() => ({ user })),
      setUserLocation: location => set(() => ({ user_location: location })),
    })),
    { name: 'userdata' },
  ),
);

export const useCartStore = create(
  persist(
    devtools(set => ({
      cartItems: [],
      addToCart: (pdt, qty) =>
        set(state => {
          const itemIdx = state.cartItems.findIndex(i => i.id === pdt.id);
          if (itemIdx !== -1) {
            state.changeItemQty(pdt.id, qty);
          } else {
            return {
              cartItems: [...state.cartItems, { ...pdt, qty }],
            };
          }
        }),
      removeItem: itemId =>
        set(state => ({
          cartItems: state.cartItems.filter(i => i.id !== itemId),
        })),
      changeItemQty: (itemId, qty) =>
        set(state => {
          if (qty === '0') {
            state.removeItem(itemId);
          } else {
            const itemIdx = state.cartItems.findIndex(i => i.id === itemId);
            const newItems = state.cartItems.filter(i => i.id !== itemId);
            newItems.splice(itemIdx, 0, {
              ...state.cartItems[itemIdx],
              qty,
            });
            return { cartItems: newItems };
          }
        }),
    })),
    { name: 'cartData' },
  ),
);

export default useStore;
