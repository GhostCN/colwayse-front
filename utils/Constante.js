export const ROUTE_ALL_PRODUCT='/products?populate=image&populate=imagesOthers&filters[marque][$notNull]=\'\''
export const ROUTE_SLIDERS='/sliders?populate=*'
export const ROUTE_TENDANCE='/products?filters[tendance][$eq]=true&populate=*'
export const ROUTE_FEATURING='/products?filters[marque][$eq]={marque}&filters[size][$eq]={size}&populate=*'
export const ROUTE_PRODUCT_BY_SLUG='/products?filters[slug][$eq]={slug}'

