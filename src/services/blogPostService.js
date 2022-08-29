const { BlogPost, Category, PostCategory, User } = require('../database/models');
const RequestError = require('../utils/RequestError');

// https://sequelize.org/docs/v6/core-concepts/model-instances/

const postService = {
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
      where: { id: categoryIds },
    });

    if (count !== categoryIds.length) throw RequestError.nonexistentCategoryIds(); 

    const createdPost = await BlogPost.create({ userId, title, content });
    const bulk = categoryIds.map((id) => ({ postId: createdPost.id, categoryId: id }));
    await PostCategory.bulkCreate(bulk);

    return createdPost;
  },

  edit: async ({ postId, userId, title, content }) => {
    const post = await postService.findByPk(postId);
    if (post.userId !== userId) throw RequestError.unauthorizedUser();
    post.set({ title, content });
    await post.save();
    return post;
  },

  destroy: async ({ postId, userId }) => {
    const post = await postService.findByPk(postId);
    if (post.userId !== userId) throw RequestError.unauthorizedUser();
    await post.destroy();
  },
};

module.exports = postService;
