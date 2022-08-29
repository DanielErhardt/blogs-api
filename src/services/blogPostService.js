const { BlogPost, Category, PostCategory, User } = require('../database/models');
const RequestError = require('../utils/RequestError');

module.exports = {
  findAll: async () => BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: 'password' },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  }),

  findByPk: async (id) => {
    const post = await BlogPost.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: 'password' },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });

    if (!post) throw RequestError.postNotFound();
    return post;
  },

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