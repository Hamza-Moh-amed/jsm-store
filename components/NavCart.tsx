"use client"
import { useStateContext } from '@/context/StateContext'
import { ShoppingCart, XIcon } from 'lucide-react'
import { useRef } from 'react'

const NavCart = () => {
    const {totalQuantities, showCart, setShowCart, cartItems} = useStateContext()
    const cartRef = useRef(null)
  return (
    <>
    <button className="cart-icon" type="button" onClick={() => setShowCart(true)}>
    <ShoppingCart />
     <span className="cart-item-qty">{totalQuantities}</span>
    </button>

    {showCart && 
    
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <div className='cart-heading'>
          <button 
      type='button'
      onClick={() => {setShowCart(false)}}
      className='cursor-pointer'
      >
        <XIcon />
          </button>
            <span className='heading'>Your Cart</span>
            <span className='cart-num-items'>({totalQuantities} {totalQuantities ===  1 ? "item" : "items"})</span>
        </div>

        {cartItems.length > 0 ? <> </> 
        : 
        <div className='empty-cart flex flex-col items-center'>
            <ShoppingCart className='size-30' />
            <h3>Your Shopping Bag is empty</h3>
        </div>
        }
        
      </div>
      
    </div>
    }



    </>
  )
}

export default NavCart