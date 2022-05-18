import signalR, {HubConnection, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import {makeAutoObservable, observable, runInAction, toJS, autorun, action} from "mobx";

export interface ChatRoom {
    id: string,
    name: string,

}

export interface test {
    roomId: string,
    previousRoomId: string,
}

export interface room {
    id: string,
    name: string,
    messages: {text: string, username: string}[];
}

export interface message {
    text: string,
    username: string
}

export interface messageSent {
    ChatRoomId: string,
    Id: string,
    Text: string,
    Username: string
}

export default class CommentStore{
    @observable chatRooms: ChatRoom[] = [];
    @observable chatRoom: ChatRoom | undefined;
    @observable comments: string[] = [];
    hubConnection: HubConnection | null = null;
    editMode = false;
    loading = false;
    loadingInitial = false;
    @observable test: any = [];
    @observable test2: any = [];
    @observable test3: any = [];

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        console.log("trying to connect");
        this.hubConnection = new HubConnectionBuilder()
            .withUrl('http://70.34.201.1:5000/chat')
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        this.hubConnection.start().catch(error =>
            console.log('Error establishing the connection', error));

        this.hubConnection.on('LoadMessages', (comments: room) => {
            runInAction(() => {
                console.log(comments);
                this.test2 = comments;
                this.test3 = comments.messages;
                console.log("TEXT DATA " + this.test3);
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

        this.hubConnection.on('ReceiveMessage', (comment: string) => {
            runInAction(() => {
                this.comments.push(comment);
                this.test2.messages.push(comment);
                this.test3.push(comment);
                console.log(comment)
            });
        });
    }

    stopHubConnection = () => {
        this.hubConnection?.stop().catch(error => console.log('Error stopping the connection', error));
    }

    clearComments = () => {
        this.comments = [];
        this.stopHubConnection();
    }

    addComment = async (message: messageSent) => {
        try {
            await this.hubConnection?.invoke('SendMessage', message);
        } catch (error) {
            console.log('Error sending message', error);
        }
    }

    loadMessages = async () => {
        console.log("fisk 14");
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

    joinRoom = async (roomId: string, previousRoomId: string) => {
        console.log(this.comments);
        this.hubConnection?.invoke('JoinRoom', roomId, previousRoomId).then(() => {
            console.log("fisk");
            console.log(this.test2);
        })
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
