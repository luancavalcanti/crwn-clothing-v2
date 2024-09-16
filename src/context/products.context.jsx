

import { createContext, useState } from 'react'
import PRODUCTS from '../shop-data.json'

export const ProductContext = createContext({
    products: []
})

export function ProductsProvider({children}){
    const [products, setProdutcs] = useState(PRODUCTS)
    const value = {products}
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}