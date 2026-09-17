export const PRODUCT_QUERY = `*[_type == "product" && defined(slug.current)] | order(_createdAt desc) `

export const BANNER_QUERY = `*[_type == "banner"] | order(_createdAt desc)`