import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInSignUpPageContainer } from './sign-in-sign-up-page.styles';


function SignInSignUpPage() {
    return(
        <SignInSignUpPageContainer>
            <SignIn/>
            <SignUp/>
        </SignInSignUpPageContainer>
    )
}


export default SignInSignUpPage