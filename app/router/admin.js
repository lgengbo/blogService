'use strict';

// 前台路由
module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth(); // 路由守卫，判断是否登录
  // controller文件夹下找到default文件夹的home.js下的index方法
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin); // 登录接口
  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo); // 文章类型
  router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle); // 添加文章
  router.get('/admin/delArticle/:id', adminauth, controller.admin.main.delArticle); // 删除文章
  router.post('/admin/updateArticle', adminauth, controller.admin.main.updateArticle); // 更新文章
  router.get('/admin/getArticleList', adminauth, controller.admin.main.getArticleList); // 获取文章列表
  router.get('/admin/getArticleById/:id', adminauth, controller.admin.main.getArticleById); // 根据ID获取文章详情
};
