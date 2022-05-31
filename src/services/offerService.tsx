import http from "../http-common";
import { acceptRejectOfferDTO, CreateOfferDTO, offer } from "../stores/offerStore";

class OfferStatus {
    getOffer(id: string) {
        return http.get<offer>(`/Offers/GetOffer?offerId=${id}`);
    }
    getOffers(eventId: string) {
        return http.get<Array<offer>>(`/Offers/GetOffers?eventId=${eventId}`);
    }
    sendOffer(offer: CreateOfferDTO) {
        return http.post<any>(`/Offers/CreateOffer`, offer);
    }

    acceptOffer(offer: acceptRejectOfferDTO) {
        return http.put<boolean>(`/Offers/AcceptOffer`, offer);
    }

    rejectOffer(offer: acceptRejectOfferDTO) {
        return http.put<boolean>(`/Offers/RejectOffer`, offer);
    }
}
export default new OfferStatus();