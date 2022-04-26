import {ChatComment} from "../components/chat/message";
import signalR, {HubConnection, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import {makeAutoObservable, runInAction} from "mobx";

export default class CommentStore{
    comments: string[] = [];
    hubConnection: HubConnection | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7219/chat')
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        this.hubConnection.start().catch(error =>
            console.log('Error establishing the connection', error));

        this.hubConnection.on('LoadMessages', (comments: string[]) => {
            runInAction(() => {
                this.comments = comments;
            });
        });

        this.hubConnection.on('ReceiveMessage', (comment: string) => {
            runInAction(() => {
                this.comments.push(comment);
                console.log("pushed comment!")
            });
        });
    }

    stopHubConnection = () => {
        this.hubConnection?.stop().catch(error => console.log('Error stopping the connection', error));
    }

    clearComments = () => {
        this.comments = [];
        this.stopHubConnection()
    }

    addComment = async (values: string) => {
        try {
            await this.hubConnection?.invoke('SendMessage', values);
        } catch (error) {
            console.log('Error sending message', error);
        }
    }


}