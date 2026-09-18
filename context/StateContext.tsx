"use client"

import { createContext,   useContext,   useState,   type ReactNode, } from "react";
import toast from "react-hot-toast";


export type StateContextType = {
  showCart: boolean,
  cartItems: any, //Todo: update this type
  totalPrice: number,
  totalQuantities: number,
  qty: number;
  incQty: () => void
  decQty: () => void
  onAdd: any
  setShowCart: any
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

    // Always update the total qty and total price (checkProductInCart) or (!checkProductInCart)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity )
    setTotalPrice((prevTotalPrice) => prevTotalPrice + prevTotalPrice * quantity)

    //If yes -- checkProductInCart update the cartItems - map - get the item and update it's values
    if(checkProductInCart) {
      // update the item
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct, 
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItems)
      
      // the item does not exist already in the cart -- !checkProductInCart
    } else {
      product.quantity = quantity
      setCartItems([...cartItems, {...product}])
    }
    toast.success(`${qty} ${product.name} added to your cart`)
    setQty(1)
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
      onAdd,
      setShowCart,
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