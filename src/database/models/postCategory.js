const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
  }, { timestamps: false });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostCategories',
      foreignKey: 'categoryId'
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategories',
      foreignKey: 'postId'
    });
  };

  return PostCategory;
}

module.exports = PostCategory;