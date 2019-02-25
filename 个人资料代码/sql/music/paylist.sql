/*
Navicat MySQL Data Transfer

Source Server         : we
Source Server Version : 50621
Source Host           : 127.0.0.1:3306
Source Database       : music

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2019-02-25 15:02:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for paylist
-- ----------------------------
DROP TABLE IF EXISTS `paylist`;
CREATE TABLE `paylist` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `playId` bigint(20) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '歌单名称',
  `href` varchar(255) DEFAULT NULL COMMENT '完整URL:"http://music.163.com/#"',
  `src` varchar(255) DEFAULT NULL,
  `collectnum` int(11) DEFAULT NULL COMMENT '收藏量,单位:万',
  `createtime` datetime DEFAULT NULL COMMENT '收藏时间',
  PRIMARY KEY (`id`,`playId`)
) ENGINE=InnoDB AUTO_INCREMENT=12299 DEFAULT CHARSET=latin1;
