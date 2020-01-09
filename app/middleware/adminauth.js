'use strict';

module.exports = options => {
  return async function adminauth(ctx, next) {
    if (ctx) {
      await next();
    } else {
      ctx.body = { data: '没有登录' };
    }
  };
};
