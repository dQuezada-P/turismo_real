import { HttpGet } from "../ApiRequest";

export const getTours = (token = null) => {
  return HttpGet("/servicio-tour/all", token);
};
