import http from "../http-common";
import { User } from "../Stores/authStore";
import { Caster } from "../Stores/casterStore";

export interface loginDto {
    email: string;
    password: string;
}

export interface registerDto{
    id: string;
    email: string;
    password: string;
}

class AuthService {
    registerCaster(data: registerDto) {
        return http.post<User>("/Auth/RegisterCaster", data);
    }
    async attemptLogin(data: loginDto) {
        return http.post<User>("/Auth/Login", data);
    }
    async getCurrentUser() {
        return http.get<User>(`/Auth/GetCurrentUser`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    }
}
export default new AuthService();