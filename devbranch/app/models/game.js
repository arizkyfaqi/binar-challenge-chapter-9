module.exports = (sequelize, DataType) => {
  const Game = sequelize.define("Game", {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV4,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    description: {
      type: DataType.STRING,
      allowNull: false,
    },
    thumbnail_url: {
      type: DataType.STRING,
      allowNull: false,
    },
    game_url: {
      type: DataType.STRING,
      allowNull: false,
    },
    play_count: {
      type: DataType.STRING,
      allowNull: false,
    },
  });

  return Game;
};
