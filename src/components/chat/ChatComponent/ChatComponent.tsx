import {observer, useObserver} from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import './ChatComponent.scss';
import * as signalR from '@microsoft/signalr'
import {useStore} from "../../../stores/store";
import {ChatRoom, message, messageSent, room} from "../../../stores/commentStore";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {Link, Navigate, useNavigate} from "react-router-dom";
import profileImg from '../../../assets/images/Temp/ProfileIMG_Temp.jpg'
import { FaTelegramPlane } from "react-icons/fa";
import Btn from "../../button/Btn";
import ProfileImagePlaceholder from "../../../assets/images/Temp/ProfileImagePlaceholder.jpg"


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
            userId: userStore.user.id,
            profileImageUrl: userStore.user.profileImageUrl,
        }
        commentStore.addComment(message).then(() => {
        });
        console.log(message);
        console.log(userStore.user.id);
    }

    const enterRoom = (id: string, ) => {
        setCurrentRoomId("ad4cff79-928d-4efc-9e28-a86151a95436");
        commentStore.joinRoom(id, currentRoomId).then(() => {
        });

    }

    const getGameImage = (name: string) => {
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

    const handleOwnMessage = (id: string) => {
        console.log("fisk");
        console.log(id);
        if (id === userStore.user.id) {
            console.log("true");
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className={"[ ChatComponent ]"}>
            <div className={"ChatComponent__Wrapper    { margin-bottom-xxl }"}>
                <div className={"[ ChatSideBar ]"}>
                    <p className={"ChatSideBar__Title    { clr-white h3 font-statewideBold }"}>ROOMS</p>
                    {commentStore.ChatRooms.map((chatRoom: ChatRoom) => (
                        <div className={"[ ChatRoomContainer ]"} key={chatRoom.id}>
                            <div className={getGameImage(chatRoom.name)} onClick={() => enterRoom(chatRoom.id)}></div>
                        </div>
                    ))}
                </div>
                <div className={"[ ChatSection ]"}>
                    <div className={"[ ChatSectionHeader ]    { H3 Text_Secondary"}>
                        <p className={"ChatSectionHeader__Title     clr-white h3 font-statewideBold }"}>{commentStore.test2.name}</p>
                    </div>
                    <div className={"[ ChatSectionBody ]"}>
                            {commentStore.test3.map((message: message, index: number) => (
                                <div className={`[ ChatMessage ]    { Text_Secondary } ${handleOwnMessage(message.userId) ? 'is-active' : ''}  ` } key={index}>
                                    <img className={`ChatMessage__ProfileImg ${handleOwnMessage(message.userId) ? 'hidden' : ''} `} src={message.profileImageUrl ? message.profileImageUrl : ProfileImagePlaceholder }></img>
                                    <div className={`[ ChatMessageText ] ${handleOwnMessage(message.userId) ? 'right-align' : 'left-align'}  ` }>
                                        <p className={"ChatMessageText__Username    { P0_Oxanium"}>{message.username}</p>
                                        <p className={"ChatMessageText__TextMsg    { P4_Poppins"} >{message.text}</p>
                                    </div>
                                    <img className={`ChatMessage__ProfileImg ${handleOwnMessage(message.userId) ? '' : 'hidden'}  `} src={message.profileImageUrl ? message.profileImageUrl : ProfileImagePlaceholder }></img>
                                </div>
                            ))}
                    </div>
                    <div className={"[ ChatInputArea ]    { P4_Poppins Text_Secondary"}>
                        <input
                            className={"ChatInputArea__InputField    { P4_Poppins Text_Secondary"}
                            type="text"
                            placeholder="Enter message here.."
                            onChange={e => setLocalMessage(e.target.value)}
                        />
                        <Btn onClick={() => sendMessage()} classes="ChatInputArea__SendBtn">
                            <FaTelegramPlane className={"ChatInputArea__SendBtn__Icon"} />
                        </Btn>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(ChatComponent);
