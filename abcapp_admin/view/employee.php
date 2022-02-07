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
     Employee
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
              <h3 class="box-title">Create Employee</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
             <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" class="form-control" id="txtLoginUser" placeholder="Name">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">password</label>
                <input type="password" class="form-control" id="txtPassword" placeholder="Address">
              </div>
               <div class="form-group">
                <label for="exampleInputPassword1">Re enter password</label>
                <input type="password" class="form-control" id="txtPassword2" placeholder="Address">
              </div>
             <div class="form-group">
                <label for="exampleInputPassword1">Emploee Name</label>
                  <select id="cmbEmpId" class="form-control">
                  <option value="3">Kanchana Yapa</option>
                  <option value="4">Isuru Karunarathne</option>                  
                </select>
              </div>  
               <div class="form-group">
                <label for="exampleInputPassword1">User Type</label>
                  <select id="cmbUserType" class="form-control">
                  <option value="admin">Admin</option>
                  <option value="user">User</option>                  
                </select>
              </div>  
              <button type="button" id="btnCreateUser" class="btn btn-default">Submit</button>
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
              <h3 class="box-title">Change Customer Status</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
                <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Customer Id</label>
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
              <h3 class="box-title">Create Customer</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body" >
             <table id="example1" class="table table-responsive table-bordered table-striped">
                <thead>
                <tr>
                    <th>Customer Id</th>
                    <th >Customer Name</th>
                    <th>Address</th>
                    <th>Contact No</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody id="tableBody">
                </tbody>
                <tfoot>
                <tr>
                   <th>Customer Id</th>
                    <th >Customer Name</th>
                    <th>Address</th>
                    <th>Contact No</th>
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
