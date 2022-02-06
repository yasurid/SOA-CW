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
        <li><a href="home.php"><i class="fa fa-dashboard"></i> Sales</a></li>
        <!--<li><a href="#">Examples</a></li>-->
        <li class="active"><?php echo $_SESSION['ShopName']. " Company Profile";?></li>
        <input type="hidden" id="shopId" value="<?php if(isset($_GET['id'])){echo $_GET['id'];} ?> 
        
    " />
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

      <div class="row">
        <!-- /.col -->
        <div class="col-md-12">
       

      <div class="row">
        <div class="col-md-12">
          <!-- About Me Box -->
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">Sales Info</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
            <table id="example1" class="table table-responsive table-bordered table-striped">
                <thead>
                <tr>
                    <th>INVOICE NUMBER</th>
                    <th >TRANSACTION DATE</th>
                    <th>TRANSACTION TIME</th>
                     <th>NET SALES</th>
                    <th>TRANSACTION_TYPE</th>           
                </tr>
                </thead>
                <tbody id="tableBody">
                </tbody>
                <tfoot>
                <tr>
                    <th>INVOICE NUMBER</th>
                    <th >TRANSACTION DATE</th>
                    <th>TRANSACTION TIME</th>
                     <th>NET SALES</th>
                    <th>TRANSACTION_TYPE</th> 
                </tr>
                </tfoot>
              </table>
              
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
<script src="bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<!-- SlimScroll -->
<script src="bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="bower_components/fastclick/lib/fastclick.js"></script>
<!-- page script -->
<script>
$(document).ready(function() {

});
    

</script>
