import FooterBanner from "@/components/FooterBanner";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { sanityFetch } from "@/sanity/lib/client";
import { BANNERS_QUERY, PRODUCTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {

  const products = await sanityFetch({query: PRODUCTS_QUERY})
  const bannerData = await sanityFetch({query: BANNERS_QUERY})

  return (
   <>
   <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    
   <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

    <ul className="products-container">
      {products.length > 0 ? 
      products.map((product: any) => (
        <ProductCard key={product._id} product={product} />
      ))
    : 
    <span>No Avalible Produts</span>
    }
    </ul>


    <div className="w-full flex">
        <div className="w-200px ml-20" />
        <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
        <div className="w-200px mr-20" />
      </div>

   </>
  );
}
