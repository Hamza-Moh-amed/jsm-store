"use client"

import { urlFor } from "@/sanity/lib/image"
import { MinusIcon, PlusIcon, Star } from "lucide-react"
import Image from "next/image"


const ProductDetails = ({product}: {product: any}) => {
    const {image, name, details, price} = product

  return (
    <div className="product-detail-container">
        {/**Images */}
    <div>
      <div className="image-container"> 
        <Image 
          src={urlFor(image[0]).url()}
          alt={name ?? "product image"}
          width={300}
          height={300}
        />
      </div>
      <div className="small-images-container">
        {image?.map((item: URL, index: number) => (
          <Image
          src={urlFor(item).url()}
          alt="product images"
          width={90}
          height={90}
          key={index}
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
            <button className="minus" onClick={() => {}}>
                <MinusIcon className="size-4 cursor-pointer" strokeWidth={2} />
            </button>
            <span className="num">
                5
            </span>
            <button className="plus" onClick={() => {}}>
                <PlusIcon className="size-4 cursor-pointer" strokeWidth={2} />
            </button>
          </div>
            </div>



            <div className="buttons">
                <button type="button" className="add-to-cart" onClick={() => {}}>
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