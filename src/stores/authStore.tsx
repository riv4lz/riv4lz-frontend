import { makeAutoObservable, observable, action } from "mobx";
import authService, { loginDto, registerDto } from "../services/authService";

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
    }

    @action
    getCurrentUser = async () => {
        const response = await authService.getCurrentUser()
        this.user = response.data;
    }

    @action
    registerUser = async (data: registerDto) => {
        localStorage.clear();
        const response = await authService.registerUser(data);
        this.user = response.data;
    }

    @action
    isEmailTaken = async (email: string) => {
        const response = await authService.isEmailTaken(email);
        return response.data;
    }

    @action
    logout = () => {
        localStorage.clear();
        this.user = undefined;
    }

    constructor() {
        makeAutoObservable(this);
    }
}