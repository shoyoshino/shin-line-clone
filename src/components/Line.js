import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import { auth, db } from '../firebase';
import SendMessage from './SendMessage';

function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages')
            .orderBy('createdAt')
            .limit(50)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()));
            });
    }, []);
    return (
        <div>
            <SignOut />
            <div className="messages">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`message ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage />
        </div>
    );
}

export default Line;
