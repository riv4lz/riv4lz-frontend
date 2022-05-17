import { makeAutoObservable, observable, action } from "mobx";
import casterService from "../services/casterService";

export interface Caster {
    id: string
    name: string
    description: string
    profileImage: string | null
    bannerImage: string | null
    facebookURL: string
    twitterURL: string
    discordURL: string
    twitchURL: string
}

export class CasterStore {
    @observable casters: Caster[] = [];
    @observable caster: Caster | undefined;

    @action
    loadCasters = async() => {
        const response = await casterService.getAll()
            this.casters = response.data;
            console.log(this.casters);
       
    }

    @action
    loadCaster = async (id: any) => {
        const response = await casterService.get(id);
        this.caster = response.data;
        console.log(response);
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