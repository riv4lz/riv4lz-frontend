import { makeAutoObservable, observable, action } from "mobx";
import authService, { loginDto, registerDto } from "../services/authService";
import casterService from "../services/casterService";

export interface User {
    id: string
    email: string
    token: string
}

export class AuthStore {
    @observable user: User | undefined;
    @observable isCaster: boolean = false;
    @observable isOrg: boolean = false;

    @action
    attemptLogin = async (data: loginDto) => {
        localStorage.clear();
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

    @action
    registerUser = async (data: registerDto) => {
        const response = await authService.registerUser(data);
        this.user = response.data;
        console.log(this.user);
    }

    @action
    isEmailTaken = async (email: string) => {
        const response = await authService.isEmailTaken(email);
        return response.data;
    }

    constructor() {
        makeAutoObservable(this);
    }
}