<?php
session_start();
if(isset($_SESSION['userName']))
{
include("includes/header.php");
include("includes/leftNav.php");
?>
<style>
.chart {
  width: 100%; 
  min-height: 450px;
}
.row {
  margin:0 !important;
}
    
rect
{
fill:#00A65A;    
}

.column {
   
  float: left;
  /*width: 33.3%;*/
    
  width: 25%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
     position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    
}

/* The overlay effect - lays on top of the container and over the image */
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  /*background: rgba(0, 0, 0, 0.5);*/ /* Black see-through */
  color: #f1f1f1;
  width: 100%;
   /* max-width: 94%;*/
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 14px;
  padding: 20px;
  text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
.card:hover .overlay {
  opacity: 1;
}

img.bgBlur {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    width: 100%;
    
    }

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
    
.title {
  color: grey;
}
.container1 {
  padding: 0 16px;
}

.container1::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  font-weight: bold;
  background-color: #4CAF50;
  text-align: center;
  cursor: pointer;
  width: 50%;
}

.button:hover {
  background-color: #00A65A;
    font-weight: bold;
}
.button2 {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  font-weight: bold;
  background-color: #00A7D0;
  text-align: center;
  cursor: pointer;
  width: 50%;
}

.button2:hover {
  background-color: #038ead;
    font-weight: bold;
}
    
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
    
</style>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
      <?php echo $_SESSION['ShopName']. " Company Profile";?><!--<?php echo date('D M d, Y H:i');?>-->
      </h1>
      <ol class="breadcrumb">
        <li><a href="home.php"><i class="fa fa-dashboard"></i> Home</a></li>
        <!--<li><a href="#">Examples</a></li>-->
        <li class="active"><?php echo $_SESSION['ShopName']. " Company Profile";?></li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

      <div class="row">
  <div class="column">
    <div class="card">
        <img src="images/team1.jpg" alt="Mike" class="bgBlur">
                    
      <div class="container1">
        <h2>Shop N0:2 </h2>
        <p class="title">Abans</p>
        <p>Location:<strong>Arrival</strong></p> 
         <p>email: <strong>abans3@gmail.com</strong></p>
            <p>Contract start Date: <strong>2020-01-14</strong></p>
            <p>Contract end Date: <strong>2020-09-14</strong></p>
            
       
        </div>
        <div class="overlay">
            <p>Minimum STO Level:210000</p>
<p>confee Rate: 12</p>
<p>Property Name:D-01</p>
<p>sqft: 100.00</p>
<p>agreement Status:active</p>
            <p><button class="button">Sales</button><button class="button2">Payments</button></p>
            
             
        </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="images/team2.jpg" alt="Mike" class="bgBlur">
      
        <div class="container1">
        <h2>Shop N0:2 </h2>
        <p class="title">Abans</p>
        <p>Location:<strong>Arrival</strong></p> 
         <p>email: <strong>abans3@gmail.com</strong></p>
            <p>Contract start Date: <strong>2020-01-14</strong></p>
            <p>Contract end Date: <strong>2020-09-14</strong></p>
            
       
        </div>
        <div class="overlay">
            <p>Minimum STO Level:210000</p>
<p>confee Rate: 12</p>
<p>Property Name:D-01</p>
<p>sqft: 100.00</p>
<p>agreement Status:active</p>
             <p><button class="button">Sales</button><button class="button2">Payments</button></p>
        </div>
        
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="images/team3.jpg" alt="John" class="bgBlur">
      <div class="container1">
        <h2>Shop N0:2 </h2>
        <p class="title">Abans</p>
        <p>Location:<strong>Arrival</strong></p> 
         <p>email: <strong>abans3@gmail.com</strong></p>
            <p>Contract start Date: <strong>2020-01-14</strong></p>
            <p>Contract end Date: <strong>2020-09-14</strong></p>
            
       
        </div>
        <div class="overlay">
            <p>Minimum STO Level:210000</p>
<p>confee Rate: 12</p>
<p>Property Name:D-01</p>
<p>sqft: 100.00</p>
<p>agreement Status:active</p>
             <p><button class="button">Sales</button><button class="button2">Payments</button></p>
        </div>
    </div>
  </div>
          
          
  <div class="column">
    <div class="card">
      <img src="images/team3.jpg" alt="John" class="bgBlur">
      <div class="container1">
        <h2>Shop N0:2 </h2>
        <p class="title">Abans</p>
        <p>Location:<strong>Arrival</strong></p> 
         <p>email: <strong>abans3@gmail.com</strong></p>
            <p>Contract start Date: <strong>2020-01-14</strong></p>
            <p>Contract end Date: <strong>2020-09-14</strong></p>
            
       
        </div>
        <div class="overlay">
            <p>Minimum STO Level:210000</p>
<p>confee Rate: 12</p>
<p>Property Name:D-01</p>
<p>sqft: 100.00</p>
<p>agreement Status:active</p>
             <p><button class="button">Sales</button><button class="button2">Payments</button></p>
        </div>
    </div>
  </div>
</div>
      

        
        

        
        
       
               

      
    
          
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
 <?php
include("includes/footer.php");
?>
</div>
<!-- ./wrapper -->
</body>
</html>
<?php
}else{
	header("Location:index.php");
	}
?>
