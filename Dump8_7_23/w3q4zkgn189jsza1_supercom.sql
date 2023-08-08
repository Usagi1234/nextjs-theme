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
-- Table structure for table `supercom`
--

DROP TABLE IF EXISTS `supercom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supercom` (
  `su_comid` int NOT NULL AUTO_INCREMENT,
  `su_need` int DEFAULT NULL,
  `su_time` varchar(255) DEFAULT NULL,
  `su_detail` varchar(255) DEFAULT NULL,
  `su_coor` varchar(255) DEFAULT NULL,
  `su_date` varchar(255) DEFAULT NULL,
  `su_sugges` varchar(255) DEFAULT NULL,
  `is_deleted` int DEFAULT '0',
  PRIMARY KEY (`su_comid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supercom`
--

LOCK TABLES `supercom` WRITE;
/*!40000 ALTER TABLE `supercom` DISABLE KEYS */;
INSERT INTO `supercom` VALUES (1,3,'1','ทำ react เป็น','นนนี่','4','-',0),(2,2,'1','ทำเว็บได้','ยักษา','4','-',0),(3,2,'2','-','น้ำหนึ่ง','4','-',0),(4,2,'2','-','แป้ง','4','-',0),(5,1,'1','-','อากหา',NULL,'-',0),(6,1,'1','-','อากหา',NULL,'-',0),(7,1,'1','-','ยยยยย',NULL,'-',0),(8,1,'1','-','อากหา',NULL,'-',0),(9,5,'1','1','-',NULL,'อากหา',0),(10,5,'1','1','-',NULL,'อากหา',0),(11,0,'','','',NULL,'',0),(12,0,'','','',NULL,'',0),(13,0,'','','',NULL,'',0),(14,0,'','','',NULL,'',0),(15,1,'1','dfsgdfsgdfgsd','dasdasda',NULL,'dasdasdasdasd',0),(16,1,'1','กฟหกฟหกฟกห','กฟหกฟหก',NULL,'กฟหกฟหกฟหกฟหก',0),(17,1,'1','dasdasd','dasdasda',NULL,'dcasdasdaasd',0),(18,11,'1','dasdasd','dasdasd',NULL,'dasdasdasdasd',0),(19,1,'1','asdasd','dasdasd',NULL,'asdasdasdasd',0),(20,0,'','','',NULL,'',0),(21,3,'1','dasdasdasdasdasdasxczxxxxxxxxxxx','xxxxxxxxxxxx',NULL,'dasdasdasd',0),(22,2,'1','ddasda','dasd',NULL,'dasdasd',0),(23,1,'1','asdasd','dasdasd',NULL,'asdasdasdasd',0),(24,1,'1','xx','xx',NULL,'xx',0);
/*!40000 ALTER TABLE `supercom` ENABLE KEYS */;
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

-- Dump completed on 2023-08-07 13:42:39
