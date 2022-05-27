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
                        <p className={"ChatSectionHeader__Title"}>{commentStore.test2.name}</p>
                    </div>
                    <div className={"[ ChatSectionBody ]"}>
                            {commentStore.test3.map((message: message, index: number) => (
                                <div className={"[ ChatMessage ]"} key={index}>
                                    <img className={"ChatMessage__ProfileImg"} src={profileImg}></img>
                                    <div className={"[ ChatMessageText ]    { Text_Secondary"}>
                                        <p className={"ChatMessageText__Username    { P0_Oxanium"}>{message.username}</p>
                                        <p className={"ChatMessageText__TextMsg    { P4_Poppins"} >{message.text}</p>
                                    </div>
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
