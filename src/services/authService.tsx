import http from "../http-common";
import { User } from "../Stores/authStore";

export interface loginDto {
    email: string;
    password: string;
}

class AuthService {
    attemptLogin(data: loginDto) {
        return http.post<User>("/Auth/Login", data);
    }
    getCurrentUser() {
        return http.get<User>(`/Auth/GetCurrentUser`);
    }
}
export default new AuthService();