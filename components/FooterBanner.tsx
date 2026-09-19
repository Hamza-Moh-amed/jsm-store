import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FooterBanner = ({footerBanner}: {footerBanner: any}) => {
  const {
    buttonText,
    product,
    image,
    desc,
    smallText,
    midText,
    largeText1,
    largeText2,
    discount,
    saleTime,
  } = footerBanner;
  return (
    <footer className='footer-banner-container'>
        <div className='banner-desc'>
          <div className='left'>
          <p>{discount}</p>
          <h3 className='uppercase'>{largeText1}</h3>
          <h3 className='uppercase'>{largeText2}</h3>
          <p>{saleTime}</p>
          </div>
          <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/products/${product}`}>
          <button type='button'>
            {buttonText}
          </button>
          </Link>
          </div>

        <Image
        src={urlFor(image).url()}
        alt='Footer Image'
        width={450}
        height={450}
        className='footer-banner-image'
        />


        </div>
    </footer>
  )
}

export default FooterBanner