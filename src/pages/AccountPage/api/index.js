import api from "../../../api/config";

export const getOrders = () => api.get("order");
export const createOrder = (body) => api.post("order", body);
