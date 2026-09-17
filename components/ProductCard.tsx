import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({product}: {product: any}) => {
    const {image, name, price, slug} = product
  return (
    <li>
        <Link href={`/products/${slug.current}`}>
        <div className='product-card'>
            <Image
            src={urlFor(image[0]).url()}
            alt='Product Cover image'
            width={250}
            height={250}
            className='product-image'
            />
            <p className='product-name'>{name}</p>
            <p className='product-price'>${price}</p>
        </div>
        </Link>
    </li>
  )
}

export default ProductCard

