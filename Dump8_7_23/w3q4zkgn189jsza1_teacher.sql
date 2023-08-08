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
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `tea_id` int NOT NULL AUTO_INCREMENT,
  `tea_name` varchar(255) DEFAULT NULL,
  `tea_lname` varchar(255) DEFAULT NULL,
  `tea_status` varchar(255) DEFAULT NULL,
  `tea_tel` varchar(255) DEFAULT NULL,
  `curriculum_id` varchar(255) DEFAULT NULL,
  `studygroup_id` varchar(255) DEFAULT NULL,
  `is_deleted` int DEFAULT '0',
  PRIMARY KEY (`tea_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'จารุนันท','พันธงามตา','อาจารย์','065-218-6523','1','2',0),(2,'จิตราพร','ทองคง','อาจารย์','087-456-2589','1','1',0),(3,'นิภาลัย','ใจบุญ','อาจารย์','098-562-1485','1','2',0),(4,'สุวิจักขณ์','สุขทองคำ','อาจารย์','082-499-3651','1','1',0),(5,'สมจิตร','จงจงหอ','อาจารย์','082499358','1','1',0),(6,'dasd','dasd','asdasd','dasd','1','1',0),(7,'asdasd','asdd','asdas','asdasd','asdf','asdf',0),(8,'dasdasd','dasdasd','dsadasd','dasdasd','true','1',0),(9,'dasd','dasd','dasd','d','true','1',0),(10,'กฟหกฟหกกฟหก','กฟหกฟหกฟหก','กฟหกกฟหกฟ','0456456555','1','1',0),(11,'กฟหกฟหก','กฟหกฟห','กฟหก','0420420','1','2',0);
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
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

-- Dump completed on 2023-08-07 13:43:12
