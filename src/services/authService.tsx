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
    userType: number;
}

class AuthService {
    isEmailTaken(email: string) {
        return http.get<boolean>(`/Auth/IsEmailTaken/${email}`);
    }
    registerUser(data: registerDto) {
        return http.post<User>("/Auth/RegisterUser", data);
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

    async isEmailTaken(email: string) {
        return http.get<boolean>(`/Auth/IsEmailTaken?email=${email}`);
    }
}
export default new AuthService();