'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql = {
  enable: true, // 是否开启
  package: 'egg-mysql', // 对应依赖包
};

// 跨域配置
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
