import {observer, useObserver} from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import './chat.scss';
import * as signalR from '@microsoft/signalr'
import {useStore} from "../../Stores/store";
import {ChatRoom, message, messageSent, room} from "../../Stores/commentStore";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {Link, Navigate, useNavigate} from "react-router-dom";

const Chat = (comment: any) => {
    let navigate = useNavigate()
    const { commentStore } = useStore();
    const { authStore } = useStore();
    const { casterStore } = useStore();
    const [localMessage, setLocalMessage] = useState<string>('');
    const [localUserName, setLocalUserName] = useState<string>('');
    const [localMessageId, setLocalMessageId] = useState<string>("ad4cff79-928d-4efc-9e28-a86151a95433");

    const [currentRoomId, setCurrentRoomId] = useState<string>('');
    const [roomId, setRoomId] = useState<string>('');

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/Login");
        }
        commentStore.createHubConnection();
        console.log(commentStore.test3.messages);
        console.log(commentStore.test2);
        //casterStore.loadCaster(authStore.user?.id).then(r => console.log(r));
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
            <div className={"Chat"}>
                <div className={"Chat__Sidebar"}>
                    <h3 className={"Text_Secondary"}>ROOMS</h3>
                    {commentStore.test.map((chatRoom: ChatRoom) => (
                        <ul key={chatRoom.id} className={"Text_Secondary"}>{chatRoom.name}
                            <button className="" onClick={() => enterRoom(chatRoom.id)}>test</button>
                        </ul>
                    ))}
                </div>
                <div className={"Chat__ChatSection"}>
                    <div className={"Chat__ChatSection__Header"}>
                        <h1>ChatRoom: {commentStore.test2.name}</h1>
                    </div>
                    <div className={"Chat__ChatSection__Body"}>
                        <ul>
                            {commentStore.test3.messages.map((message: message, index: number) => (
                                <ul key={index}>
                                    <li>{message.username} says: {message.text}</li>
                                </ul>
                            ))}
                        </ul>
                    </div>
                    <div className={"Chat__ChatSection__InputArea"}></div>
                </div>
            </div>
    )
    );
}

export default observer(Chat);
