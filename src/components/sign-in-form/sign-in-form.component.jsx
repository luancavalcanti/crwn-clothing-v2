import { useContext, useState } from "react"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { UserContext } from "../../context/user.context"

import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils"

import './sign-in-form.styles.scss'

const defalutFormFields = {
    email: '',
    password: '',
}

export default function SignInForm() {
    const [formField, setFormField] = useState(defalutFormFields)
    const { email, password } = formField

    function resetFormFields() {
        setFormField(defalutFormFields)
    }

    async function signInWithGoogle() {
        await signInWithGooglePopup();
    };

    function handleChange(event) {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert('email or password incorrect')
            }
            console.log(error)
        }
    }
    return (
        <div className="sign-in-container">
            <h2>I have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label='Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" type='button' onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}