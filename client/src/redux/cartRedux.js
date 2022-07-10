import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    //add single item to cart
    //increaseCartQty also uses this addToCart function
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          cartQuantity: (state.cartItems[itemIndex].cartQuantity += 1),
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //remove one single item from cart by ._id
    removeFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );
          state.cartItems = nextCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },

    //decrease single item cart quantity by finding itemIndex and _.id
    decreaseCartQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    //clear all cart
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;

        return cartTotal
      }, {
        total: 0,
        quantity: 0,
      })
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
});

export const {
  addToCart,
  decreaseCartQty,
  increaseCartQty,
  removeFromCart,
  clearCart,
  getTotals
} = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: localStorage.getItem("products")
//     ? JSON.parse(localStorage.getItem("products"))
//     : [],
//   quantity: 0,
//   total: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {

//     removeFromCart: (state, action) => {
//       const nextCartItems = state.products.filter(
//         (products) => products.id !== action.payload.id
//       );
//       state.products = nextCartItems;
//       localStorage.setItem("products", JSON.stringify(state.products));
//     },

//     clearCart: (state, action) => {
//       state.products = [];
//       localStorage.setItem("products", JSON.stringify(state.products));
//     },

//     getTotals: (state, action) => {
//       let { total, quantity } = state.products.reduce(
//         (cartTotal, products) => {
//           const { price, cartQuantity } = products;
//           const itemTotal = price * cartQuantity;

//           cartTotal.total += itemTotal;
//           cartTotal.quantity += cartQuantity;

//           return cartTotal;
//         },
//         {
//           total: 0,
//           quantity: 0,
//         }
//       );
//       state.cartTotalQuantity = quantity;
//       state.cartTotalAmount = total;
//     },
//   },
// });

// export const { addProduct, removeFromCart, clearCart, getTotals } =
//   cartSlice.actions;
// export default cartSlice.reducer;

//LAMA
// removeProduct: (state, action) => {
//   state.quantity += -1;
//   state.products.pop(action.payload);
//   state.products.splice(
//     state.products.findIndex((item) => item.id === action.payload)
//   );
//   state.total -= action.payload
// },
