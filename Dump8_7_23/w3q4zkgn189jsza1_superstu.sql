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
-- Table structure for table `superstu`
--

DROP TABLE IF EXISTS `superstu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `superstu` (
  `su_stuid` int NOT NULL AUTO_INCREMENT,
  `su_timein` varchar(255) DEFAULT NULL,
  `su_timeout` varchar(255) DEFAULT NULL,
  `su_holiday` varchar(255) DEFAULT NULL,
  `su_time` varchar(255) DEFAULT NULL,
  `su_work` varchar(255) DEFAULT NULL,
  `su_sugges` varchar(255) DEFAULT NULL,
  `is_deleted` int DEFAULT '0',
  PRIMARY KEY (`su_stuid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `superstu`
--

LOCK TABLES `superstu` WRITE;
/*!40000 ALTER TABLE `superstu` DISABLE KEYS */;
INSERT INTO `superstu` VALUES (1,'8:00','17:00','-','1','ซ่อมอุปกรณ์ IT','-',0),(2,'8:00','17:00','-','2','ซ่อมอุปกรณ์ IT','-',0),(3,'9:00','16:00','-','1','เขียนเว็บ','-',0),(4,'9:00','16:00','-','2','เขียนเว็บ','-',0),(5,'10:00','16:00','เสาร์-อาทิต','1','เป็นผู้บริหาร','-',0),(6,'10:00','16:00','เสาร์-อาทิต','1','เป็นผู้บริหาร','-',0),(7,'5','5','5','5','5','5',0),(8,'8','17','กฟหกฟห','1','กฟหกฟหกฟหกฟหก','แฟหกฟหกฟหกฟหก',0),(9,'5','5','5','5','5','5',0),(10,'8.00','12','dasd','dasd','dasdasd','dasdas',0),(11,'8','17','dasdas','dasdas','dasdasd','dasdasd',0),(12,'8','17','dasd','dasd','dasd','dasd',0),(13,'5','5','5','5','5','5',0),(14,'5','5','5','5','5','5',0);
/*!40000 ALTER TABLE `superstu` ENABLE KEYS */;
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

-- Dump completed on 2023-08-07 13:43:33
