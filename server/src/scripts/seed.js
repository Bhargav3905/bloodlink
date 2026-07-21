import dotenv from "dotenv";

import connectDB from "../database/index.js";
import seedAdmin from "../seed/admin.seed.js";
import seedInventory from "../seed/inventory.seed.js";

dotenv.config({
  path: "./.env",
});

const runSeeder = async () => {
  try {
    await connectDB();
    await seedAdmin();
    await seedInventory();

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

runSeeder();
