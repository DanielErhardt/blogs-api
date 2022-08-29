const { BlogPost, Category, PostCategory } = require('../database/models');
const RequestError = require('../utils/RequestError');

module.exports = {
  findAll: async () => {

  },

  // findByPk: async (id) => {

  // },

  create: async ({ userId, title, content, categoryIds }) => {
    const { count } = await Category.findAndCountAll({
      where: {
        id: categoryIds,
      },
    });

    if (count !== categoryIds.length) throw RequestError.nonexistentCategoryIds(); 

    const createdPost = await BlogPost.create({ userId, title, content });
    const bulk = categoryIds.map((id) => ({ postId: createdPost.id, categoryId: id }));
    await PostCategory.bulkCreate(bulk);

    return createdPost;
  },

  // edit: async ({ id, title, content }) => {
    
  // },

  // destroy: async (id) => {

  // },
};