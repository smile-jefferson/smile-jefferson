import React , { useState , useEffect } from 'react'
import firebase from 'firebase/app'
import Message from './Message'

const Channel = ({user = null , db = null}) => {
    const [messages , setMessages] = useState([]);
    const [newMessage , setNewmessage] = useState('');
    const { uid , displayName , photoURL } = user;

    useEffect(()=>{
        if (db) {
            const unsubscribe = db
                .collection('messages')
                .orderBy('createdAt')
                .limit(100)
                .onSnapshot(querySnapshot => {
                    // Get all documents from collection - with IDs
                    const data = querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    
                    // Update state
                    setMessages(data);
                })

            // Detach listener
            return unsubscribe;
        }
    },[db]);


    const handleOnChange = e => {
        setNewmessage(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        
        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
        }
    }



    // return null;
    return (
        <>
            <ul>
                {messages.map(message => (
                    // <li key={message.id}>{message.text}</li>
                    <li key={message.id}><Message {...message}/></li>
                ))}
            </ul>
            <form onSubmit = { handleOnSubmit }>
                <input
                    type="text"
                    value={newMessage}
                    onChange = { handleOnChange }
                    placeholder="Type youe message here ..."
                />
                <button type="submit" disabled={!newMessage}>
                    Send
                </button>
            </form>
        </>
    )
};

export default Channel;