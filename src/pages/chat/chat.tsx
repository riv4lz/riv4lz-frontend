import {observer} from "mobx-react-lite";
import React from "react";
import './chat.scss';

export default observer(function Chat(){
    return <>
        <div className="chat--container">
            <div className="chat--wrapper">
                <div className="section">
                    <div className="chat--main_header">
                        <h1>Welcome to Chat!</h1>
                    </div>
                    <div className="chat--main_messages">
                        <ul>
                            <li>Msg 1</li>
                            <li>Msg 2</li>
                            <li>Msg 3</li>
                            <li>Msg 4</li>
                        </ul>
                    </div>
                </div>
                <div className="chat--input_section">
                    <div className="chat--input_username">
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="chat--input_message">
                        <input type="text" placeholder="Enter message here.."/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>

    </>
})