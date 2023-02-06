import bcrypt from "bcryptjs";

export const hash = (plainPassword) => {
  return bcrypt.hashSync(plainPassword);
};

export const decrypt = async (plainPassword, hashPassword) => {
  await bcrypt.compare(plainPassword, hashPassword, (err, res) => {
    if (err) {
      return false;
    }
    return true;
  });
};
