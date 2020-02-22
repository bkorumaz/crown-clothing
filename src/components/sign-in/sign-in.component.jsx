import React, {useState} from 'react';
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

function SignIn() {

    const [user, setUser] = useState( { email:'', password:'' } )

    const handleSubmit = event => {
        event.preventDefault();
        setUser( { email : '' , password : '' } );
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setUser({...user, [ name ] : value });  //this notation is very important
        console.log(user);
    };

    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' handleChange={handleChange} value={user.email}  label='email' required />
                <FormInput name='password' type='password' handleChange={handleChange} value={user.password}  label='password' required />
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle}> Sign in with Google </CustomButton>
            </form>
        </div>
    )
}


export default SignIn;