'use client'

/* Import the Amplify Auth API */
import { Auth } from "aws-amplify";

/* Create the form state and form input state */
let formState = "SignUp";
let formInputState = {username: '', password: '', email: '', verificationCode: ''};

/* onChange handler for form inputs */
function onChange(e: any) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value };

}

/* Sign up function */
async function signUp() {
    try {
        await Auth.signUp({
            username: formInputState.username,
            password: formInputState.password,
            attributes: {
                email: formInputState.email
            }
        })
    }
    catch {
        console.log('something went wroung')
    }
}

