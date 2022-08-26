const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostCategories',
      foreignKey: 'postId',
      // otherKey: 'categoryId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategories',
      foreignKey: 'categoryId',
      // otherKey: 'postId',
    });
  };

  return PostCategory;
}

module.exports = PostCategory;