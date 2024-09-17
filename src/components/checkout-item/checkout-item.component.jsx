import { useContext } from "react"
import "./checkout-item.styles.scss"
import { CartContext } from "../../context/cart.context"
import { clear } from "@testing-library/user-event/dist/clear"

export default function CheckoutItem({ cartItem }){
    const { name, imageUrl, price, quantity } = cartItem
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

    function clearItemHandle(){clearItemFromCart(cartItem)}
    function addItemHandler() {addItemToCart(cartItem)}
    function removeItemHandler() {removeItemFromCart(cartItem)}

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
                
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandle}>&#10005;</div>
        </div>
    )
}