import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

export default function CartDropdown() {
    const { cartItems } = useContext(CartContext)
    const totalQuantity = cartItems.map(item => item.quantity)
    console.log(totalQuantity.reduce((accumulator, currentElement)=> accumulator + currentElement, 0 ))
    return (
        <div className='cart-dropdown-container'>
          <div className='cart-items'>
            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <span className='empty-message'>Your cart is empty</span>
            )}
          </div>
          <Button>GO TO CHECKOUT</Button>
        </div>
      )
}