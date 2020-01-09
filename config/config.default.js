/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576993332573_2841';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 连接数据库
  config.mysql = {
    // database configuration
    client: {
      // 连接地址
      host: 'localhost',
      // 端口
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'gengbo22hao22',
      // 数据库
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // 设置跨域
  config.security = {
    csrf: { // 安全机制，默认是开启,所以设置为false
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: 'http://localhost:3000', // 只允许这个域进行访问接口
    credentials: true, // 允许cooke跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 请求的方法
  };
  
	// 配置 Session
	config.session = {
	  key: 'SESSION_ID', // 设置 Session cookies 里面的 key
	  maxAge: 24 * 3600 * 1000, // 1 天
	  httpOnly: true,
	  encrypt: true,
	  renew: true, // 每次刷新页面，Session 都会被延期。
	};

  // 路由中间件
  // config.middleware = [ 'adminauth' ];
  // config.adminauth = {
  //   enable: true, // 是否开启该中间件，不写默认开启
  //   match: [ '/admin/getTypeInfo' ], // 只匹配指定路由，反之如果只忽略指定路由，可以用ignore
  //   // ignore: ['/'] // 不要与match一起使用，避免冲突
  // };

  return {
    ...config,
    ...userConfig,
  };
};
