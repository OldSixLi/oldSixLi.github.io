/*
Navicat MySQL Data Transfer

Source Server         : we
Source Server Version : 50621
Source Host           : 127.0.0.1:3306
Source Database       : music

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2019-02-25 15:02:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mid` int(11) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '作者',
  `authorId` bigint(20) DEFAULT NULL,
  `comment` int(255) DEFAULT NULL,
  `collectid` bigint(20) NOT NULL,
  `createtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`collectid`)
) ENGINE=InnoDB AUTO_INCREMENT=1114262 DEFAULT CHARSET=latin1;
