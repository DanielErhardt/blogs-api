const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, { timestamps: false });

  return Category;
};

module.exports = Category;
