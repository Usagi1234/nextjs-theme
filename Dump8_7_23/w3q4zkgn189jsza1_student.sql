-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    Database: w3q4zkgn189jsza1
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `stu_name` varchar(255) DEFAULT NULL,
  `stu_lname` varchar(255) DEFAULT NULL,
  `stu_id` varchar(255) DEFAULT NULL,
  `stu_rmail` varchar(255) DEFAULT NULL,
  `stu_status` varchar(255) DEFAULT NULL,
  `curriculum_id` varchar(255) DEFAULT NULL,
  `studygroup_id` varchar(255) DEFAULT NULL,
  `stu_sex` varchar(255) DEFAULT NULL,
  `is_deleted` int DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'สุวิจักขณ์','สุขทองคำ','63543206041-9','suvijak_su63@live.rmutl.ac.th','กำลังศึกษา','1','1','ชาย',0),(2,'เฌอญานิกา','วงค์ตาแก้ว','62543206008-9','cheryanika_wo62@live.rmutl.ac.th','สำเร็จการศึกษา','1','2','หญิง',0),(3,'ปฏิภาณ','ดำรงไชยณ์','62523206008-1','patipan_du62@live.rmutl.ac.th','สำเร็จการศึกษา','1','1','ชาย',0),(4,'ประภัสษร','เปี้ยสาย','63543206020-3','prapatsorn_pe63@live.rmutl.ac.th','กำลังศึกษา','1','1','หญิง',0),(5,'นนทกานต์','เต็มใจ','62523206021-4','nontakarn_te62@live.rmutl.ac.th','สำเร็จการศึกษา','1','1','ชาย',0),(6,'ปัทมาพร','สุพรรณา','63543206055-7','patamapon_su63@live.rmutl.ac.th','กำลังศึกษา','1','2','หญิง',0),(7,'ดนุพล','เผือกงาน','63543206041-6','danupon_ph65@live.rmutl.ac.th','กำลังศึกษา','2','2','ชาย',0),(8,'ขวัญจิรา','จิรวราพงศ์','64543206056-9','KhwanChiRa_ch64@live.drkpu.ac.th','กำลังศึกษา','1','2','หญิง',0),(9,'ครองขวัญ','ชยธาดากีรติ','64543206080-9','KhrongKhwan_ch64@live.drkpu.ac.th','กำลังศึกษา','1','1','ชาย',0),(10,'ฉันชนก','ธนะปรีดากุล','64543206070-7','ChanChanok_ch64@live.nhpu.ac.th','กำลังศึกษา','1','1','หญิง',0),(11,'จารุพิชญ์','ทรัพย์ภัทรสกุล','64543206065-8','CharuPhit_sa64@live.cpru.ac.th','กำลังศึกษา','1','1','ชาย',0),(12,'asdef','sdvsdv','undefined','undefined','undefined','undefined','undefined','undefined',0),(13,'asdef','sdvsdv','undefined','undefined','undefined','undefined','undefined','undefined',0);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-07 13:42:45
