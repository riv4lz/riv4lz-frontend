import { makeAutoObservable, observable, action } from "mobx";
import orgService from "../services/orgService";

export interface Org {
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

export class OrgStore {
    @observable orgs: Org[] = [];
    @observable org: Org = {
        id: '',
        name: '',
        userType: 1,
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
    loadOrgs = () => {
        orgService.getAll().then((response: any) => {
            this.orgs = response.data;
        })
    }

    @action
    loadOrg = (id: any) => {
        orgService.get(id).then((response: any) => {
            this.org = response.data;
        })
    }

    @action
    setOrg = (org: Org) => {
        this.org = org;
    }

    @action
    createOrgProfile = async (org: Org) => {
        const response = await orgService.create(org)
        this.org = response.data;
    }

    @action
    updateOrgProfile = (org: Org) => {
        orgService.update(org)
    }



    constructor() {
        makeAutoObservable(this);
    }
}