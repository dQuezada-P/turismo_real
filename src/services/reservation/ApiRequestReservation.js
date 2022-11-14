import { HttpPost } from "../ApiRequest";

export const addReservation = (data, token) => {
  return HttpPost("/reserva", data, token);
};
