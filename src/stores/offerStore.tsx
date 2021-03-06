import { makeAutoObservable, observable, action } from "mobx";
import offerService from "../services/offerService";
import {User} from "./userStore";

export interface offer {
    id: string
    offerStatus: number
    caster: User
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
            profileImageUrl: '',
            bannerImageUrl: '',
            facebookUrl: '',
            twitterUrl: '',
            discordUrl: '',
            twitchUrl: '',
            websiteUrl: ''
        }
    };

    @action
    sendOffer = async (offer: CreateOfferDTO) => {
        await offerService.sendOffer(offer)
    }

    @action
    getOffers = async (eventId: string) => {
        const response = await offerService.getOffers(eventId)
        this.offers = response.data
        return this.offers
    }

    @action
    getOffer = async (id: string) => {
        const response = await offerService.getOffer(id)
        this.offer = response.data
        return this.offer
    }

    @action
    declineOffer = async (offer: acceptRejectOfferDTO) => {
        const response = await offerService.rejectOffer(offer)
        
        return response
    }

    @action
    acceptOffer = async (offer: acceptRejectOfferDTO) => {
        const response = await offerService.acceptOffer(offer)
        
        return response
    }

    constructor() {
        makeAutoObservable(this);
    }
}