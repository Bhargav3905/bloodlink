import analyticsApi from '../../../services/api/analytics.api';

const adminService = {
  getOverview: async () => {
    const response = await analyticsApi.getOverview();
    return response.data;
  },

  getInventorySummary: async () => {
    const response = await analyticsApi.getInventorySummary();
    return response.data;
  },

  getRequestStatistics: async () => {
    const response = await analyticsApi.getRequestStatistics();
    return response.data;
  },

  getDonationStatistics: async () => {
    const response = await analyticsApi.getDonationStatistics();
    return response.data;
  },

  getLowStock: async () => {
    const response = await analyticsApi.getLowStock();
    return response.data;
  },
};

export default adminService;
