<!DOCTYPE html>
<html lang="en">
<?php
  echo '<script>';
  echo 'var isCritical = ' . file_get_contents("dataArchive.txt") . ';';
  echo 'console.log(isCritical);';
  echo '</script>';
?>
<head>
  <!-- Required meta tags always come first -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta content="ie=edge" http-equiv="x-ua-compatible"><!-- Bootstrap CSS -->
<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css" integrity="2hfp1SzUoho7/TsGGGDaFdsuuDL0LX2hnUp6VkX3CUQ2K4K+xjboZdsXyp4oUHZj" crossorigin="anonymous">
<!-- <link rel="stylesheet" href="ol.css" type="text/css"> -->
<!-- <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="     crossorigin="anonymous"></script> -->
<script src="https://openlayers.org/en/v3.18.2/build/ol.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" integrity="sha384-THPy051/pYDQGanwU6poAc/hOdQxjnOEXzbT+OuUAFqNqFjL+4IGLBgCJC3ZOShY" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js" integrity="sha384-Plbmg8JY28KFelvJVai01l8WyZzrYWG825m+cZ0eDDS1f7d/js6ikvy1+X+guPIB" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/js/bootstrap.min.js" integrity="VjEeINv9OSwtWFLAtmc4JCtEJXXBub00gtSnszmspDLCtC0I4z4nqz7rEFbIZLLU" crossorigin="anonymous"></script>


<title>Fuel Status Map</title>
<!-- <script src="ol.js"></script> -->

<style type="text/css">

body {
  /*background: #394533;*/
  font-family: Montserrat;
}

#map {
  height:906px;
}

.ol-popup {
      position: absolute;
      background-color: white;
      -webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
      filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
      padding: 15px;
      border-radius: 10px;
      border: 1px solid #cccccc;
      bottom: 12px;
      left: -50px;
      min-width: 280px;
    }
.ol-popup:after, .ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
}
.ol-popup-closer:after {
  content: "✖";
}

.btn-primary {
   background-color: #373a3c;
   border-color: #373a3c;
}



</style>
</head>
<body>
<div class="row">
   <div class="col-sm-6">       
       <div class="card">
       <h3 class="card-header" style="text-align:center"> Great Basin Critical Fuel Status</h3>
         <div id="map" class="map"></div>
         <div id="popup" class="ol-popup">
            <a href="#" id="popup-closer" class="ol-popup-closer"></a>
            <div id="popup-content"></div>
         </div> <!--popup -->
         <div id="info" class="card-footer text-muted" style="text-align:center">Observations updated on (Date)</div>
      </div> <!-- card -->
   </div> <!-- column -->
   <div class="col-sm-6">
      <div class="card">
        <h3 class="card-header" id="zoneHeader" style="text-align:center">Zone Information</h3>
        <div class="card-block">
             <p class="card-text" id="zoneHistory" style="width: 100%">Select a Fire Weather Zone on the map for more detailed information</p>
      </div> 
      <nav class="navbar navbar-light bg-faded">
        <ul class="nav pull-right">
          <li class="dropdown" id="menuLogin">
            <a class="dropdown-toggle" href="#" data-toggle="dropdown" id="navLogin"> Fuel Specialist Login</a>
            <div class="dropdown-menu" style="padding:17px;">
              <form class="form" id="formLogin"> 
                  <input list="browsers" name="browser">
                    <datalist id="browsers">
                      <option value="Admin">
                      <option value="AZ-Fleming">
                      <option value="Battle Mountain Group">
                      <option value="BDC-Hislop">
                      <option value="BDC-Low">
                      <option value="Carson City Group">
                      <option value="CDC - Tobler">
                      <option value="CDC-East">
                      <option value="CDC-Harris">
                      <option value="CDC-Shakespear">
                      <option value="CIC-Sever">
                      <option value="EIC-Pipkin">
                      <option value="Elko Group">
                      <option value="Ely Group">
                    </datalist>
                <input name="password" id="password" type="password" placeholder="Password"><br>
                <button type="button" id="btnLogin" class="btn" style="margin-top: 5px;">Login</button>
              </form>
            </div>
          </li>
        </ul>
      </nav>
    </div> 
    <div class="row">

    <div class="col-sm-6">
      <div class="card card-block">
        <h3 class="card-title">Map Legend</h3>
          <ul>
            <li class="list-group-item" style="background-color:#b34f49; border-radius:10px">Red: Zone is critical</li>
            <li class="list-group-item" style="background-color:#faf14c; border-radius:10px">Yellow: Zone is approaching critical</li>
            <li class="list-group-item" style="background-color:#568950; border-radius:10px">Green: Zone is not critical</li>
            <li class="list-group-item" style="background-color:#b0b0b0; border-radius:10px">Grey: Missing Data</li>
          </ul>
      </div>
  </div>
</div>
   </div> <!-- column -->
</div> <!-- row -->

<div id="stuff"></div>

<script src="json2geoEdit.js" defer>


</script>



</body>
</html>

