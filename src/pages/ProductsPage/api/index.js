import api from "../../../api/config";

export const getProducts = (page) => api.get(`/products?page=${page}`);
