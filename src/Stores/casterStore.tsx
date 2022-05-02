import {makeAutoObservable, observable, action} from "mobx";
import casterService from "../services/casterService";

export interface Caster {
    bannerImage: string
    casterId: string
    description: string
    discordURL: string
    facebookURL: string
    firstName: string
    gamerTag: string
    lastName: string
    profileImage: string
    twitchURL: string
    twitterURL: string
}

export class CasterStore{
    @observable casters: Caster[] = [];

    @action
    loadCasters = () => {
        casterService.getAll().then((response: any) => {
            this.casters = response.data;
        })
    }

    @action
    saveCasters = () => {
    }

    @action
    addCaster = (caster: string) => {
        this.casters.push();
    }


    constructor() {
        makeAutoObservable(this);
    }
}