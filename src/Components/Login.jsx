import { useRef, useState } from "react";
import { BG_URL } from "../Utils/constant";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
    const [ isSignInForm, setIsSignInForm ] = useState ( true );
    const [ errorMessage, setErrorMessage ] = useState ( null );
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm ( !isSignInForm);
    }

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage ( message );  
        if ( message ) return;
        if( !isSignInForm ){
            // Sign Up logic
            createUserWithEmailAndPassword( auth, email.current.value,password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage( errorCode + " " + errorMessage)
            });
        }
        else {
            // Sign In logic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage( errorCode + " " + errorMessage)
            });
        }   
    }

    return (
        <div>
            <Header />
            <div className = " absolute">
                <img src = { BG_URL } alt="background-image-of-netflix-login-page" className = " min-h-screen "/>
            </div>
            <div>
                <form
                onSubmit={ (e) => e.preventDefault()}
                 className = " absolute bg-black bg-opacity-70 rounded-lg w-3/12 p-12 my-24 mx-auto right-0 left-0 text-white"
                 >
                    <h1 className = "text-3xl font-bold">
                        { isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    
                    { !isSignInForm && 
                    <input 
                    type="text" 
                    placeholder="Full Name" 
                    className = "p-2 my-4 h-12 w-full bg-zinc-800 rounded-lg "
                    />}
                    
                    <input 
                    ref = { email }
                    type="text" 
                    placeholder="Email Address" 
                    className = "p-2 my-4 h-12 w-full bg-zinc-800 rounded-lg "
                    />

                    <input 
                    ref = { password }
                    type="password" 
                    placeholder="Password" 
                    className = "p-2 my-4 h-12 w-full bg-zinc-800 rounded-lg"
                    />

                    <p className = " text-red-700 font-bold text-lg py-2"> { errorMessage } </p>

                    <button 
                    onClick={handleButtonClick} 
                    className = "p-0.5 my-6 w-full h-12 rounded-lg bg-red-700" 
                    >Submit
                    </button>

                    <p onClick = { toggleSignInForm} className="py-4 cursor-pointer">
                        { !isSignInForm ? "Already a User ?  " : "New to netflix ?  " } 
                        { !isSignInForm ? "Sign In" : "Sign Up"}
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Login;