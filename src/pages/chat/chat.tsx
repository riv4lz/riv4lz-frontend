import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

import './chat.scss';
import * as signalR from '@microsoft/signalr'


const Chat = () => {
    const [clientMessage, setClientMessage] = useState<string[]>([]);
    const messages = clientMessage?.map((message: string) =>
        <li>{message}</li>
    );

    const [connection, setConnection] = useState<signalR.HubConnection>();

    const [localMessage, setLocalMessage] = useState<string>('');


    const connect = () => {
        const hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:7219/chat")
            .configureLogging(signalR.LogLevel.Information)
            .build();

        // Starts the SignalR connection
        hubConnection.start().then(a => {
            // Once started, invokes the sendConnectionId in our ChatHub inside our ASP.NET Core application.
            if (hubConnection.connectionId) {
                hubConnection.invoke("sendConnectionId", hubConnection.connectionId);
            }
        });

        setConnection(hubConnection);
    }

    useEffect(() => {
        connection?.on("ReceiveMessage", (message: string) => {
            setClientMessage([...clientMessage, message]);
        });
    })


    const sendMessage = () => {
        connection?.invoke("SendMessage", localMessage);
        console.log(clientMessage);
    }

    return (
        <div className="chat--container">
            <div className="chat--wrapper">
                <div className="chat--main_section">
                    <div className="chat--main_header">
                        <h1>Welcome to Chat!</h1>
                    </div>
                    <div className="chat--main_messages">
                        <ul>
                            {messages}
                        </ul>
                    </div>
                </div>
                <div className="chat--input_section">
                    <div className="chat--input_username">
                        <input type="text" placeholder="Username" />
                        <button className="chat--message_button" onClick={connect}>Connect</button>
                    </div>
                    <div className="chat--input_message">
                        <input type="text" placeholder="Enter message here.." onChange={e => setLocalMessage(e.target.value)} />
                    </div>
                    <button className="chat--message_button" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat
