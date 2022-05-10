import {observer, useObserver} from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import './chat.scss';
import * as signalR from '@microsoft/signalr'
import {useStore} from "../../Stores/store";
import {ChatRoom, message, messageSent, room} from "../../Stores/commentStore";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

const Chat = (comment: any) => {
    const {commentStore} = useStore();
    const [localMessage, setLocalMessage] = useState<string>('');
    const [localUserName, setLocalUserName] = useState<string>('');
    const [localMessageId, setLocalMessageId] = useState<string>("ad4cff79-928d-4efc-9e28-a86151a95433");

    const [currentRoomId, setCurrentRoomId] = useState<string>('');
    const [roomId, setRoomId] = useState<string>('');

    useEffect(() => {
        commentStore.createHubConnection();
        return () => {
            commentStore.clearComments();
        };
    }, []);

    const sendMessage = () => {
        const message: messageSent = {
            ChatRoomId: commentStore.test2.id,
            Id: uuidv4(),
            Text: localMessage,
            Username: localUserName,
        }
        commentStore.addComment(message).then(() => {
        });
        console.log(commentStore.comments)
    }

    const enterRoom = (id: string, ) => {
        setCurrentRoomId("ad4cff79-928d-4efc-9e28-a86151a95436");
        commentStore.joinRoom(id, currentRoomId).then(() => {
        });
        console.log(commentStore.test2.id);
        console.log(commentStore.test2.name);
        console.log(commentStore.test2.messages);
        console.log(uuidv4());

    }

    return useObserver(() => (
        <div className="chat--container">
            <div className="chat--wrapper">
                <div className="chat--main_section">
                    <div className="chat--main_header">
                        <h1>ChatRoom: {commentStore.test2.name}</h1>
                    </div>
                    <div className="chat--main_messages">
                        <ul>
                            {commentStore.test2.messages.map((message: message, index: number) => (
                                <ul key={index}>
                                    <li>{message.username} says: {message.text}</li>
                                </ul>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="chat--input_section">
                    <div className="chat--input_username">
                        <input type="text" placeholder="Username" onChange={e => setLocalUserName(e.target.value)}/>
                    </div>
                    <div className="chat--input_message">
                        <input type="text" placeholder="Enter message here.." onChange={e => setLocalMessage(e.target.value)} />
                    </div>
                    <button className="chat--message_button" onClick={sendMessage}>Send</button>
                    <div>Chatrooms</div>
                    <ul>
                        {commentStore.test.map((chatRoom: ChatRoom) => (
                            <ul key={chatRoom.id}>{chatRoom.name}
                                <button className="" onClick={() => enterRoom(chatRoom.id)}>test</button>
                            </ul>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
    );
}

export default observer(Chat);
