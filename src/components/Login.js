import { useState } from "react";
import Header from "./Header";
const Login =()=> {
     const[isSignInForm, setIsSignInForm] = useState(true);

     const toggleSignInForm =() =>{
   setIsSignInForm(!setIsSignInForm);
     };
    return (
 <div>
   <Header/>
   

   <div className="absolute w-full">
    <img
    className="w-full"
 src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg" alt ="logo"/>
 </div>
<form className="w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
<h1 className="font-bold text-4xl py-4">
    {isSignInForm ? "Sign In" : "Sign Up"}</h1>


 {!isSignInForm && <input
 type="text"
 placeholder=" Full Name"
 className="p-4 my-4 w-full bg-gray-700"
 />}
    <input 
    type="text"
     placeholder="Email Address" 
     className="p-4 my-4 w-full  bg-gray-700"/>



    <input 
    type="password" 
    placeholder="Password"
     className="p-4 my-4 w-full bg-gray-700"/>
    <button className="p-4 my-4  bg-red-700 w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
         {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
        </p>
</form>

 </div>

    );
};
export default Login;