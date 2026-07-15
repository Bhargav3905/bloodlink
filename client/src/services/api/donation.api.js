import axiosInstance from './axiosInstance';

const donationApi = {
  createDonation: (data) => axiosInstance.post('/donations', data),

  getDonationHistory: () => axiosInstance.get('/donations'),
};

export default donationApi;
