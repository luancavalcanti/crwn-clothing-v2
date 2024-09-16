import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

export function Navigation() {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    // const[hideDropdown, setHideDropdown] = useState('true')
    // function handleDropdown(){
    //     setHideDropdown(!hideDropdown)
    // }
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser 
                            ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
                            : (<Link className="nav-link" to='/auth'>SIGN IN</Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </>
    )
}