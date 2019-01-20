<?php
	/*this will serve the list data */
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");

	require_once('mysql_creds.php');

	$output = [
		'success' => false
	];

	$query = "select * from `listitems`";
	$result = mysqli_query($conn, $query);

	$data = [];

	while($row = mysqli_fetch_assoc($result)){
		$data = $row;
	}


?>