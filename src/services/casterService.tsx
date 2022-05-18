import http from "../http-common";
import {Caster} from "../Stores/casterStore";

class CasterService {
    getAll() {
        return http.get<Array<Caster>>("/Caster/GetCasterProfiles", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    }
    async get(id: any) {
        return http.get<Caster>(`/Caster/GetCasterProfile?id=${id}`);
    }
    async create(data: Caster) {
        return http.post<Caster>("/Caster/RegisterCasterProfile", data);
    }
    update(data: Caster) {
        return http.put<any>(`/Caster/UpdateCasterProfile/`, data);
    }
    delete(id: any) {
        return http.delete<any>(`/Caster/DeleteCaster/${id}`);
    }
    findByGamerTag(gamerTag: string) {
        return http.get<Array<Caster>>(`/tutorials?gamerTag=${gamerTag}`);
    }
}
export default new CasterService();