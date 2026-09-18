"use client"

import { createContext,   useContext,   useState,   type ReactNode, } from "react";


export type StateContextType = {
  showCart: boolean,
  cartItems: any, //Todo: update this type
  totalPrice: number,
  totalQuantities: number,
  qty: number;
  incQty: () => void
  decQty: () => void
}


const Context = createContext<StateContextType | undefined>(undefined)

export const StateContext = ({children}: {children: ReactNode}) => {

  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<any>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)


  const onAdd = (product: any, quantity: number) => {

    //Check if an item already exists in the cart 
    const checkProductInCart = cartItems.find((item: any) => item._id === product._id)

    //If yes -- Then update the total qty and total price in the cart 
    if(checkProductInCart) {
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity )
      setTotalPrice((prevTotalPrice) => prevTotalPrice + prevTotalPrice * quantity)
      // update the item
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct, 
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItems)
      
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty +1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty -1 < 1) return 1;

      return prevQty -1
     })
  }

  return (
    <Context value={{
      showCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      }}>
        {children}
    </Context>
  )
}

  export const useStateContext = () => {
    const context = useContext(Context);
    if (!context)
      throw new Error("useStateContext must be used within a StateContext");
    return context;
  };