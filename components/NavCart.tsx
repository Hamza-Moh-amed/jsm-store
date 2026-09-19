"use client"
import { useStateContext } from '@/context/StateContext'
import { urlFor } from '@/sanity/lib/image'
import { MinusIcon, PlusIcon, ShoppingCart, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const NavCart = () => {
    const {totalQuantities, showCart, setShowCart, cartItems, onRemove, toggleCartItemQuantity, totalPrice} = useStateContext()
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

        {cartItems.length > 0 
        ? 
        <>
        <ul className='product-container'>
          {cartItems.map((item: any) => {
            return (

              <li key={item._id} className='product'>
                <Image
                src={urlFor(item.image[0]).url()}
                alt={item.name ?? "product Image"}
                width={180}
                height={150}
                className='cart-product-image'
                />
                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                 </div>
                    {/* //Todo update */}
                    <h4>Total: ${item.price * item.quantity}</h4> 
                 <div className='flex bottom mt-10'>
                 <div className="quantity-desc">
            <button className="minus"  onClick={() => toggleCartItemQuantity(item._id, "dec")}>
                <MinusIcon className="size-4 cursor-pointer" strokeWidth={2} />
            </button>
            <span className="num">
                {item.quantity}
            </span>
            <button className="plus" onClick={() => toggleCartItemQuantity(item._id, "inc")}>
                <PlusIcon className="size-4 cursor-pointer" strokeWidth={2} />
            </button>
          </div>
          <button
          onClick={() => onRemove(item._id)
          }
          className='cursor-pointer'
          >
            <XIcon className='text-red-500 border-2 rounded-full size-5 p-0.5 ' />
          </button>
                 </div>
                </div>
                
            </li>              
            )
            }
          )}

        </ul>
        <div className='px-20'>
            <div className='total font-medium '>
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button
              type='button'
              className='btn'
              >
                Pay with Stripe
              </button>
            </div>
        </div> 
        
        </>
        : 
        <div className='empty-cart flex flex-col items-center'>
            <ShoppingCart className='size-30' strokeWidth={1.5} />
            <h3>Your Shopping Bag is empty</h3>
            <Link href="/">
              <button
              type='button'
              className='btn rounded-lg px-6 py-2'
              onClick={() => setShowCart(false)}
              >
                Explore Shop
              </button>
            </Link>
        </div>
        }
        
      </div>
      
    </div>
    }



    </>
  )
}

export default NavCart