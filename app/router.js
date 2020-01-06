'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 引入路由，传入app
  require('./router/default')(app); // 前台
  require('./router/admin')(app); // 后台
};
