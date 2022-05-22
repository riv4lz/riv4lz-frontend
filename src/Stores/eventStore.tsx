import { makeAutoObservable, observable, action } from "mobx";
import matchesService from "../services/eventService";


export interface Match {
    eventStatus: number
    id: string
    time: string
    teams: Team[]
    price: number
    organisationProfile: organisationProfile
    game: string
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
    eventStatus: number
    game: string
}

export class EventStore {
    @observable matches: Match[] = [];
    @observable match: Match | undefined;
    @observable match1: createMatchDTO | undefined;
    @observable teams: Team[] = [];
    @observable finished: Match[] = [];
    @observable upcoming: Match[] = [];


    @action
    loadMatches = async () => {
        this.matches = [];
        observable.array(this.upcoming).clear();
        this.finished = [];
        const response = await matchesService.getAll();
        this.matches = response.data.filter(match => match.eventStatus === 0);
    }

    @action
    filterMatches = async (isUpcomming: boolean) => {
        if (isUpcomming) {
            return this.matches.filter((match: Match) => new Date(match.time) > new Date());
        } else {
            return this.matches.filter((match: Match) => new Date(match.time) < new Date());
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
