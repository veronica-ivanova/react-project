import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    // selectCartItems: (state) =>
    //   Object.keys(state).reduce((acc, id) => {
    //     acc.push({ id, amount: state[id] });
    //     return acc;
    //   }, []),

    selectAmountByItemId: (state, id) => state[id],
  },
});

export const { selectCartItems, selectAmountByItemId } =
  cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;


const selectCartSlice = (state) => state.cart;

export const selectCartItemsIds = createSelector([selectCartSlice], (cart) => 
    Object.keys(cart)
);


