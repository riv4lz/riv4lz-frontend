import {observer, useObserver} from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import './ChatComponent.scss';
import * as signalR from '@microsoft/signalr'
import {useStore} from "../../../Stores/store";
import {ChatRoom, message, messageSent, room} from "../../../Stores/commentStore";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {Link, Navigate, useNavigate} from "react-router-dom";
import profileImg from '../../../assets/images/Temp/ProfileIMG_Temp.jpg'
import { FaTelegramPlane } from "react-icons/fa";
import Btn from "../../button/Btn";


const ChatComponent = () => {
    let navigate = useNavigate()
    const { commentStore, userStore } = useStore();
    const [localMessage, setLocalMessage] = useState<string>('');
    const [localUserName, setLocalUserName] = useState<string>('');
    const [localMessageId, setLocalMessageId] = useState<string>("ad4cff79-928d-4efc-9e28-a86151a95433");

    const [currentRoomId, setCurrentRoomId] = useState<string>('');
    const [roomId, setRoomId] = useState<string>('');

    useEffect(() => {
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
            Username: userStore.user.name,
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

    const getGameImage = (name: string) => {
        console.log(name);
        switch(name) {
            case "general":
                return "VALORANT";
            case "wow":
                return "WOW";
            case "counter strike":
                return "CSGO";
            case "lol":
                return "LOL";
            default:
                return "WOW";
        }
    }

    return useObserver(() => (
        <div className={"Chat_Container"}>
            <div className={"Chat"}>
                <div className={"Chat__Sidebar"}>
                    <p className={"Chat__Sidebar__Title Text_Secondary H3"}>ROOMS</p>
                    {commentStore.test.map((chatRoom: ChatRoom) => (
                        <div className={"Chat__Sidebar__RoomContainer"} key={chatRoom.id}>
                            <div className={getGameImage(chatRoom.name)} onClick={() => enterRoom(chatRoom.id)}></div>
                        </div>
                    ))}
                </div>
                <div className={"Chat__ChatSection"}>
                    <div className={"Chat__ChatSection__Header H3 Text_Secondary"}>
                        <p className={"Chat__ChatSection__Header_Title"}>{commentStore.test2.name}</p>
                    </div>
                    <div className={"Chat__ChatSection__Body"}>
                            {commentStore.test3.map((message: message, index: number) => (
                                <div className={"Chat__ChatSection__Body__Message"} key={index}>
                                    <img className={"Chat__ChatSection__Body__Message__ProfileImg"} src={profileImg}></img>
                                    <div className={"Chat__ChatSection__Body__Message__TextContainer Text_Secondary"}>
                                        <p className={"Chat__ChatSection__Body__Message__TextContainer__UserName P0_Oxanium"}>{message.username}</p>
                                        <p className={"Chat__ChatSection__Body__Message__TextContainer__TextMessage P4_Poppins"} >{message.text}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className={"Chat__ChatSection__InputArea P4_Poppins Text_Secondary"}>
                        <input className={"Chat__ChatSection__InputArea__InputField P4_Poppins Text_Secondary"} type="text" placeholder="Enter message here.." onChange={e => setLocalMessage(e.target.value)} />
                        <Btn onClick={() => sendMessage()} classes="Chat__ChatSection__InputArea__InputField__SendBtn">
                            <FaTelegramPlane className={"Chat__ChatSection__InputArea__InputField__SendBtn__Icon"} />
                        </Btn>
                    </div>
                </div>
            </div>
        </div>
    )
    );
}

export default ChatComponent;
