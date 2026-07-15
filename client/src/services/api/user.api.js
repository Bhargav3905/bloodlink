import axiosInstance from './axiosInstance';

const userApi = {
  // Profile
  getProfile: () => axiosInstance.get('/users/me'),

  updateProfile: (data) => axiosInstance.patch('/users/profile', data),

  // Admin User Management
  getUsers: (params) => axiosInstance.get('/users', { params }),

  getPendingUsers: () => axiosInstance.get('/users/pending'),

  approveUser: (id) => axiosInstance.patch(`/users/${id}/approve`),

  rejectUser: (id) => axiosInstance.patch(`/users/${id}/reject`),
};

export default userApi;
