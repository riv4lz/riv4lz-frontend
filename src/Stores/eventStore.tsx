import { makeAutoObservable, observable, action } from "mobx";
import matchesService from "../services/eventService";


export interface Match {
    eventStatus: number
    id: string
    time: string
    teams: Team[]
    price: number
    organisationProfile: organisationProfile
}

export interface Team {
    id: string
    name: string
}

export interface organisationProfile {
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

export interface createMatchDTO {
    id: string
    organisationId: string
    time: string
    description: string
    price: number
    teamOne: Team
    teamTwo: Team
    game: string
}

export class EventStore {
    @observable matches: Match[] = [];
    @observable match: Match | undefined;
    @observable match1: createMatchDTO | undefined;
    @observable teams: Team[] = [];


    @action
    loadMatches = async () => {
        this.matches = [];
        const response = await matchesService.getAll();

        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].eventStatus === 0) {
                this.matches.push(response.data[i])
            }
        }
    }

    @action
    loadMatch = (id: any) => {
        matchesService.get(id).then((response: any) => {
            this.match = response.data;
        })
    }

    @action
    createMatch = (data: createMatchDTO) => {
        console.log(data);
        
        matchesService.create(data)
    }

    @action
    loadTeams = async () => {
        const response = await matchesService.getTeams()
        this.teams = response.data;
        console.log(this.teams);
    }

    constructor() {
        makeAutoObservable(this);
    }
}
