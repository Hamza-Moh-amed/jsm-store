import Image from "next/image";
import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const HeroBanner = ({ heroBanner }: { heroBanner: any }) => {
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
  } = heroBanner;
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <Image
          src={urlFor(image).url()}
          alt="headphone"
          width={450}
          height={450}
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <div className="desc">
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;