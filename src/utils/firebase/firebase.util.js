import {initializeApp}  from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyASc8ZuHMlx705f0BlQlUzfoRga_pHlRUQ",
    authDomain: "clothing-e9d93.firebaseapp.com",
    projectId: "clothing-e9d93",
    storageBucket: "clothing-e9d93.appspot.com",
    messagingSenderId: "744495116147",
    appId: "1:744495116147:web:af6b18bf6a027327139f06"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db,'users',userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user',error.message);

    }

  }
  return userDocRef;
}
