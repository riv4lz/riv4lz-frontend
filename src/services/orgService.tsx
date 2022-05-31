import http from "../http-common";
import { Org } from "../stores/orgStore";

class OrgService {
    getAll() {
        return http.get<Array<Org>>("/Org/GetOrganisationProfiles", {
        });
    }
    async get(id: any) {
        return http.get<Org>(`/Org/GetOrganisationProfile?id=${id}`);
    }
    async create(data: Org) {
        return http.post<Org>("/Org/RegisterOrganisationProfile", data);
    }
    update(data: Org) {
        return http.put<any>(`/Org/UpdateOrganisationProfile/`, data);
    }
}
export default new OrgService();