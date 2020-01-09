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
  // 查询文件类型
  async getTypeInfo() {
    const resType = await this.app.mysql.select('type');
    this.ctx.body = {
      data: resType,
    };
  }
  // 添加文章
  async addArticle() {
    const temArticle = this.ctx.request.body;
    const result = await this.app.mysql.insert('article', temArticle);
    const insertSuccess = result.affectedRows === 1; // result.affectedRows 插入的行数
    const insertId = result.insertId; // result.insertId 插入的id
    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId,
    };
  }
  // 更新文章
  async updateArticle() {
    const temArticle = this.ctx.request.body;
    const result = await this.app.mysql.update('article', temArticle);
    const insertSuccess = result.affectedRows === 1; // result.affectedRows 插入的行数
    this.ctx.body = {
      isSuccess: insertSuccess,
    };
  }
  // 删除文章
  async delArticle() {
    const id = this.ctx.params.id;
    const result = await this.app.mysql.delete('article', {'id':id});
    this.ctx.body = {
      data: result,
    };
  }
  // 
  // 获取文章列表
  async getArticleList() {
    // 左连接 查询article表中type_id对应type表的id,左表所有的查询信息列出，而右表只列出ON后条件与左表满足的部分
    // as 设置别名 在返回json的时候会返回这个设定的
    // FROM_UNIXTIME 转换时间戳为格式 2019-10-18 18:24:02
	// ORDER BY article.id DESC 以文章的article.id倒叙排列
    const sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime," +
            'article.view_count as view_count,' +
            'type.typeName as typeName ' + // 注意空格
            'FROM article LEFT JOIN type ON article.type_id = type.id ' + 
			'ORDER BY article.id DESC';
    // 查询数据
    const results = await this.app.mysql.query(sql);
    // 返回数据
    this.ctx.body = {
      data: results,
    };
  } 
  // 根据ID获取文章详情
  async getArticleById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
			'article.article_content as article_content,' +
			'type.id as typeId,'+
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d') as addTime," +
            'article.view_count as view_count,' +
            'type.typeName as typeName ' + // 注意空格
            'FROM article LEFT JOIN type ON article.type_id = type.id ' + 
			'WHERE article.id =' + id;
    // 查询数据
    const results = await this.app.mysql.query(sql);
    // 返回数据
    this.ctx.body = {
      data: results,
    };
  }
}

module.exports = MainController;
