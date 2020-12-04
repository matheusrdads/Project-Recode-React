CREATE DATABASE  IF NOT EXISTS `recodepro` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `recodepro`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: recodepro
-- ------------------------------------------------------
-- Server version	8.0.21

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

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idproducts` int NOT NULL AUTO_INCREMENT,
  `categories` varchar(45) NOT NULL,
  `descripton` varchar(155) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `finalprice` decimal(8,2) NOT NULL,
  `images` varchar(255) NOT NULL,
  PRIMARY KEY (`idproducts`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'heavymetal','dr sin - alive',15.00,7.00,'./assets/drsin.jpg'),(2,'heavymetal','Mottor Head - Clean your clok',10.00,6.99,'./assets/mottorhead.jpg'),(3,'heavymetal','Iron Maiden - killers',18.00,16.00,'./assets/iron-maiden-killers.jpg'),(4,'thrashmetal','Destruction - Born To Thrash - Live',10.00,6.99,'./assets/destuction.jpg'),(5,'thrashmetal','Krisiun - Assassination',10.00,6.99,'./assets/krisiun.jpg'),(6,'thrashmetal','Sepultura - Roots',11.00,8.00,'./assets/roots.jpg'),(7,'thrashmetal','Sepultura - the madiatror between Head',10.00,6.99,'./assets/sepultura.jpg'),(8,'progressivemetal','Dee purple - Machine head',11.00,8.00,'./assets/deeppurple.jpg'),(9,'folkmetal','Tuatha de danna - The tribes of witching souls',15.00,7.00,'./assets/tuathadedanna.jpg'),(10,'hardrock','Aerosmith - The millennium collection',10.00,6.99,'./assets/aerosmith.jpg'),(11,'hardrock','Aerosmith - Permanent Vacation',15.00,14.00,'./assets/tuathadedanna.jpg'),(12,'blackmetal','Cradle of filth - Cruel and the beast',11.00,6.99,'./assets/cradleoffilth.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-04 15:30:31
