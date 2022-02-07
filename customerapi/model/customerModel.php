<?php
include_once '../database/db.php';

class customerModel
{
    public function setCustomer($custName,$custAddress,$custContactNo)
    {
        
     $id=0;
     $rows = array();
     $dbObject = new db();  
     $mysqli = $dbObject->getConnection();          

    
        if($custName != null)
        {
         
            $sql="INSERT INTO tblCustomer(customerName,address,contactNo) VALUES (?,?,?)";

                try
                {

                  $stmtPaxInfo = $mysqli->prepare($sql);
                  if (false===$stmtPaxInfo ) {

                  }

                  $rc =$stmtPaxInfo->bind_param("sss",$custName,$custAddress,$custContactNo);
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

    public function getCustomer()
    {

        $rows = array();
        $dbObject = new db();  
        $mysqli = $dbObject->getConnection(); 

        $sql = "select customerId,customerName,address,contactNo,status from tblcustomer";
      
	    $stmt = $mysqli->prepare($sql);

       
        $stmt->execute();
        $result = $stmt->get_result();
                 $stmt->close();
                 

                 while($row = $result->fetch_assoc()) {
                  $rows[] = $row;
                }
        
        return $rows;
    
    }

    
}

?>