import bcrypt from "bcryptjs";

import { CONFIG } from "../settings";

export const hash = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, bcrypt.genSaltSync(CONFIG.SALT));
};

export const decrypt = async (plainPassword, hashPassword) => {
  await bcrypt.compare(plainPassword, hashPassword, (err, res) => {
    if (err) {
      return false;
    }
    return true;
  });
};
