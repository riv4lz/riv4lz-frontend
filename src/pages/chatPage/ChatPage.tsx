import {observer, useObserver} from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import './ChatPage.scss';
import TopPartChat from "../../components/chat/TopPartChat/TopPartChat";
import ChatComponent from "../../components/chat/ChatComponent/ChatComponent";



const ChatPage = () => {
    return (
            <div className={"ChatPage"}>
                <TopPartChat />
                <ChatComponent />
            </div>
    );
}

export default ChatPage;
