import api from "../../../api/config";

export const getProductDetails = (id) => api.get(`/products/${id}`);
