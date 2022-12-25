import {initializeApp} from 'firebase/app';
import 
{	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
 } from 'firebase/auth';
 import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyDnm5nqcPQPU3UjJqHFHyyzarydvnT1RoY",
  authDomain: "signupwith-be1b4.firebaseapp.com",
  projectId: "signupwith-be1b4",
  storageBucket: "signupwith-be1b4.appspot.com",
  messagingSenderId: "825453028257",
  appId: "1:825453028257:web:19f570430980609a45a1e0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); 

provider.setCustomParameters({
	propmt:"select_account"
})

export const auth=getAuth();

export const signInWithGooglePopup =()=>signInWithPopup(auth,provider)

export const db = getFirestore();

export const createUserDocumentAuth = async (userAuth)=>{
	const userDocRef=doc(db,'users',userAuth.uid);
	const userSnapShot=await getDoc(userDocRef);
	if(!userSnapShot.exists()){
		const {displayName,email}=userAuth;
		const createdAt=new Date();
		try{
			await setDoc(userDocRef,{
				displayName,
				email,
				createdAt
			})
		}catch(error){
			console.log('error creating the user',error.message)
		}
	}
	return userDocRef;
}