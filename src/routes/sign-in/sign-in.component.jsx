import { async } from "@firebase/util";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
const SignIn = () =>{
    const logGoogleUser = async () =>{
        const {user}  = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    
    }
    return (
        <div>
            <h1>Sign In Pages</h1>
            <button onClick={logGoogleUser}>Sign in Google Popup</button>
        </div>
    )
}

export default SignIn;