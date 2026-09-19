export const PRODUCTS_QUERY = `*[_type == "product" && defined(slug.current)] | order(_createdAt desc) `

export const BANNERS_QUERY = `*[_type == "banner"] | order(_createdAt desc)`

export const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0]`