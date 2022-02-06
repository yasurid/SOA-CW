-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2022 at 07:51 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbabcapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblaccount`
--

CREATE TABLE `tblaccount` (
  `accountId` int(11) NOT NULL,
  `accountNo` int(100) NOT NULL,
  `customerId` int(11) NOT NULL,
  `accountBalance` decimal(10,2) NOT NULL,
  `overdraft` decimal(10,2) NOT NULL,
  `accountType` varchar(100) NOT NULL,
  `accountCategory` varchar(100) NOT NULL,
  `accountStatus` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblaccount`
--

INSERT INTO `tblaccount` (`accountId`, `accountNo`, `customerId`, `accountBalance`, `overdraft`, `accountType`, `accountCategory`, `accountStatus`) VALUES
(1, 725165623, 1, '500000.00', '0.00', 'save2', 'Saving', 'Active'),
(2, 268443674, 2, '120000.00', '0.00', 'save2', 'Saving', 'Active'),
(3, 970774334, 2, '5000.00', '0.00', 'save2', 'Saving', 'Active'),
(4, 493872854, 1, '250.00', '0.00', 'Save1', 'Saving', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `tblcustomer`
--

CREATE TABLE `tblcustomer` (
  `customerId` int(11) NOT NULL,
  `customerName` varchar(200) NOT NULL,
  `address` varchar(500) NOT NULL,
  `contactNo` varchar(15) NOT NULL,
  `createdDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcustomer`
--

INSERT INTO `tblcustomer` (`customerId`, `customerName`, `address`, `contactNo`, `createdDate`, `status`) VALUES
(1, 'kanchana Yapa', 'Kegalle', '0352212541', '2022-02-05 13:12:18', 'active'),
(2, 'kanchana Yapa', 'Kegalle', '0352212541', '2022-02-05 13:14:31', 'active'),
(3, 'kanchana Yapa', 'Kegalle', '0352212541', '2022-02-05 13:18:16', 'active'),
(4, 'kanchana Yapa', 'Kegalle', '0352212541', '2022-02-05 13:19:08', 'active'),
(5, 'kanchana Yapa', 'Kegalle', '0352212541', '2022-02-05 13:19:46', 'active'),
(6, 'kanchana Yapa', 'Kegalle', '0352212541', '2022-02-05 13:20:35', 'active'),
(7, 'asdasd', 'dfsdfsdfs', 'sdfsdf', '2022-02-05 13:24:51', 'active'),
(8, 'asdasd', 'dfsdfsdfs', 'sdfsdf', '2022-02-05 13:25:00', 'active'),
(9, 'asdasd', 'dfsdfsdfs', 'sdfsdf', '2022-02-05 13:27:25', 'active'),
(10, 'asdasd', 'dfsdfsdfs', 'sdfsdf', '2022-02-05 13:28:17', 'active'),
(11, 'Yasuri Jayasinghe', 'Katunayaka', '0712541254', '2022-02-05 14:06:08', 'active'),
(12, 'yasuri', 'sdfsdf', '3345345', '2022-02-05 14:10:11', 'active'),
(13, 'sdfsdf', 'hdfhdfh', '34534', '2022-02-05 14:11:30', 'active'),
(14, 'afasf asf', 'adfsdf sdf', '234234', '2022-02-05 14:12:43', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `tblcustomerlogin`
--

CREATE TABLE `tblcustomerlogin` (
  `custLoginId` int(11) NOT NULL,
  `custUserName` varchar(15) NOT NULL,
  `custPassword` varchar(15) NOT NULL,
  `custLoginStatus` varchar(10) NOT NULL,
  `customerId` int(11) NOT NULL,
  `securityKey` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcustomerlogin`
--

INSERT INTO `tblcustomerlogin` (`custLoginId`, `custUserName`, `custPassword`, `custLoginStatus`, `customerId`, `securityKey`) VALUES
(1, 'erandiyapa', '123', 'active', 1, '5555');

-- --------------------------------------------------------

--
-- Table structure for table `tblemplogin`
--

CREATE TABLE `tblemplogin` (
  `empLoginId` int(11) NOT NULL,
  `empUserName` varchar(50) NOT NULL,
  `empPassword` varchar(20) NOT NULL,
  `empUserType` varchar(11) NOT NULL,
  `securityKey` varchar(500) NOT NULL,
  `empId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblemplogin`
--

INSERT INTO `tblemplogin` (`empLoginId`, `empUserName`, `empPassword`, `empUserType`, `securityKey`, `empId`) VALUES
(1, 'erandi.ma@abc.lk', '123', 'user', '1111', 1),
(2, 'yasuri.ex@abc.lk', '123', 'admin', '1111', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tblemployee`
--

CREATE TABLE `tblemployee` (
  `empId` int(11) NOT NULL,
  `empName` varchar(100) NOT NULL,
  `empAddress` varchar(500) NOT NULL,
  `nic` varchar(15) NOT NULL,
  `designationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblemployee`
--

INSERT INTO `tblemployee` (`empId`, `empName`, `empAddress`, `nic`, `designationId`) VALUES
(1, 'E N S Yapa', 'Colombo', '897010736V', 1),
(2, 'Yasuri Hettiarachchi', 'Nugegoda', '91214541V', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbltransaction`
--

CREATE TABLE `tbltransaction` (
  `transactionId` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `transactionType` varchar(10) NOT NULL,
  `toAccount` int(11) NOT NULL,
  `accountHolderName` varchar(500) NOT NULL,
  `bank` varchar(100) NOT NULL,
  `branch` varchar(100) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `transactionTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `transactionStatus` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbltransaction`
--

INSERT INTO `tbltransaction` (`transactionId`, `accountId`, `transactionType`, `toAccount`, `accountHolderName`, `bank`, `branch`, `amount`, `transactionTime`, `transactionStatus`) VALUES
(1, 4, 'debit', 74587458, 'Y A Thilakasiri', 'sampath', 'Kadawatha', '20.00', '2022-02-05 18:12:31', 'success'),
(2, 4, 'debit', 74587458, 'Y A Thilakasiri', 'sampath', 'Kadawatha', '20.00', '2022-02-05 18:19:21', 'success'),
(3, 4, 'debit', 876345345, 'B R Quintas', 'commercial', 'Kegalle', '740.00', '2022-02-05 18:20:00', 'success'),
(4, 4, 'debit', 423432423, 'asd aasdas s', 'sampath', 'Katunayake', '15.00', '2022-02-05 18:20:53', 'success'),
(5, 4, 'debit', 23423423, 'dfsfsd', 'sampath', 'Kadawatha', '43.00', '2022-02-05 18:47:19', 'success'),
(6, 1, 'debit', 5747455, 'R W Karunarathne', 'sampath', 'Kadawatha', '2000.00', '2022-02-05 18:23:44', 'success'),
(7, 4, 'debit', 68678678, 'D A A ssa', 'commercial', 'Kadawatha', '540.00', '2022-02-05 18:25:10', 'success');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblaccount`
--
ALTER TABLE `tblaccount`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `tblcustomer`
--
ALTER TABLE `tblcustomer`
  ADD PRIMARY KEY (`customerId`);

--
-- Indexes for table `tblcustomerlogin`
--
ALTER TABLE `tblcustomerlogin`
  ADD PRIMARY KEY (`custLoginId`);

--
-- Indexes for table `tblemplogin`
--
ALTER TABLE `tblemplogin`
  ADD PRIMARY KEY (`empLoginId`);

--
-- Indexes for table `tblemployee`
--
ALTER TABLE `tblemployee`
  ADD PRIMARY KEY (`empId`);

--
-- Indexes for table `tbltransaction`
--
ALTER TABLE `tbltransaction`
  ADD PRIMARY KEY (`transactionId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblaccount`
--
ALTER TABLE `tblaccount`
  MODIFY `accountId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblcustomer`
--
ALTER TABLE `tblcustomer`
  MODIFY `customerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tblcustomerlogin`
--
ALTER TABLE `tblcustomerlogin`
  MODIFY `custLoginId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tblemplogin`
--
ALTER TABLE `tblemplogin`
  MODIFY `empLoginId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tblemployee`
--
ALTER TABLE `tblemployee`
  MODIFY `empId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbltransaction`
--
ALTER TABLE `tbltransaction`
  MODIFY `transactionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
