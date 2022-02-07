<?php
session_start();
if(isset($_SESSION['userName']))
{
include("includes/header.php");
include("includes/leftNav.php");
?>

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
        <div class="col-md-6">
            <div class="box box-success">
            <div class="box-body box-profile">
                <div class="panel panel-default">
                   <div class="panel-heading">Upload Daily Sale <button class="btn btn-primary btn-sm pull-right refbtn"><span class="glyphicon glyphicon-refresh"></span></button>
 </div>
                  <div class="panel-body">
                      
                      <?php 
                            if(isset($_GET["status"]))
                            {
                                $rr = array();
                                $status = $_GET["status"];
                                
                                if($status =="success")
                                { ?>
                      <div class="alert alert-success"><strong>Success!</strong> File uploaded succeefully.</div>
                                    
                              <?php  }
                                else if($status=="error")
                                { ?>
                                    <div class="alert alert-danger"><strong>Error!</strong>Error when uploading! Please try again.</div>
                               <?php }
                                 else if($status=="Failed")
                                { 
                                    $rr = $_GET["inv"];
                      
                                    ?>
                                    <div class="alert alert-danger"><strong>Error!</strong>Error when Inserting Data. Invoice(s) not inserted! <br> <?php 
                                     $data = json_decode($rr); //to decode the string into an object
                                     echo implode(",",$data); ?></div>
                               <?php }
                                else if($status=="FileError")
                                { 
                                    $rr = $_GET["inv"];
                      
                                    ?>
                                    <div class="alert alert-danger"><strong>Error!</strong>Error in file.Make sure file is in correct format! <br> </div>
                               <?php }
                            }
                       ?>
                      <form id ="frmFileUpload" action="../controller/fileController.php" method="post" enctype="multipart/form-data">
                          
                    <div class="form-group">
                          <label for=""> Select File to upload:</label>
                           <input type="hidden" id="shopUpId" name="shopUpId" value="<?php if(isset($_SESSION['shopId']))
                                                                                       { echo $_SESSION['shopId']; 
                                                                                       } else {
                                                                                           echo "0";
                                                                                       } ?>" />
                      <input type="file" name="fileToUpload" id="fileToUpload"> <br>
                      <input class="btn btn-default" type="button" id="upload" value="Load Excel" />                   
                      </div>
                     
                     
                    </form>

                  </div>
                </div>
                </div>
            <!-- /.box-body -->
          </div>
        </div>
          
        <div class="col-md-6">
            <div class="box box-success">
            <div class="box-body box-profile">
                <div class="panel panel-default">
                   <div class="panel-heading">Upload Multiple Currency <button class="btn btn-primary btn-sm pull-right refbtn"><span class="glyphicon glyphicon-refresh"></span></button> </div>
                  <div class="panel-body">
                       <?php 
                            if(isset($_GET["status2"]))
                            {
                                $status = $_GET["status2"];
                                
                                if($status =="success")
                                { ?>
                      <div class="alert alert-success"><strong>Success!</strong> File uploaded succeefully.</div>
                                    
                              <?php  }
                                else if($status=="error")
                                { ?>
                                    <div class="alert alert-danger"><strong>Error!</strong>Error when uploading! Please try again.</div>
                               <?php }
                            }
                       ?>
                      
                      <form id ="frmFileUpload2" action="../controller/fileController.php" method="post" enctype="multipart/form-data">
                          
                    <div class="form-group">
                          <label for=""> Select File to upload:</label>
                           <input type="hidden" id="shopUpId2" name="shopUpId2" value="<?php if(isset($_SESSION['shopId']))
                                                                                       { echo $_SESSION['shopId']; 
                                                                                       } else {
                                                                                           echo "0";
                                                                                       } ?>" />
                      <input type="file" name="fileToUpload2" id="fileToUpload2"> <br>
                      <input class="btn btn-default" type="button" id="uploadCurrency" value="Load Excel" />                   
                      </div>
                     
                     
                    </form>
                      
                      
                    
                      
                  </div>
                </div>
                </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    

        <div class="row">
            <div class="col-md-12">
            <div class="box box-success">
            <div class="box-body box-profile">
                <div class="panel panel-default">
                <div class="panel-heading">Monthly Sale Info</div>
                <div class="panel-body" >
                   <div id="dvExcel">

                  </div>
                    
                 <input id ="btnDutyFree" class="btn btn-default" type="button" value="Save" name="submit">
                </div>
                 
                </div>
                </div>
            <!-- /.box-body -->
          </div>
        </div>
        
        
        </div>
        
        <div class="row">
            <div class="col-md-12">
            <div class="box box-success">
            <div class="box-body box-profile">
                <div class="panel panel-default">
                <div class="panel-heading">Currency</div>
                    <div class="panel-body">
                        <div id="dvExcel2" class="dvExcel">

                        </div>
                    
                    </div>
                  
                      <button id="btnDutyFree2" type="Submit" class="btn btn-default">Save</button>
                </div>
                </div>
            <!-- /.box-body -->
          </div>
        </div>
        
        
        </div>
        
 
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
<!-- Modal -->

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
