import {makeAutoObservable, observable, action} from "mobx";
import authService, { loginDto } from "../services/authService";
import casterService from "../services/casterService";

export interface User {
    id: string
    email: string
    token: string

}

export class AuthStore{
    @observable user: User | undefined;

    @action
    attemptLogin = (data: loginDto) => {
        authService.attemptLogin(data).then((response: any) => {
            this.user = response.data;
            console.log(this.user);
        })
    }

    @action
    getCurrentUser = () => {
        authService.getCurrentUser().then((response: any) => {
            console.log(response);
            this.user = response.data;
        })
    }

    @action
    saveCasters = () => {
    }


    constructor() {
        makeAutoObservable(this);
    }
}