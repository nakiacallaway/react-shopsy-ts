import React, { createContext, useReducer } from 'react';
import instance from '../api/apiConfig';

// Initialize a default state for our app
const initialState = {
  products: [],
  cart: [],
  product: undefined,
  getProducts: () => {},
  getSingleProduct: () => {},
  priceFix: (cost: number) => " "
};




const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'GET_SINGLE_PRODUCT':
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export const GlobalContext = createContext<InitialStateType>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getProducts = async () => {
    try {
      let { data } = await instance.get('/products');
      dispatch({ type: 'GET_PRODUCTS', payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  const getSingleProduct = async (productId: number) => {
    try {
      let { data } = await instance.get(`/products/${productId}`);
      console.log(data);
      dispatch({ type: 'GET_SINGLE_PRODUCT', payload: data });
    } catch (e) {
      console.log(e);
    }
  };

const priceFix = (cost: number) => {
  return cost.toFixed(2);
}

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        product: state.product,
        getProducts,
        getSingleProduct,
        priceFix,
      }}>
      {children} {/* <AppRouter/> */}
    </GlobalContext.Provider>
  );
};
