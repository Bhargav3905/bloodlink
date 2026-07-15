import userApi from '../../../services/api/user.api';

const userService = {
  // Profile
  getProfile: async () => {
    const response = await userApi.getProfile();
    return response.data;
  },

  updateProfile: async (data) => {
    const response = await userApi.updateProfile(data);
    return response.data;
  },

  // Users
  getUsers: async (params) => {
    const response = await userApi.getUsers(params);
    return response.data;
  },

  getPendingUsers: async () => {
    const response = await userApi.getPendingUsers();
    return response.data;
  },

  approveUser: async (id) => {
    const response = await userApi.approveUser(id);
    return response.data;
  },

  rejectUser: async (id) => {
    const response = await userApi.rejectUser(id);
    return response.data;
  },
};

export default userService;
