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
    @observable ChatRooms: any = [];
    @observable test2: any = [];
    @observable test3: any = [];

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl(process.env.REACT_APP_CHAT !== undefined ? process.env.REACT_APP_CHAT : "http://localhost:5000/chat")
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        this.hubConnection.start().catch(error => {});

        this.hubConnection.on('LoadMessages', (comments: room) => {
            runInAction(() => {
                this.test2 = comments;
                this.test3 = comments.messages;
            });
        });

        this.hubConnection.on('LoadRooms', (chatRoom: ChatRoom) => {
            runInAction(() => {
                if (this.chatRooms.length <= 0) {
                    this.chatRooms.push(chatRoom);
                    this.ChatRooms = chatRoom;
                }
            });
        });

        this.hubConnection.on('ReceiveMessage', (comment: string) => {
            runInAction(() => {
                this.comments.push(comment);
                this.test2.messages.push(comment);
                this.test3.push(comment);
            });
        });
    }

    stopHubConnection = () => {
        this.hubConnection?.stop().catch(error => {});
    }

    clearComments = () => {
        this.comments = [];
        this.stopHubConnection();
    }

    addComment = async (message: messageSent) => {
        try {
            await this.hubConnection?.invoke('SendMessage', message);
        } catch (error) {
        }
    }

    loadMessages = async () => {
        this.loadingInitial = true;
        this.hubConnection?.invoke('LoadMessages')
            .then(() => {
                this.loadingInitial = false;
            })
            .catch(error => {});
    }

    sendMessage = async (values: any) => {
        this.hubConnection?.invoke('SendMessage', values)
            .catch(error => {});
    }

    joinRoom = async (roomId: string, previousRoomId: string) => {
        this.hubConnection?.invoke('JoinRoom', roomId, previousRoomId).then(() => {

        })
            .catch(error => {});
    }

    loadRooms = async () => {
        this.hubConnection?.invoke('LoadRooms')
            .catch(error => {});
        return toJS(this.chatRooms);
    }

}
