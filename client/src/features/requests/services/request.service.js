import requestApi from '../../../services/api/request.api';

const requestService = {
  createRequest: async (data) => {
    const response = await requestApi.createRequest(data);
    return response.data;
  },

  getMyRequests: async () => {
    const response = await requestApi.getMyRequests();
    return response.data;
  },

  getPendingRequests: async () => {
    const response = await requestApi.getPendingRequests();
    return response.data;
  },

  approveRequest: async (id) => {
    const response = await requestApi.approveRequest(id);
    return response.data;
  },

  rejectRequest: async (id) => {
    const response = await requestApi.rejectRequest(id);
    return response.data;
  },
};

export default requestService;
