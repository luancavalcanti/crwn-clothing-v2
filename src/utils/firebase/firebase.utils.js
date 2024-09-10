import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import  { getFirestore, doc, getDoc, setDoc }  from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAGEyC24klOqrvMQeA2lDbaAz7yEYocJz0",
    authDomain: "crwn-clothing-db-fef9f.firebaseapp.com",
    projectId: "crwn-clothing-db-fef9f",
    storageBucket: "crwn-clothing-db-fef9f.appspot.com",
    messagingSenderId: "858913714622",
    appId: "1:858913714622:web:ee8022b71d0e76170889ef"
  };
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      }catch(error){
        console.log('erro creating the user', error.message)
      }
    }

    return userDocRef
  }