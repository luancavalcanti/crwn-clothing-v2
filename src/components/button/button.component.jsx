import './button.styles.scss'

const BUTTON_TYPE_CLASSSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

export default function Button({ children, buttonType, ...otherPros }){
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSSES[buttonType]}`} 
        {...otherPros}>{children}</button>
    )
}