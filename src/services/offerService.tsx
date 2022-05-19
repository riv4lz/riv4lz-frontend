import http from "../http-common";
import { CreateOfferDTO, offer } from "../Stores/offerStore";

class OfferStatus {
    getOffer(id: string) {
        return http.get<offer>(`/Offers/GetOffer?offerId=${id}`);
    }
    getOffers() {
        return http.get<Array<offer>>("/Offers/GetOffers");
    }
    sendOffer(offer: CreateOfferDTO) {
        return http.post<any>(`/Offers/SendOffer`, offer);
    }

}
export default new OfferStatus();