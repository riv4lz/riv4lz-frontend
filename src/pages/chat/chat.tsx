import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import './chat.scss';
import {ChatComment} from "../../components/chat/message";
import { useStore} from "../../Stores/store";
import {ChatRoom} from "../../components/chat/chatRooms";

export default observer(function Chat(props: any){
    const {commentStore} = useStore();
    const comments: ChatComment[] = [];
    const chatRoom: ChatRoom[] = [];
    const [body, setBody] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        return () => {
            console.log("bananmad");
            commentStore.createHubConnection();
        };
    }, [commentStore]);


    const sendMessage = (e: any) =>{
        let comment = {
            body,
            username,
            date: new Date()
        };
        commentStore.sendMessage(comment).then(r => {
            setBody('');
            setUsername('');
        });
    }

    const loadRooms = (e: any) => {
        console.log("test succes");
        commentStore.loadRooms().then(r => {
            chatRoom.push(r);
        });
    }

    return <>
        <div className="chat--container">
            <div className="chat--wrapper">
                <div className="chat--main_section">
                    <div className="chat--main_header">
                        <h1>Welcome to Chat!</h1>
                    </div>
                    <div className="chat--main_messages">
                        <ul>
                            {comments.map((comment: ChatComment) => <li>{comment.body}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="chat--input_section">
                    <div className="chat--input_username">
                        <input type="text"
                               value={username}
                               onChange={(e) =>
                                   setUsername(e.target.value)} placeholder="Username"/>
                    </div>
                    <div className="chat--input_message">
                        <input className="chat--message_field"
                               type="text" value={body}
                               onChange={(e) =>
                                   setBody(e.target.value)} placeholder="Enter message here.."/>
                    </div>
                    <button className="chat--message_button" onClick={loadRooms}>Send</button>
                    <div>Chatrooms</div>
                    <ul>
                        {chatRoom.map((chatRooms: ChatRoom) => <li>{chatRooms.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>

    </>
})