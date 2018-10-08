/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3307
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3307
 Source Schema         : users

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 09/10/2018 00:10:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'สถิตย์ เรียนพิศ', 'satit', 'e10adc3949ba59abbe56e057f20f883e', 'rianpit@gmail.com');
INSERT INTO `users` VALUES (2, 'John xxxxx', 'nurse', 'e10adc3949ba59abbe56e057f20f883e', 'john@xxxxcom');
INSERT INTO `users` VALUES (9, 'นายทดสอบ เล่นๆ', 'sfdsfdsf', '8589679cc82618914017865f80af9b8f', 'sdfdsfds@sdfsdfdsf.com');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
