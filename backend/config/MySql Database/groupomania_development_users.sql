-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania_development
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (22,'Maxime Paupy','maxime@gmail.com','$2b$10$/SntO7pcSiSPnuHPKI0.Tuwd/A1DjVw.DueT7sn8mOxmy7O3YFLye','bio','http://localhost:5000/images/max1639928357140.jpg','0','2021-12-10 15:37:30','2021-12-19 15:39:17'),(23,'Romain Paupy','romain@gmail.com','$2b$10$Co0e7z35SeMo6eQpeS.hfu2yycktlAjSKj98if58PdCutI75zlKDe','Je m\'apelle Romain. ','http://localhost:5000/images/outrun-vaporwave-hd-wallpaper-preview1639235650026.jpg','0','2021-12-11 14:02:54','2021-12-11 15:14:10'),(26,'Andrew Doe','andrew@gmail.com','$2b$10$1BURKSjOKa4VWaZSgDqeo.LQ3rLoo4mJJt5MtsW7JEayS4n.qFUZa','Je m\'apelle andrew, j\'ai 30 ans ','http://localhost:5000/images/114858345-logiciel-développement-web-concept-de-programmation-langage-de-programmation-abstrait-et-code-de-pro1639823671321.jpg','1','2021-12-14 10:47:50','2021-12-18 10:34:31'),(27,'Julie','julie@gmail.com','$2b$10$0NmSiVwFpMjCmm21WMPsxebFJLnInv9Ns9S7.Asc8bp4KnS50o7Y6','Bonjour je m\'appelle Julie, j\'ai 22 ans et je suis responsable DHR','http://localhost:5000/images/dc097586256d6569149b5e5d2b2ad31639930545999.jpg','0','2021-12-19 16:13:54','2021-12-19 16:15:46');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-19 17:53:15
