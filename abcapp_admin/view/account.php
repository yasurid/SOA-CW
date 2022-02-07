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
              <h3 class="box-title">Create Account</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
             <form>
             <div class="form-group">
                  <label for="exampleInputPassword1">Customer Name</label>
               <select id="cmbCustomerId" class="form-control">
                  <option value="1">E N S Yapa</option>
                  <option value="2">Yasuri Jayasinghe</option>                  
                </select>
              </div>     
                <div class="form-group">
                 <label for="exampleInputPassword1">Account Type</label>
                <select id="cmbAccountCategory" class="form-control">
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>                  
                </select>
              </div>    
              <div class="form-group">
             <label for="exampleInputPassword1">Account Category</label>
                  <select id="cmbAccountType" class="form-control">
                  <option value="Save1">Savings 1</option>
                  <option value="save2">Savings 2</option>                  
                </select>
              </div>  
              <div class="form-group">
                <label for="exampleInputPassword1">Opening Balance</label>
                <input type="text" class="form-control" id="txtOpeningBalance" placeholder="Opening Balance">
              </div>
              <button type="button" id="btnCreateAccount" class="btn btn-default">Submit</button>
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
              <h3 class="box-title">Change Account Status</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
                <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Account Id</label>
                <input type="text" class="form-control" id="custName" placeholder="Name">
              </div>
              <div class="form-group">
               <div class="radio">
  <label>
    <input type="radio" name="rbActive" id="rbActive" value="Active" aria-label="..."> Activate
  </label>
</div>
                  <div class="radio">
  <label>
    <input type="radio" name="rbActive" id="rbActive" value="Active" aria-label="..."> Deactivate
  </label>
</div>
              </div>
              
             
              <button type="button" id="btnCustCreate" class="btn btn-default">Submit</button>
            </form>
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
              <h3 class="box-title">Customer Account</h3>
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
                <tbody id="accountBody">
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
