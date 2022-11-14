import { HttpGet } from "../ApiRequest";

export const getTransports = (token = null) => {
  return HttpGet("/servicio-transporte/all", token);
};

export const getTransport = (id, token = null) => {
  return HttpGet(`/servicio-transporte/?id=${id}`, token);
};

