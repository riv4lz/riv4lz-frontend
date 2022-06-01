import http from "../http-common";
import {createMatchDTO, Match} from "../stores/eventStore";

class MatchesService {
    getAll() {
        return http.get<Array<Match>>("/Event/GetEvents");
    }
    get(id: any) {
        return http.get<Match>(`/Event/GetEvent?eventId=${id}`);
    }
    create(data: createMatchDTO) {
        return http.post<createMatchDTO>("/Event/CreateEvent", data);
    }
    update(data: Match, id: any) {
        return http.put<any>(`/Event/UpdateEvent?eventId=${id}`, data);
    }
    getTeams() {
        return http.get<any>(`/Event/GetTeams`);
    }
}
export default new MatchesService();
