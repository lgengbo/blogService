'use strict';

// 前台路由
module.exports = app => {
  const { router, controller } = app;
  // controller文件夹下找到default文件夹的home.js下的index方法
  router.get('/default/index', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList); // 首页文章列表数据
  router.get('/default/getArticleDetails/:id', controller.default.home.getArticleDetails); // 文章详情
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo); // 头部导航信息
  router.get('/default/getListById/:id', controller.default.home.getListById); // 根据类别ID获取文章列表
};
