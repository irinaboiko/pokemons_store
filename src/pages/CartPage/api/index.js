import api from "../../../api/config";

export const addToCart = (body) => api.post("cart/item", body);
export const editCart = (body) => api.patch("cart/item", body);
export const removeItemFromCart = (id) => api.delete("cart/item", id);
