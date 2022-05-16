import { makeAutoObservable, observable, action } from "mobx";
import authService, { loginDto } from "../services/authService";
import casterService from "../services/casterService";

export interface User {
    id: string
    email: string
    token: string

}

export class AuthStore {
    @observable user: User | undefined;

    @action
    attemptLogin = async (data: loginDto) => {
        const response = await authService.attemptLogin(data);
        this.user = response.data;
        console.log(this.user);
    }

    @action
    getCurrentUser = async () => {
        const response = await authService.getCurrentUser()
        this.user = response.data;
        console.log(this.user);

    }

    constructor() {
        makeAutoObservable(this);
    }
}