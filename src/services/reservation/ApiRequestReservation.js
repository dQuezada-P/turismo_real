import { HttpPost } from "../ApiRequest";

export const createRservation = data => {
  return HttpPost('/reserva', data)
}