import { useContext } from 'react'
import Button from '../button/button.component'
import './product-card.styles.scss'
import { CartContext } from '../../context/cart.context'

export default function ProductCard({ product }){
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    function addProductToCart(){
        addItemToCart(product)
    }
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt=''/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}