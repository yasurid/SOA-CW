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
     Transfers
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
                  <input type="text" class="form-control" id="txtFinalBalance" disabled>
              </div>  
            <div class="form-group">
                <label for="exampleInputPassword1">Transfering Bank</label>
               <select id="cmbBank" class="form-control">
                  <option value="boc">BOC BANK</option>
                  <option value="sampath">Sampath Bank</option> 
                 <option value="commercial">Commercial Bank</option>   
                </select>
              </div> 
            <div class="form-group">
                <label for="exampleInputPassword1">Branch</label>
               <select id="cmbBranch" class="form-control">
                  <option value="Kegalle">Kegalle</option>
                  <option value="Kadawatha">Kadawatha</option>  
                 <option value="Katunayake">Katunayake</option>  
                </select>
              </div> 
             <div class="form-group">
                <label for="exampleInputEmail1">Account No</label>
                <input type="text" class="form-control" id="recAccount" placeholder="Account No">
              </div>
             <div class="form-group">
                <label for="exampleInputEmail1">Account Holder's Name</label>
                <input type="text" class="form-control" id="recName" placeholder="Account Holder Name">
              </div>
             <div class="form-group">
                <label for="exampleInputEmail1">Amount</label>
                <input type="text" class="form-control" id="amount" placeholder="Amount">
              </div>
                 <button type="button" id="btnTransaction" class="btn btn-default">Submit</button>
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
             <table id="example4" class="table table-responsive table-bordered table-striped">
                <thead>
                <tr>
                  
                            
                    <th>Account Holder Name</th>
                    <th >Amount</th>
                    <th >Bank Name</th>
                    <th>Account No</th>
                    <th>Transaction Status</th>
                     <th>Transaction Time</th>
                     <th>Transaction Type</th>
                   
                </tr>
                </thead>
                <tbody id="custTransacDetails">
                </tbody>
                <tfoot>
                <tr>
                  <th>Account Holder Name</th>
                    <th >Amount</th>
                     <th >Bank Name</th>
                    <th>Account No</th>
                    <th>Transaction Status</th>
                     <th>Transaction Time</th>
                     <th>Transaction Type</th>
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
