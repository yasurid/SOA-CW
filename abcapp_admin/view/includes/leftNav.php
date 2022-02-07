 <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!--<div class="user-panel">
        <div class="pull-left image">
          <img src="images/logo.png" alt="AASL" class="img-circle">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>-->
    
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
       <li>
          <a href="customer.php">
            <i class="fa fa-globe"></i> <span>Register Customer</span>
            <span class="pull-right-container">
              
            </span>
          </a>
        </li>
        <li>
          <a href="account.php">
            <i class="fa fa-globe"></i> <span>Create Account</span>
            <span class="pull-right-container">
             
            </span>
          </a>
        </li>
        <li>
          <a href="transaction.php">
            <i class="fa fa-globe"></i> <span>Transactions</span>
            <span class="pull-right-container">
             
            </span>
          </a>
        </li>
        <?php 
         
        if($_SESSION['usertype'] =='admin') { ?>
            <li>
          <a href="user.php">
            <i class="fa fa-globe"></i> <span>Users</span>
            <span class="pull-right-container">
             
            </span>
          </a>
        </li> 
         <li>
          <a href="employee.php">
            <i class="fa fa-globe"></i> <span>Employee</span>
            <span class="pull-right-container">
             
            </span>
          </a>
        </li> 
          
      <?php  }
          ?> 
          
        
      
        
        <!--<li><a href="https://adminlte.io/docs"><i class="fa fa-book"></i> <span>Documentation</span></a></li>-->
        <li class="header">DOCUMENTATION <?php $_SESSION['usertype'];  ?></li>
        <li><a href="createaccount.php"><i class="fa fa-circle-o text-red"></i> <span>User Manual</span></a></li>
          <li><a href="upload.php"><i class="fa fa-circle-o text-orange"></i> <span>Regulations</span></a></li>
          <li><a href="shop.php"><i class="fa fa-circle-o text-green"></i> <span>Ineterest Info</span></a></li>
        
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>