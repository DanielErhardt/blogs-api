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
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategories',
    });
  };

  return PostCategory;
}

module.exports = PostCategory;