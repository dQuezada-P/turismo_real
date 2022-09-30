import { HttpPost } from "../ApiRequest";

export const AuthUser = data => {
    return HttpPost('/auth/login', data)
}