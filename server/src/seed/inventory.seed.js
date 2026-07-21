import Inventory from "../models/inventory.model.js";
import { BLOOD_GROUPS } from "../constants/index.js";

const seedInventory = async () => {
  for (const bloodGroup of BLOOD_GROUPS) {
    const exists = await Inventory.findOne({ bloodGroup });

    if (!exists) {
      await Inventory.create({
        bloodGroup,
        quantity: 0,
      });
    }
  }
};

export default seedInventory;
