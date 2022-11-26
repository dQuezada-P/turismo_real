import { HttpPost } from "../ApiRequest";

export const AuthUser = data => {
    return HttpPost('/auth/login', data)
}

export const ConfirmAccount = data => {
    return HttpPost('/auth/confirm-account', data)
}