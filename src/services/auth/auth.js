import { HttpPost } from "../ApiRequest";

export const AuthUser = data => {
    return HttpPost('/usuario/auth', data)
}