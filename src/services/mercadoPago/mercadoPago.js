import { HttpPost } from "../ApiRequest";

export const getMercadoPago = (data, token) => {
  return HttpPost("/mercadopago", data, token);
};

export const getMercadoPagoWebhook = (idPay) => {
  return HttpPost("/mercadopago/webhook", { id: idPay });
};
