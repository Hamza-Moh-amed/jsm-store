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
  toggleCartItemQuantity: any,
  onRemove: any
}


const Context = createContext<StateContextType | undefined>(undefined)

export const StateContext = ({children}: {children: ReactNode}) => {

  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<any>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)


  const incQty = () => {
    setQty((prevQty) => prevQty +1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty -1 < 1) return 1;
      return prevQty -1
     })
  }

  
  const onAdd = (product: any, quantity: number) => {
    const existingProduct = cartItems.find((item: any) => item._id === product._id);
    const updatedCartItems = existingProduct
      ? cartItems.map((item: any) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...cartItems, { ...product, quantity }];

    setCartItems(updatedCartItems);
    setTotalPrice((prev) => prev + product.price! * quantity);
    setTotalQuantities((prev) => prev + quantity);
    toast.success(`${qty} ${product.name} added to the cart.`);
   setQty(1)  
   
  };

  const toggleCartItemQuantity = (id: string, action: "inc" | "dec") => {
    setCartItems((prevCartItems: any) =>
      prevCartItems.map((item: any) =>
        item._id === id
          ? {
              ...item,
              quantity:
                action === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );

    const item = cartItems.find((item: any) => item._id === id);
    if (!item) return;

    // const priceChange = action === "inc" ? item.price : -item.price;
    if (action === "inc") {
      setTotalQuantities((prev) => prev +  1 );
      setTotalPrice((prev) => prev + item.price);
    } else if (action === "dec") {
      if (item.quantity > 1) {
        setTotalQuantities((prev) => prev - 1 );
        setTotalPrice((prev) => prev - item.price);
      }
    } 
  };

  const onRemove = (id: string) => {

    const removedItem = cartItems.find((item: any) => item._id === id)
    setCartItems(cartItems.filter((item: any) => item._id !== id));
    setTotalPrice((prevTotalPrice) => prevTotalPrice - removedItem.price * removedItem.quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - removedItem.quantity)
    
  }




  // problem with -->  const updatedCartItems = cartItems.map((cartProduct: any) => { ((if(cartProduct._id === product._id)))

  // const onAdd = (product: any, quantity: number) => {
  //   //First Check if the product alreay exists in the cartItems - if it does - so we need to only update the quantity and the totalPrice
  //   const checkProductInCart = cartItems.find((item: any) => item._id === product._id)
    
  //   //On every add we always update the totalPrice and TotalQuantity
  //   setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
  //   setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity )
    
  //   //if the item exists in the cart --> update the cartItem
  //   if(checkProductInCart) {
  //     const updatedCartItems = cartItems.map((cartProduct: any) => {
  //       if(cartProduct._id === product._id) return {
  //         ...cartProduct,
  //         quantity: cartProduct.quantity + quantity
  //       }
  //     })

  //     setCartItems(updatedCartItems)
  //     // what if the product is not already in the cart (!checkProductInCart)
  //   } else {
  //     product.quantity = quantity
  //     setCartItems([...cartItems, {...product}])
  //   }
  //   toast.success(`${qty} ${product.name} added to the cart.`);
  //   // setQty(1) //todo 
  // }


  // --> The Problem with this implementation is that it returns the list in different order someimes 

  // const toggleCartItemQuantity   = (id: string, value: string) => {
  //   foundProduct = cartItems.find((item: any) => item._id === id) //the product by (id) from the list 
  //   const newCartItems = cartItems.filter((item: any) => item._id !== id) // get the full cartItems except for the (FoundProduct)

  //   if(value === "inc") {
  //     setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}])
  //     setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
  //     setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
  //   } else if (value === "dec") {
  //     if (foundProduct.quantity > 1) {
  //       setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity - 1}])
  //       setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
  //       setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
  //     }
  //   }

  // }



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
      toggleCartItemQuantity,
      onRemove,
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