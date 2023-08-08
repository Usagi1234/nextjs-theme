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
-- Table structure for table `supertea`
--

DROP TABLE IF EXISTS `supertea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supertea` (
  `su_teaid` int NOT NULL AUTO_INCREMENT,
  `su_day` varchar(255) DEFAULT NULL,
  `su_mon` varchar(255) DEFAULT NULL,
  `su_year` int DEFAULT NULL,
  `su_time` varchar(255) DEFAULT NULL,
  `su_daparment` varchar(255) DEFAULT NULL,
  `su_mname` varchar(255) DEFAULT NULL,
  `su_job` varchar(255) DEFAULT NULL,
  `su_numstu` int DEFAULT NULL,
  `su_sugges` varchar(255) DEFAULT NULL,
  `is_deleted` int DEFAULT '0',
  PRIMARY KEY (`su_teaid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supertea`
--

LOCK TABLES `supertea` WRITE;
/*!40000 ALTER TABLE `supertea` DISABLE KEYS */;
INSERT INTO `supertea` VALUES (1,'1','ตุลาคม',2566,'10.00','IT subport','นนนี่','HR',3,'-',0),(2,'5','ตุลาคม',2566,'10.00','IT subport','นนนี่','HR',2,'-',0),(3,'10','ตุลาคม',2566,'10.00','Tester','แป้ง','HR',2,'-',0),(4,'15','ตุลาคม',2566,'10.00','Tester','แป้ง','HR',2,'-',0),(5,'2','12',2023,'1','ผู้ช่วยบริหาร','สมจิตร','ผู้บริหาร',1,'-',0),(6,'1','1',1,'1','1','1','1',1,'1',0);
/*!40000 ALTER TABLE `supertea` ENABLE KEYS */;
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

-- Dump completed on 2023-08-07 13:43:26
