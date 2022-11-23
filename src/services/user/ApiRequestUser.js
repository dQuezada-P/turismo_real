import { HttpPost } from "../ApiRequest";

export const addUser = (data) => {
  return HttpPost("/usuario", data);
};