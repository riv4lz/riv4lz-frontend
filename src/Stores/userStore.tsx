import { makeAutoObservable, observable, action } from "mobx";
import userService from "../services/userService";

export interface User {
    id: string
    name: string
    userType: number
    description: string
    profileImageUrl?: string
    bannerImageUrl?: string
    facebookURL: string
    twitterURL: string
    discordURL: string
    twitchURL: string
    websiteURL: string
}


export class UserStore {
    @observable orgs: User[] = [];
    @observable casters: User[] = [];
    @observable user: User = {
        id: '',
        name: '',
        userType: 0,
        description: '',
        profileImageUrl: '',
        bannerImageUrl: '',
        facebookURL: '',
        twitterURL: '',
        discordURL: '',
        twitchURL: '',
        websiteURL: ''
    };


    @action
    loadUsers = (userType: number) => {
        userService.getAll(userType).then((response: any) => {
            if (userType === 1) {
                this.orgs = response.data;
            } else {
                this.casters = response.data;
            }
        })
    }

    @action
    loadUser = async (id: any) => {
        const response = await userService.get(id)
        this.user = response.data;
        console.log(this.user);
        return this.user;
    }

    @action
    setUser = (user: User) => {
        this.user = user;
    }

    @action
    createUserProfile = async (user: User) => {
        const response = await userService.create(user)
        this.user = response.data;
        console.log(this.user);
    }

    @action
    updateUserProfile = (user: User) => {
        userService.update(user)
    }


    constructor() {
        makeAutoObservable(this);
    }
}