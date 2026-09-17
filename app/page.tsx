import HeroBanner from "@/components/HeroBanner";
import { sanityFetch } from "@/sanity/lib/client";
import { BANNER_QUERY } from "@/sanity/lib/queries";

export default async function Home() {

  const products =[]
  const bannerData = await sanityFetch({query: BANNER_QUERY, revalidate: 0})
  // console.log(bannerData[0])

  return (
   <>
   <HeroBanner heroBanner={bannerData.length > 0 && bannerData[0]} />
   </>
  );
}
