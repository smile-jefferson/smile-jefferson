
import React , { useState , useEffect } from 'react'
// Components
import Button from './components/Button'
import Channel from './components/Channel'
// Firebase deps
// npm i --save firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDI8m6MxQp6AnTn3u7efvWpPJBA06sYZts",
  authDomain: "react-firechat-1309f.firebaseapp.com",
  projectId: "react-firechat-1309f",
  storageBucket: "react-firechat-1309f.appspot.com",
  messagingSenderId: "315730717003",
  appId: "1:315730717003:web:080cfde04960966abe60ce"
})


const auth = firebase.auth();
const db = firebase.firestore();


function App() {

  const [user , setUser] = useState(() => auth.currentUser)
  const [initializing , setInitializing] = useState(true)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        setUser(user);
      }else {
        setUser(null);
      }

      if(initializing) {
        setInitializing(false)
      }
    });

    // Cleanup subscription
    return unsubscribe;
  },[])
  const signInWithGoogle = async () =>{
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // set language to the default browser prefrence
    auth.useDeviceLanguage();
    // Start sign in process
    try {
      await auth.signInWithPopup(provider);
    } catch (error){
      console.error(error)
    }
  }

  const signOut = async () =>{
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  }

  if (initializing) return "Loading ... "

  return (
    <div>
      {user ? (
          // "Welcome to the chat"
          <>
            <Button onClick={signOut}>Sign out</Button>
            {/* <p>Welcome to the chat</p> */}
            <Channel user={user} db={db}/>
          </>
        ) : (
          <Button onClick = {signInWithGoogle}>Sign in with Google</Button>
        )}
    </div>
  );
}

export default App;
