-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Jan 20, 2019 at 08:25 AM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `sampleDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `listitems`
--

CREATE TABLE `listitems` (
  `id` bigint(20) unsigned NOT NULL,
  `name` varchar(20) COLLATE utf32_bin NOT NULL,
  `image` varchar(30) COLLATE utf32_bin NOT NULL,
  `price` float NOT NULL,
  `colors` varchar(50) COLLATE utf32_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

--
-- Dumping data for table `listitems`
--

INSERT INTO `listitems` (`id`, `name`, `image`, `price`, `colors`) VALUES
(1, 'Top Hat', 'images/tophat.jpg', 16.2, '["black","blue","red","grey"]'),
(2, 'Baseball Cap', 'images/baseball.jpg', 20.01, '["black","red","yellow","green"]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `listitems`
--
ALTER TABLE `listitems`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `listitems`
--
ALTER TABLE `listitems`
  MODIFY `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;