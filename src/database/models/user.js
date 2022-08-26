const User = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'userId',
    });
  };

  return User;
};

module.exports = User;
