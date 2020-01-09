/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50716
Source Host           : localhost:3306
Source Database       : react_blog

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2020-01-09 17:50:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章编号',
  `type_id` int(11) NOT NULL DEFAULT '0' COMMENT '文章类型编号',
  `title` varchar(255) NOT NULL COMMENT '文章标题',
  `article_content` text COMMENT '文章主体内容',
  `introduce` text COMMENT '文章简介',
  `addTime` int(11) DEFAULT NULL COMMENT '文章发布时间',
  `view_count` int(11) NOT NULL DEFAULT '0' COMMENT '浏览次数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '1', '小白视频', '# P01:课程介绍和环境搭建\\n \r\n  [ **M** ] arkdown  E [ **ditor** ] = **Mditor**  \\n \r\n  > Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n \r\n   **这是加粗的文字**\\n\\n \r\n  *这是倾斜的文字*`\\n\\n \r\n  ***这是斜体加粗的文字***\\n\\n \r\n  ~~这是加删除线的文字~~ \\n\\n\r\n  \\`console.log(111)\\` \\n\\n\r\n  # p02:来个Hello World 初始Vue3.0\\n \r\n  > aaaaaaaaa\\n \r\n  >> bbbbbbbbb\\n \r\n  >>> cccccccccc\\n\r\n  ***\\n\\n\\n \r\n  # p03:Vue3.0基础知识讲解\\n \r\n  > aaaaaaaaa\\n \r\n  >> bbbbbbbbb\\n \r\n  >>> cccccccccc\\n\\n\r\n  # p04:Vue3.0基础知识讲解\\n \r\n  > aaaaaaaaa\\n \r\n  >> bbbbbbbbb\\n \r\n  >>> cccccccccc\\n\\n\r\n  #5 p05:Vue3.0基础知识讲解\\n \r\n  > aaaaaaaaa\\n \r\n  >> bbbbbbbbb\\n \r\n  >>> cccccccccc\\n\\n\r\n  # p06:Vue3.0基础知识讲解\\n \r\n  > aaaaaaaaa\\n \r\n  >> bbbbbbbbb\\n \r\n  >>> cccccccccc\\n\\n\r\n  # p07:Vue3.0基础知识讲解\\n \r\n  > aaaaaaaaa\\n \r\n  >> bbbbbbbbb\\n \r\n  >>> cccccccccc\\n\\n', '# P01:课程介绍和环境搭建\\n \r\n  [ **M** ] arkdown  E [ **ditor** ] = **Mditor**  \\n \r\n  > Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n \r\n   **这是加粗的文字**\\n\\n \r\n  *这是倾斜的文字*`\\n\\n \r\n  ***这是斜体加粗的文字***\\n\\n ', '1571394242', '2019');
INSERT INTO `article` VALUES ('2', '2', '小白生活', '小白生活', '小白生活简介2', '1571328000', '2020');
INSERT INTO `article` VALUES ('11', '1', '1', '11', '11', '1578412800', '0');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '类型编号',
  `typeName` varchar(255) NOT NULL COMMENT ' 文章类型名称',
  `orderNum` int(11) NOT NULL COMMENT '类型排序编号',
  `icon` varchar(255) NOT NULL COMMENT '图标',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('1', '视频教程', '1', 'youtube');
INSERT INTO `type` VALUES ('2', '小白生活', '2', 'smile');
INSERT INTO `type` VALUES ('3', '小白技术', '3', 'message');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userName` varchar(255) NOT NULL,
  `passWord` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', '123456');
