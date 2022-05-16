import http from "../http-common";
import { User } from "../Stores/authStore";

export interface loginDto {
    email: string;
    password: string;
}

class AuthService {
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