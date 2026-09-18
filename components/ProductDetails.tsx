"use client"

import { useStateContext } from "@/context/StateContext"
// import { useStateContext } from "@/context/StateContext"
import { urlFor } from "@/sanity/lib/image"
import { MinusIcon, PlusIcon, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


const ProductDetails = ({product}: {product: any}) => {
    const {image, name, details, price} = product
    const [imageIndex, setImageIndex] = useState(0)

    const {qty, incQty, decQty, onAdd} = useStateContext()

  return (
    <div className="product-detail-container">
        {/**Images */}
    <div>
      <div className="image-container"> 
        <Image 
          src={urlFor(image[imageIndex]).url()}
          alt={name ?? "product image"}
          width={1080}
          height={1020}
          className="product-detail-image"
        />
      </div>
      <div className="small-images-container">
        {image?.map((item: string, index: number) => (
          <Image
          src={urlFor(item).url()}
          alt="product images"
          width={75}
          height={75}
          key={index}
          onMouseEnter={() => setImageIndex(index)}
          className={index === imageIndex ? "small-image selected-image" : "small image"}
          />
        ))}
      </div>
    </div>


        {/**desc */}
        <div className="product-detail-desc">

          <h1>{name}</h1>

          {/**reviews */}
          <div className="reviews">
           <div className="flex gap-2">
            <Star className="size-5 text-red-500 fill-red-400" />
            <Star className="size-5 text-red-500 fill-red-400" />
            <Star className="size-5 text-red-500 fill-red-400" />
            <Star className="size-5 text-red-500 fill-red-400" />
            <Star className="size-5 text-red-500" />
           </div>
           <p>(20)</p>
          </div>

            {/** */}
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
            {/** */}


          <div className="quantity">
          <h3>
            Quantity:
          </h3>
          <div className="quantity-desc">
            <button className="minus" onClick={decQty}>
                <MinusIcon className="size-4 cursor-pointer" strokeWidth={2} />
            </button>
            <span className="num">
                {qty}
            </span>
            <button className="plus" onClick={incQty}>
                <PlusIcon className="size-4 cursor-pointer" strokeWidth={2} />
            </button>
          </div>
            </div>



            <div className="buttons">
                <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>
                        Add to Cart
                </button>
                <button type="button" className="buy-now" onClick={() => {}}>
                        Buy Now
                </button>
            </div>
          </div>

  </div>
  )
}

export default ProductDetails