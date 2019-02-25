/*
Navicat MySQL Data Transfer

Source Server         : we
Source Server Version : 50621
Source Host           : 127.0.0.1:3306
Source Database       : music

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2019-02-25 15:02:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for music_users
-- ----------------------------
DROP TABLE IF EXISTS `music_users`;
CREATE TABLE `music_users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '网易云用户主键',
  `userID` int(11) NOT NULL,
  `weiboUrl` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '微博地址',
  `nickName` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '网络昵称',
  `selfWord` longtext CHARACTER SET utf8 COMMENT '个性签名',
  `imgUrl` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '用户头像',
  `date` datetime DEFAULT NULL COMMENT '插入数据库时间',
  `level` int(11) DEFAULT NULL,
  `isDel` varchar(255) CHARACTER SET utf8 DEFAULT 'N' COMMENT '是否已删除',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `userid` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=10162 DEFAULT CHARSET=latin1 COMMENT='抓取的网易云音乐用户';
