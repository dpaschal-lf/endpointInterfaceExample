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

	if($result){ //check if the query or connection failed
		if( mysqli_num_rows($result) > 0){ //check if we got some data
			while($row = mysqli_fetch_assoc($result)){
				//adding decode of colors to get a sub array
				$row['colors'] = json_decode($row['colors']);
				$data[] = $row;
			}
			$output['success'] = true;
			$output['data'] = $data;
		} else {
			//we had no data
			$output['error'] = 'no data!';
		}
	} else {
		//the query failed
		$output['error'] = 'query failed!';
	}



?>