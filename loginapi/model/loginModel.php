<?php
include_once '../database/db.php';

class loginModel
{
    public function getLogin($userName,$password,$key,$loginType)
    {

        $rows = array();
        $dbObject = new db();  
        $mysqli = $dbObject->getConnection(); 
        
        $sql = '';
       
        if($loginType =='customer')
        {
             $sql = "select customerId,custUserName from tblcustomerlogin where custUserName =? and custPassword =?  AND securityKey =?";
        }
        else if($loginType =='admin')
        {
             $sql = "select empName,empUserType from tblemployee e join tblemplogin l on l.empLoginId = e.empId WHERE empUserName=? AND empPassword =? AND securityKey =?";
        }
      
      $stmt = $mysqli->prepare($sql);

        $stmt->bind_param("sss",$userName,$password,$key);
      
        $stmt->execute();
        $result = $stmt->get_result();
                 $stmt->close();
                 

                 while($row = $result->fetch_assoc()) {
                  $rows[] = $row;
                }
        
        return $rows;
    
    }
    
     public function getLoginAll()
    {

        $rows = array();
        $dbObject = new db();  
        $mysqli = $dbObject->getConnection(); 
        
       
        $sql = "select empName,empUserName,empUserType from tblemployee e join tblemplogin l on l.empLoginId = e.empId";
        
      
      $stmt = $mysqli->prepare($sql);

        //$stmt->bind_param("sss",$userName,$password,$key);
      
        $stmt->execute();
        $result = $stmt->get_result();
                 $stmt->close();
                 

                 while($row = $result->fetch_assoc()) {
                  $rows[] = $row;
                }
        
        return $rows;
    
    }
    
    public function setLogin($username,$password,$userType,$empId,$key)
    {
        
     $id=0;
     $rows = array();
     $dbObject = new db();  
     $mysqli = $dbObject->getConnection();          

    
        if($username != null)
        {

            $sql="INSERT INTO tblemplogin(empUserName,empPassword,empUserType,securityKey,empId) VALUES (?,?,?,?,?)";

                try
                {
                    $overdraft = 0;
                    $accountNo = rand(100000000,999999999);

                  $stmtPaxInfo = $mysqli->prepare($sql);
                  if (false===$stmtPaxInfo ) {

                  }

                  $rc =$stmtPaxInfo->bind_param("ssssi",$username,$password,$userType,$key,$empId);
                  // bind_param() can fail because the number of parameter doesn't match the placeholders in the statement
                  // or there's a type conflict(?), or ....
                  if ( false===$rc ) {

                    // again execute() is useless if you can't bind the parameters. Bail out somehow.
                   // die('bind_param() failed: ' . htmlspecialchars($stmt->error));
                  }

                  $rc = $stmtPaxInfo->execute();

                  // execute() can fail for various reasons. And may it be as stupid as someone tripping over the network cable
                  // 2006 "server gone away" is always an option
                  if ( false===$rc ) {

                   // die('execute() failed: ' . htmlspecialchars($stmt->error));
                  }
                  else
                  {

                        $id = $stmtPaxInfo->insert_id;
                        // Close statement
                        mysqli_stmt_close($stmtPaxInfo);



                           if($id >0)
                           {
                           }
                           else
                           {
                               $id =0;

                           }


                  }

                  return $id;


                }
                catch (SomeException $e)
                {
                        return $id;

                }
                finally
                {
                    // Close connection
                    mysqli_close($mysqli);
                    return $id;
                }



        }
        else
        {
            return $rows;   
        }
    
    }
    
    
    
}

?>