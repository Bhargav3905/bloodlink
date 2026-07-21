import User from "../models/user.model.js";
import { USER_ROLES } from "../constants/index.js";

const seedAdmin = async () => {
  const existingAdmin = await User.findOne({
    role: USER_ROLES.ADMIN,
  });

  if (existingAdmin) {
    return;
  }

  await User.create({
    fullName: process.env.ADMIN_NAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    phone: process.env.ADMIN_PHONE,
    city: process.env.ADMIN_CITY,
    role: USER_ROLES.ADMIN,
    isApproved: true,
  });
};

export default seedAdmin;
