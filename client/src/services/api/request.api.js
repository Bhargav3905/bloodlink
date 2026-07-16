import axiosInstance from './axiosInstance';

const requestApi = {
  createRequest: (data) => axiosInstance.post('/requests', data),

  getMyRequests: () => axiosInstance.get('/requests/my'),

  getPendingRequests: () => axiosInstance.get('/requests/pending'),

  approveRequest: (id) => axiosInstance.patch(`/requests/${id}/approve`),

  rejectRequest: (id) => axiosInstance.patch(`/requests/${id}/reject`),
};

export default requestApi;
