import { HttpGet, HttpPost, HttpPut } from "../ApiRequest";

export const addReservation = (data, token) => {
  return HttpPost("/reserva", data, token);
};

export const getUserReservations = (data, token) => {
  return HttpGet(`/reserva/by-user?id_user=${data.id_user}`, token);
};

export const cancelReservation = (data, token) => {
  return HttpPut(`/reserva/cancel?id=${data.id_reservation}`, token);
};
