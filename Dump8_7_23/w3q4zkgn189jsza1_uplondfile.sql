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
-- Table structure for table `uplondfile`
--

DROP TABLE IF EXISTS `uplondfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uplondfile` (
  `up_id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) DEFAULT NULL,
  `milliseconds` varchar(255) DEFAULT NULL,
  `owner` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `is_deleted` int DEFAULT '0',
  PRIMARY KEY (`up_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uplondfile`
--

LOCK TABLES `uplondfile` WRITE;
/*!40000 ALTER TABLE `uplondfile` DISABLE KEYS */;
INSERT INTO `uplondfile` VALUES (1,'บทที่ 9 การจัดการคุณภาพ-1689930417772.pdf','2023-07-21 09:06:59','admin','2599','cooperative',0),(2,'1689930506964-Curriculum_bachelor_computer64.pdf','2023-07-21 09:08:28','admin','2599','cooperative',0),(3,'บทที่ 9 การจัดการคุณภาพ.pdf-1689930627902','2023-07-21 09:10:29','admin','2599','cooperative',0);
/*!40000 ALTER TABLE `uplondfile` ENABLE KEYS */;
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

-- Dump completed on 2023-08-07 13:42:59
