import inventoryApi from '../../../services/api/inventory.api';

const inventoryService = {
  getInventory: async () => {
    const response = await inventoryApi.getInventory();
    return response.data;
  },

  getBloodGroupInventory: async (bloodGroup) => {
    const response = await inventoryApi.getBloodGroupInventory(bloodGroup);
    return response.data;
  },
};

export default inventoryService;
