import { makeAutoObservable, observable, action } from "mobx";
import casterService from "../services/casterService";

export interface Caster {
    id: string
    name: string
    userType: number
    description: string
    profileImage?: string
    bannerImage?: string
    facebookURL: string
    twitterURL: string
    discordURL: string
    twitchURL: string
    websiteURL: string
}


export class CasterStore {
    @observable casters: Caster[] = [];
    @observable caster: Caster = {
        id: '',
        name: '',
        userType: 0,
        description: '',
        profileImage: '',
        bannerImage: '',
        facebookURL: '',
        twitterURL: '',
        discordURL: '',
        twitchURL: '',
        websiteURL: ''
    };


    @action
    loadCasters = () => {
        casterService.getAll().then((response: any) => {
            this.casters = response.data;
        })
    }

    @action
    loadCaster = (id: any) => {
        casterService.get(id).then((response: any) => {
            this.caster = response.data;
            
        })
    }

    @action
    saveCasters = () => {
    }

    @action
    addCaster = (caster: string) => {
        this.casters.push();
    }
    @action
    setCaster = (caster: Caster) => {
        this.caster = caster;
    }

    @action
    createCasterProfile = async (caster: Caster) => {
        const response = await casterService.create(caster)
        this.caster = response.data;
    }

    @action
    updateCasterProfile = (caster: Caster) => {
        casterService.update(caster)
    }





    constructor() {
        makeAutoObservable(this);
    }
}