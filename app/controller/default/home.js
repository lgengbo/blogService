'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // get获取单条数据的方法
    const result = await this.app.mysql.get('blog_content', {});
    this.ctx.body = result;
  }
  // 首页文章简介接口
  async getArticleList() {
    // 左连接 查询article表中type_id对应type表的id,左表所有的查询信息列出，而右表只列出ON后条件与左表满足的部分
    // as 设置别名 在返回json的时候会返回这个设定的
    // FROM_UNIXTIME 转换时间戳为格式 2019-10-18 18:24:02
    const sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime," +
            'article.view_count as view_count,' +
            'type.typeName as typeName ' + // 注意空格
            'FROM article LEFT JOIN type ON article.type_id = type.id';
    // 查询数据
    const results = await this.app.mysql.query(sql);
    // 返回数据
    this.ctx.body = {
      data: results,
    };
  }
  // 获取文章内容，通过id区分
  async getArticleDetails() {
    const id = this.ctx.params.id;

    const sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            'article.article_content as article_content,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime," +
            'article.view_count as view_count,' +
            'type.typeName as typeName,' +
            'type.id as typeId ' + // 注意空格
            'FROM article LEFT JOIN type ON article.type_id = type.id ' +
            'WHERE article.id=' + id;
    // 查询数据
    const results = await this.app.mysql.query(sql);
    // 返回数据
    this.ctx.body = {
      data: results,
    };
  }
  // 获取类型和编号
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = {
      data: result,
    };
  }
  // 根据类别ID获取文章列表
  async getListById() {
	  const id = this.ctx.params.id;
	  const sql = 'SELECT article.id as id,' +
	          'article.title as title,' +
	          'article.introduce as introduce,' +
	          'article.article_content as article_content,' +
	          "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime," +
	          'article.view_count as view_count,' +
	          'type.typeName as typeName,' +
	          'type.id as typeId ' + // 注意空格
	          'FROM article LEFT JOIN type ON article.type_id = type.id ' +
	          'WHERE type_id=' + id;
	  const result = await this.app.mysql.query(sql);
	  this.ctx.body = {
	    data: result,
	  };
  }
}

module.exports = HomeController;
