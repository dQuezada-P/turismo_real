import { HttpGet } from "../ApiRequest";

export const getTransports = (token = null) => {
  return HttpGet("/servicio-transporte/all", token);
};
