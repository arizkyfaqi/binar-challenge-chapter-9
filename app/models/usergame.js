// const bcrypt = require("bcrypt");
module.exports = (sequelize, DataType) => {
  const UserGame = sequelize.define("UserGame", {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV4,
    },
    username: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
    total_score: {
      type: DataType.STRING,
      allowNull: false,
    },
    level: {
      type: DataType.STRING,
      allowNull: false,
    },
    experience: {
      type: DataType.STRING,
      allowNull: false,
<<<<<<< HEAD
    },
=======
    },    
>>>>>>> 1c181101aaf52eb3ba3dacc86f984cdff3307fde
    bio: {
      type: DataType.STRING,
      allowNull: false,
    },
    city: {
      type: DataType.STRING,
      allowNull: false,
    },
    social_media_url: {
      type: DataType.STRING,
      allowNull: false,
    },
  });

  // UserGame.prototype.validPassword = async (inputPassword, userPassword) => {
  //   return await bcrypt.compare(inputPassword, userPassword);
  // };

  return UserGame;
};
