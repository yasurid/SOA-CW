<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>ABC Banking Admin Dashboard</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="vendor/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
  <link rel="stylesheet" href="dist/css/style.css">
  <!-- Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="dist/css/skins/skin-green.min.css">
  

  <!-- jQuery 3 -->
<script src="vendor/jquery/jquery.js"></script>
<script src="vendor/jquery/jquery.min.js"></script>
<!-- Chart reference file -->
  <!-- end of datetimepicker -->  

<link href="vendor/bootstrap/dist/css/bootstrap-datepicker.css" rel="stylesheet"/>    
   <!-- end of datetimepicker -->  

<script type="text/javascript" src="dist/js/loader.js"></script>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
 <link href="dist/css/customstyle.css" rel="stylesheet"/>      
                      

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
    <!--
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"> 
-->
<script>
var now = new Date();
var hrs = now.getHours();
var msg = "";

if (hrs >  0) msg = "Good morning"; // REALLY early
if (hrs >  6) msg = "Good morning";      // After 6am
if (hrs >= 12) msg = "Good afternoon";    // After 12pm
if (hrs > 17) msg = "Good evening";      // After 5pm
if (hrs > 22) msg = "Good evening";        // After 10pm

//alert(msg);
</script> 
<!--
<script>
     var time = new Date().getTime();
     $(document.body).bind("mousemove keypress", function(e) {
         time = new Date().getTime();
     });

     function refresh() {
         if(new Date().getTime() - time >= 60001) 
             window.location.reload(true);
         else 
             setTimeout(refresh, 10000);
     }

     setTimeout(refresh, 10000);
</script> 
-->
</head>
<?php
/*
 if(time() - $_SESSION['timestamp'] > 60) { //subtract new timestamp from the old one
 //   echo"<script>alert('15 Minutes over!');</script>";    
    $_SESSION['logged_in'] = false;
    header("Location:logout.php"); //redirect to index.php
    exit;
} else {
    $_SESSION['timestamp'] = time(); //set new timestamp
}
*/
?>
<body class="hold-transition skin-green sidebar-mini">
<div class="wrapper">

  <header class="main-header">
    <!-- Logo -->
    <a href="home.php" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><!--<b>My</b>--><img src="images/dialog-information40x40.png"></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>ABC Bank</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
           <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span> Hi <?php echo $_SESSION['userName'];?>, <i><script>document.write(msg);</script></i>&nbsp;<i class="fa fa-sort-desc"></i></span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                
                <p>
                  <input type="hidden"  id='txtEPF' name ='txtEPF' value="<?php echo $_SESSION['username']; ?>" />
                  <input type="hidden"  id='txt' name ='txt' value="<?php echo $_SESSION['username']; ?>" />
                 <strong><?php echo $_SESSION['userName'];?></strong><br>
                 <?php echo $_SESSION['userName']; ?>
                  <small><?php echo $_SESSION['usertype']; ?> </small>
                </p>
              </li>
              
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="settings.php" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="logout.php" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          
        </ul>
      </div>
    </nav>
  </header>