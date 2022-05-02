import { ChatComment } from "../components/chat/message";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";

export default class CommentStore {
    comments: ChatComment[] = [];
    hubConnection: HubConnection | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl(process.env.REACT_APP_API + '/chat')
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        this.hubConnection.start().catch((error: any) =>
            console.log('Error establishing the connection', error));

        this.hubConnection.on('LoadMessages', (comments: ChatComment[]) => {
            runInAction(() => {
                this.comments = comments;
            });
        });

        this.hubConnection.on('ReceiveMessage', (comment: ChatComment) => {
            runInAction(() => {
                this.comments.push(comment);
            });
        });
    }

    stopHubConnection = () => {
        this.hubConnection?.stop().catch((error: any) => console.log('Error stopping the connection', error));
    }

    clearComments = () => {
        this.comments = [];
        this.stopHubConnection()
    }


}