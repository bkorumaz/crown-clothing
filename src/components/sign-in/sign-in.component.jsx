import React, {useState} from 'react';
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

function SignIn() {

    const [user, setUser] = useState( { email:'', password:'' } )

    const handleSubmit = async event => {
        event.preventDefault();
        try {
        await auth.signInWithEmailAndPassword(user.email, user.password);
        setUser( { email : '' , password : '' } );
        } catch (error) {
        console.log(error);
        }

    };

    const handleChange = event => {
        const { value, name } = event.target;
        setUser({...user, [ name ] : value });  //this notation is very important
    };

    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' handleChange={handleChange} value={user.email}  label='email' required />
                <FormInput name='password' type='password' handleChange={handleChange} value={user.password}  label='password' required />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    )
}


export default SignIn;