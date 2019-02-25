/*
Navicat MySQL Data Transfer

Source Server         : we
Source Server Version : 50621
Source Host           : 127.0.0.1:3306
Source Database       : music

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2019-02-25 15:03:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_follow
-- ----------------------------
DROP TABLE IF EXISTS `user_follow`;
CREATE TABLE `user_follow` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `userID` int(11) NOT NULL COMMENT '用户ID',
  `followID` int(11) NOT NULL COMMENT '关注者ID',
  `followUserName` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '关注者名称',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31227 DEFAULT CHARSET=latin1;
