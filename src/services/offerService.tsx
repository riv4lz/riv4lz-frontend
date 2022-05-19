import http from "../http-common";
import { CreateOfferDTO, offer } from "../Stores/offerStore";

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

}
export default new OfferStatus();