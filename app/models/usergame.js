const bcrypt = require("bcrypt");
module.exports = (sequelize, DataType) => {
  const UserGame = sequelize.define(
    "UserGame",
    {
      id: {
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
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
        type: DataType.INTEGER,
      },
      level: {
        type: DataType.STRING,
      },
      experience: {
        type: DataType.STRING,
      },
      bio: {
        type: DataType.STRING,
      },
      city: {
        type: DataType.STRING,
      },
      social_media_url: {
        type: DataType.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: async (UserGame, options) => {
          {
            const salt = await bcrypt.genSalt(10);
            UserGame.password = await bcrypt.hash(UserGame.password, salt);
          }
        },
      },
    }
  );

  UserGame.prototype.validPassword = async (inputPassword, userPassword) => {
    return await bcrypt.compare(inputPassword, userPassword);
  };

  return UserGame;
};
