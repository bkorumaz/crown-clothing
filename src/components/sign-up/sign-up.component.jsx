import React, { useState, useEffect } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


function SignUp() {
    
    const [user, setUser] = useState({ 
        displayName:'', email:'', password:'', confirmPassword:'' 
    });

    
    const handleChange = event => {
        const { value, name } = event.target;
        setUser({...user, [ name ] : value });  //this notation is very important
    } 
    
    
    const handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password} = user;

        if(user.password !== user.confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { userAuth } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(userAuth, {displayName});

            setUser({ 
                displayName:'', email:'', password:'', confirmPassword:'' 
            })

        } catch(error) {
            console.log('an error occured signing up :' + error);
        }

    };



    return(
        <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={user.displayName}
                onChange={handleChange}
                label='Display Name'
                required
                />
                <FormInput
                type='email'
                name='email'
                value={user.email}
                onChange={handleChange}
                label='Email'
                required
                />
                <FormInput
                type='password'
                name='password'
                value={user.password}
                onChange={handleChange}
                label='Password'
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                value={user.confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                <span>{ user.displayName }</span>
            </form>
        </div>
    )
}



export default SignUp;