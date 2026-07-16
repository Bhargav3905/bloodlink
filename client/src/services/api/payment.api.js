import axiosInstance from './axiosInstance';

const paymentApi = {
  createOrder: (requestId) => axiosInstance.post(`/payments/${requestId}/create-order`),

  verifyPayment: (data) => axiosInstance.post('/payments/verify', data),
};

export default paymentApi;
