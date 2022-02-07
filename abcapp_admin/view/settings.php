<?php
session_start();
if(isset($_SESSION['userName']))
{
include("includes/header.php");
include("includes/leftNav.php");
?>
<script>
$(document).ready(function() {
    $("video").bind("contextmenu",function(){
        return false;
        });
 } ); 
</script>
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
        <!-- /.col -->
        <div class="col-md-12">
       

      <div class="row">
        <div class="col-md-6">
          <!-- About Me Box -->
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">Reset Password</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
            <form action="#">
            <lable class="text-danger" id ="lblAllErors">Fill all fields before continue!</lable>
                <div class="form-group">
                    <label for="email">Current Password:</label>
                    <input type="password" class="form-control" id="currentPassword">
                    <lable class="text-danger" id ="lblInvalidCurrentPassword">Current password is invalid!</lable>
                </div>
                <div class="form-group">
                    <label for="pwd">New Password:</label>
                    <input type="password" class="form-control" id="pwd">
                </div>

                <div class="form-group">
                    <label for="pwd">Re- Enter Password:</label>
                    <input type="password" class="form-control" id="pwd2">
                </div>
                <lable class="text-danger" id ="lblPasswordMismatch">Password Mismatch!</lable>
               <br>
                <button type="button" id="btnPasswordReset" class="btn btn-default">Submit</button>
                </form>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- ./col -->
       
        
        
        </div>
        <!-- ./col -->
      </div>
      <!-- /.row -->
        </div>  
      

      <!-- /.row -->    
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <!-- Tender HistoryModel -->



    <!--start Modal Agenda pdf-->



<?php
include("includes/footer.php");
?>
</div>
<!-- ./wrapper -->
<!-- Java script goes here -->
</body>
</html>
<?php
}else{
	header("Location:index.php");
	}
?>
<script src="dist/js/jquery-1.8.3.min.js"></script>

<script>
$(document).ready(function() {

});
    

</script>
