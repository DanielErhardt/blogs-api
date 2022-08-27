const BlogPost = (sequelize, DataTypes) => {
  
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });

  };

  return BlogPost;
};

module.exports = BlogPost;
