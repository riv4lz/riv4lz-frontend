import http from "../http-common";
import {Caster} from "../Stores/casterStore";

class CasterService {
    getAll() {
        return http.get<Array<Caster>>("/Caster/GetAll");
    }
    get(id: string) {
        return http.get<Caster>(`/Caster/GetCasterProfile/${id}`);
    }
    create(data: Caster) {
        return http.post<Caster>("/Caster/RegisterCasterProfile", data);
    }
    update(data: Caster, id: any) {
        return http.put<any>(`/Caster/UpdateCasterProfile/${id}`, data);
    }
    delete(id: any) {
        return http.delete<any>(`/Caster/DeleteCaster/${id}`);
    }
    findByGamerTag(gamerTag: string) {
        return http.get<Array<Caster>>(`/tutorials?gamerTag=${gamerTag}`);
    }
}
export default new CasterService();