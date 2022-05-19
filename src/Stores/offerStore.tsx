import { makeAutoObservable, observable, action } from "mobx";
import offerService from "../services/offerService";
import { Caster } from "./casterStore";

export interface offer {
    id: string
    offerStatus: number
    caster: Caster
}

export interface CreateOfferDTO {
    id: string
    offerStatus: number
    casterId: string
    eventId: string
}

export interface acceptRejectOfferDTO {
    id: string
    offerStatus: number
}

export class OfferStore {

        @observable offers: offer[] = [];
        @observable offer: offer = {
        id: '',
        offerStatus: 0,
        caster: {
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
        }
    };

    @action
    sendOffer = async (offer: CreateOfferDTO) => {
        offerService.sendOffer(offer)
    }

    @action
    getOffers = async () => {
        const response = await offerService.getOffers()
        this.offers = response.data
        return this.offers
    }

    getOffer = async (id: string) => {
        const response = await offerService.getOffer(id)
        this.offer = response.data
        return this.offer
    }

    @action
    declineOffer(id: any) {
        console.log(id);
        
    }

    @action
    acceptOffer(id: any) {
        console.log(id);
        
    }

    constructor() {
        makeAutoObservable(this);
    }
}