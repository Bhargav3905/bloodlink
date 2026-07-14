import axiosInstance from './axiosInstance';

const analyticsApi = {
  getOverview: () => axiosInstance.get('/analytics/overview'),

  getInventorySummary: () => axiosInstance.get('/analytics/inventory-summary'),

  getRequestStatistics: () => axiosInstance.get('/analytics/request-statistics'),

  getDonationStatistics: () => axiosInstance.get('/analytics/donation-statistics'),

  getLowStock: () => axiosInstance.get('/analytics/low-stock'),

  getBloodDistribution: () => axiosInstance.get('/analytics/blood-distribution'),
};

export default analyticsApi;
