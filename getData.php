<?php
require 'connect.php';

$query="SELECT * FROM `places`";
if($is_query_run=query($query)){
	echo " query executed".'<br>';
	while($query_execute=mysqli_fetch_assoc($is_query_run)){

		echo '<table id="addtable" border=".5" cellpadding="2.5" cellspacing=".75">
	        <tr>
	          <td>'.$query_execute['Name'].'</td>
	          <td>'.$query_execute['Email'].'</td>
	          <td>'.$query_execute['Location'].'</td>
	          <td>'.$query_execute['Info'].'</td>
	          <td>'.$query_execute['Date'].'</td>
	          <td>'.$query_execute['Latitude:Longitude'].'</td>
	        </tr>
	        </table>';
			// echo $query_execute['Name'].'<br>';
	}
}
else{
	echo " query not executed";
}


?>