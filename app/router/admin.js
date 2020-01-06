'use strict';

// 前台路由
module.exports = app => {
  const { router, controller } = app;
  // controller文件夹下找到default文件夹的home.js下的index方法
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin); // 登录接口
};
