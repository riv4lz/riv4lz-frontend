import { makeAutoObservable, observable, action } from "mobx";
import authService, { loginDto } from "../services/authService";

export interface Team {
}

export class TeamStore {
    @observable team: Team | undefined;

    @action
    getTeams = async (data: loginDto) => {
        const response = await authService.attemptLogin(data);
    }

    constructor() {
        makeAutoObservable(this);
    }
}
