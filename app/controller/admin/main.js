'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    // get获取单条数据的方法
    const result = await this.app.mysql.get('type', {});
    this.ctx.body = result;
  }
  // 检测登录
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const passWord = this.ctx.request.body.passWord;

    // 左连接 查询article表中type_id对应type表的id,左表所有的查询信息列出，而右表只列出ON后条件与左表满足的部分
    // as 设置别名 在返回json的时候会返回这个设定的
    // FROM_UNIXTIME 转换时间戳为格式 2019-10-18 18:24:02
    const sql = " SELECT userName FROM user WHERE userName = '" + userName +
                "' AND passWord = '" + passWord + "'";
    // 查询数据
    const results = await this.app.mysql.query(sql);
    console.log(results);
    // 查询到数据
    if (results.length > 0) {
      const openId = new Date().getTime();
      // 返回数据
      this.ctx.session.openId = { openId };
      this.ctx.body = {
        data: '登录成功',
        openId,
      };
    } else {
      // 登录失败
      this.ctx.body = {
        data: '登录失败',
      };
    }
  }
}

module.exports = MainController;
