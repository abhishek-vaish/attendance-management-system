const bcrypt = require("bcryptjs");

exports.hash = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, bcrypt.genSaltSync(10));
};

exports.decrypt = async (plainPassword, hashPassword) => {
  await bcrypt.compare(plainPassword, hashPassword, (err, res) => {
    if (err) {
      return false;
    }
    return true;
  });
};
