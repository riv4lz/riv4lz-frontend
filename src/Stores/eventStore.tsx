import {makeAutoObservable, observable, action} from "mobx";
import matchesService from "../services/eventService";


export interface Match {
    id: string
    time: string
    teams: Team[]
    price: number
    organisationProfile: organisationProfile
}

export interface Team{
    id: string
    name: string
}

export interface organisationProfile{
    id: string
    name: string
    description: string
    profileImage: null
    bannerImage: null
    facebookURL: string
    twitterURL: string
    discordURL: string
    twitchURL: string
    }

export class EventStore{
    @observable matches: Match[] = [];
    @observable match: Match | undefined;

    @action
    loadMatches = () => {
        matchesService.getAll().then((response: any) => {
            this.matches = response.data;
            console.log(this.matches);
        })
    }

    @action
    loadMatch = (id: any) => {
        matchesService.get(id).then((response: any) => {
            this.match = response.data;
        })
    }

    constructor() {
        makeAutoObservable(this);
    }
}