
import ProductCard from "@/components/ProductCard"
import ProductDetails from "@/components/ProductDetails"
import { sanityFetch } from "@/sanity/lib/client"
import { PRODUCT_BY_SLUG_QUERY, PRODUCTS_QUERY } from "@/sanity/lib/queries"

import { notFound } from "next/navigation"

const ProductDetailsPage = async ({params}: {params: Promise<{slug: string}>}) => {

    const {slug} = await params

  const product = await sanityFetch({query: PRODUCT_BY_SLUG_QUERY, params: {slug}})
  const products = await sanityFetch({query: PRODUCTS_QUERY})

  if(!product) return notFound()

  return (
    <div>
     <ProductDetails product={product} />
     <div className="maylike-products-wrapper">
      <h2>You may also like</h2>
      <div className="marquee">
      <ul className="maylike-products-container track">
        {products.length > 0 && products.map((product: any) => <ProductCard key={product?._id} product={product} />)}
      </ul>
      </div>
    </div>
    </div>
  )
}

export default ProductDetailsPage