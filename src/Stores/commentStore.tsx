import {ChatComment} from "../components/chat/message";
import {HubConnection, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import {makeAutoObservable, observable, runInAction, toJS} from "mobx";

export interface ChatRoom {
    id: number,
    name: string,

}


export default class CommentStore{
    @observable chatRooms: ChatRoom[] = [];
    @observable chatRoom: ChatRoom | undefined;
    comments: ChatComment[] = [];
    hubConnection: HubConnection | null = null;
    editMode = false;
    loading = false;
    loadingInitial = false;
    test: any;

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        console.log("trying to connect");
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

        this.hubConnection.on('LoadRooms', (chatRoom: ChatRoom) => {
            runInAction(() => {
                if (this.chatRooms.length <= 0) {
                    this.chatRooms.push(chatRoom);
                    this.test = chatRoom;
                }
                console.log("fisk 4");
                console.log(toJS(this.chatRooms));
                console.log(this.test);
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

    loadRooms = async () => {
        console.log("commentstore");
        console.log(toJS(this.chatRooms));
        this.hubConnection?.invoke('LoadRooms')
            .catch(error => console.log('Error sending message', error));
        return toJS(this.chatRooms);
    }

}