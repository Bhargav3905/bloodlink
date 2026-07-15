import donationApi from '../../../services/api/donation.api';

const donationService = {
  createDonation: async (data) => {
    const response = await donationApi.createDonation(data);
    return response.data;
  },

  getDonationHistory: async () => {
    const response = await donationApi.getDonationHistory();
    return response.data;
  },
};

export default donationService;
