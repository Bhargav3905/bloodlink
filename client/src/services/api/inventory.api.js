import axiosInstance from './axiosInstance';

const inventoryApi = {
  getInventory: () => axiosInstance.get('/inventory'),

  getBloodGroupInventory: (bloodGroup) => axiosInstance.get(`/inventory/${bloodGroup}`),
};

export default inventoryApi;
