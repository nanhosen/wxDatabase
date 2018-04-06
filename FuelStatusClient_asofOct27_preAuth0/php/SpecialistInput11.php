<?php
 // this part will come from login info. Ugh $zone=$_POST['zone']; 
// $zone=478;


 //center id will have to come from login. Totally dreading the log in part. Uggghh
// $center_id=BMG;

 
 //from input form
 $length = $_POST['length'];
 //$zonearray = $_POST['zones1'];
 ////echo"<br />zone:<br />";
 $zonearray = $_POST['zones'];
// print_r($_POST['zones']);
//print_r($zonearray);
 ////echo "<br />";
function stripslashes_deep($value)
{
    $value = is_array($value) ?
                array_map('stripslashes_deep', $value) :
                stripslashes($value);

    return $value;
}
$noquotes = stripslashes_deep($zonearray);
//print_r($noqoutes);
 
$servername = "nn550db001.nwcg.gov";
$username = "gb_Fuel_Status";
$password = "dksoE$#@23JN79";
$dbname = "gb_FuelStatus";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//I think I'll need this page to connect to two different tables to send zone info and thresholds to htem

//Get ERC data for stations in each zone
$XMLData = simplexml_load_file("all_greatbasin_nfdrdate.xml");
$myAr=array();
foreach ($XMLData as $hold){
	if (preg_match('/^7G/',$hold->msgc)){
	$XML_sta_id= (string)$hold->sta_id;
	$XML_sta_nm= (string)$hold->sta_nm;
	$XML_EC=(string)$hold->ec;
	$updated=(string)$hold->nfdr_dt;	
	$myAr[$XML_sta_id]=$XML_EC;

	}
}

for($i=0; $i<$length; $i++)
	{
		////echo "<br /> i: " . $i .  "<br />";	
		$zoneselected = "$zonearray[$i]";
//		//echo "<br /> i: " . $i . "zone: " . $zoneselected . "<br />";	
		$zoneselected1 = stripslashes($zoneselected);
//		//echo trim($zoneselected1, '"');
		$zone = trim($zoneselected1, '"');
		//echo "<br />zone: " . $zone . "<br />";			
		//$active = "active$i";
		//echo "<br /> active value: " . $active . "<br />";			
		//$active = $_POST[$active];
		//echo "<br /> active value: " . $active . "<br />";			
		$cured = "cured$i";
		//echo "<br /> active value: " . $active . "<br />";			
		$cured = $_POST[$cured];
 		$time_threshold = "time_threshold$i";
 		$time_threshold = $_POST[$time_threshold];
		//echo "<br /> time_threshold value: " . $time_threshold . "<br />";	
 //		$critical = $_POST[$critical];
		//echo "<br /> critical value: " . $critical . "<br />";
 		$elevation = "elevation$i";	
		$elevation = $_POST[$elevation];		
		$remarks = "remarks$i";
		$remarks = $_POST[$remarks];
		//echo "<br /> remarks value: " . $remarks . "<br />";
		$ERC_threshold = "ERC_threshold$i";
		$ERC_threshold = $_POST[$ERC_threshold];
 		//$override = "override$i";
		//$override = $_POST[$override];
		$manual = "manual$i";
		$manual = $_POST[$manual];
		//echo"<br />$manual";
 		$critical = "critical$i";
		/////insert whether its critical
		$arrayname = $zone . "ERCs";
		${$arrayname}[]=$myAr[$RAWSID];
/////////Get RAWS stations in each zone
		$sql1 = "SELECT * FROM allRAWS WHERE selected='yes' AND zone='$zone'";
		$result1=$conn->query($sql1);
		if ($result1->num_rows > 0) {
	    	// output data of each row
		    while($row1 = $result1->fetch_assoc()) {
				if($row1["RAWSid"]!=''){
					$RAWSarrayname = $zone . "RAWS";
					$SID = $row1["RAWSid"];
					${$RAWSarrayname}[] = $row1["RAWSid"];
					$STNERC= $myAr[$SID];
					$ERCarrayname = $zone . "ERCs";
					${$ERCarrayname}[] = $STNERC;
		      	}
				//remove blank values with array filter below
				//	print_r(${$RAWSarrayname});
					$zoneERCarray = array_filter(${$ERCarrayname});
					//echo"<br /> $SID ERC = $STNERC<br />";
					//print_r($zoneERCarray);
					$zoneERCsum = array_sum($zoneERCarray);
					//echo"zone erc sum: $zoneERCsum<br />";
					$RAWScount = count($zoneERCarray);
					//echo"zone erc count: $RAWScount<br />";
					$avgname = $zone . "ERCavg";
					//prob have to add an if statement here to make sure not blank and get divide by 0 error
					if($RAWScount!=0){
					${avgname} = $zoneERCsum/$RAWScount;
					//echo"avgname variable : ". ${avgname} . "<br />";
					$empty = no;
					}
					else{
					//	${avgname} = $zoneERCsum;
						${avgname} = nodata;
						$empty = yes;
						//echo"$SID empty<br />";
					}
					$avgERC = ${avgname};
					//echo"avgname newneam : ". $avgERC . "<br />";

				
    		}
		} else {
	    //echo "No RAWS stations have been selected <br />";
		}
		//echo "<br /> override value: " . $override . "<br />";
		if($avgERC>=$ERC_threshold){
			if($manual==notcritical){
				if($expired==yes){
					$critical = "Yes";
				}
				else{//not expired
				$critical = "No";
				}
			}
			else{//override = no
				$critical = "Yes";
			}

		}
		else if($avgERC<$ERC_threshold){
			
			if($manual==critical){
				if($expired==yes){
					$critical = "No";
				}
				else{//not expired
					$critical = "Yes";
				}
			}
			else{//override = no
				$critical = "No";
			}
		}
	else{ //for empty: this is for zones that are empty
		$systemcritical='nodata';
	}
 		$justification = "justification$i";
 		$justification = $_POST[$justification];
		//echo "<br /> justification value: " . $justification . "<br />";
		$notification = "notification$i";
		$notification = $_POST[$notification];
		//echo "<br /> notification value: " . $notification . "<br />";
		
		$sql = "INSERT INTO zonestatus (zone, active, time_threshold, critical, elevation, remarks, updated, cured, ERC_threshold, override, manual, justification, notification)
VALUES ('$zone', '$active', '$time_threshold', '$critical', '$elevation', '$remarks', now(), '$cured', '$ERC_threshold', '$override','$manual', '$justification', '$notification')";
//echo"<br />sql: $sql";

/*	
		$remarks = $_POST[$remarks];
		$remarks = trim($remarks);
		if ($remarks == "")
			{ $remarks = "N/A"; }
	//	$sql = "Insert Into tblstatus (zone, critical, elevation, remarks, updated) Values('$zone', '$status', '$elevation', '$remarks', '$updated')";
	
	*/
	//	$result = mysql_query($sql, $link_id);
	
	if ($conn->query($sql) === TRUE) {
    //echo "New record created successfully<br />";
		echo"Zone $zone successfully updated<br />";
} else {
    //echo "Error: " . $sql . "<br>" . $conn->error;
}


 $sRAWS="sRAWS$i";
 $sRAWS=$_POST[$sRAWS];
  //echo "<br /> sRAWS: " . $sRAWS . "<br />";
  $addRAWS="addRAWS$i";
 $addRAWS=$_POST[$addRAWS];
   //echo "<br /> addRAWS: " . $addRAWS . "<br />";


  $sql2 = "UPDATE allRAWS SET selected='yes' WHERE RAWSid='$addRAWS' OR RAWSid='$addRAWS1'";
  $sql3 = "UPDATE allRAWS SET selected='no' WHERE RAWSid='$sRAWS' OR RAWSid='$sRAWS1'";
  
  if ($addRAWS!=''){
	//echo "add " . $addRAWS . "<br />";
	if ($conn->query($sql2) === TRUE) {
    //echo "New record created successfully<br />";
} else {
    //echo "Error: " . $sql2 . "<br>" . $conn->error;
}
}

if ($sRAWS!=''){
	//echo "delete " . $sRAWS . "<br />";
	if ($conn->query($sql3) === TRUE) {
    //echo "New record created successfully<br />";
} else {
    //echo "Error: " . $sql3 . "<br>" . $conn->error;
}
}

}


//echo "<br />";



/*
if ($sql){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=FuelSpecialistInput6.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=forme.html\">";
}
*/
$conn->close();
//header("FuelStatusMap6.php");
echo"<a href='FuelStatusMap.php'>Check Map</a>";
echo"<br><a href='Login1.php'>Log In</a>";
?>