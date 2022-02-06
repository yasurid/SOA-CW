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
     Customer
      </h1>
      <ol class="breadcrumb">
        <li><a href="home.php"><i class="fa fa-dashboard"></i> Home</a></li>
        <!--<li><a href="#">Examples</a></li>-->
        <li class="active"><?php echo $_SESSION['userName']. " Profile";?></li>
      
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
              <h3 class="box-title">Accounts</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
             <form>
             <div class="form-group">
                  <label for="exampleInputPassword1">Account No</label>
               <select id="cmbAccountNo" class="form-control">
                  <option value="1">725165623</option>
                  <option value="4">493872854</option>                  
                </select>
              </div>     
            </form>
          </div>
          <!-- /.box -->
        </div>
        <!-- ./col -->
        </div>
         <div class="col-md-6">
          <!-- About Me Box -->
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">Account Information</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
                <table id="example3" class="table table-responsive table-bordered table-striped">
                <thead>
                <tr>
                    <th>Account Id</th>
                    <th >Accout No</th>
                    <th>Account Balance</th>
                    <th>Over draft</th>
                     <th>Account Type</th>
                     <th>Account Category</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody id="custaccountBody">
                </tbody>
                <tfoot>
                <tr>
                   <th>Account Id</th>
                    <th >Accout No</th>
                    <th>Account Balance</th>
                    <th>Over draft</th>
                     <th>Account Type</th>
                     <th>Account Category</th>
                    <th>Status</th>
                </tr>
                </tfoot>
              </table>
          </div>
          <!-- /.box -->
        </div>
        <!-- ./col -->
        </div>
        <!-- ./col -->
      </div>
            
          <div class="row">
        <div class="col-md-12">
          <!-- About Me Box -->
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">Transaction Details</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
             <table id="example2" class="table table-responsive table-bordered table-striped">
                <thead>
                <tr>
                    <th>Account Id</th>
                    <th >Accout No</th>
                    <th>Customer Name</th>
                    <th>Over draft</th>
                     <th>Account Type</th>
                     <th>Account Category</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody id="custTransacDetails">
                </tbody>
                <tfoot>
                <tr>
                   <th>Account Id</th>
                    <th >Accout No</th>
                    <th>Customer Name</th>
                    <th>Over draft</th>
                     <th>Account Type</th>
                     <th>Account Category</th>
                    <th>Status</th>
                </tr>
                </tfoot>
              </table>
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
