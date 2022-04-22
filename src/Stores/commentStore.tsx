import {ChatComment} from "../components/chat/message";
import {HubConnection, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import {makeAutoObservable, runInAction} from "mobx";


export default class CommentStore{
    comments: ChatComment[] = [];
    hubConnection: HubConnection | null = null;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl( 'https://localhost:7219/Chat')
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        this.hubConnection.start().catch(error =>
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
        this.hubConnection?.stop().catch(error => console.log('Error stopping the connection', error));
    }

    clearComments = () => {
        this.comments = [];
        this.stopHubConnection()
    }

    loadMessages = async () => {
        this.loadingInitial = true;
        this.hubConnection?.invoke('LoadMessages')
            .then(() => {
                this.loadingInitial = false;
            })
            .catch(error => console.log('Error loading messages', error));
    }

    sendMessage = async (values: any) => {
        this.hubConnection?.invoke('SendMessage', values)
            .catch(error => console.log('Error sending message', error));
    }

}