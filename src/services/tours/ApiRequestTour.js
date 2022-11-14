import { HttpGet } from "../ApiRequest";

export const getTours = (token = null) => {
  return HttpGet("/servicio-tour/all", token);
};

export const getTour = (id,token = null) => {
  return HttpGet(`/servicio-tour/?id=${id}`, token);
};