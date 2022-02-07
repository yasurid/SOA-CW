<?php
include_once '../database/db.php';

class transactionModel
{
    public function setTransaction($cmbAccountNo,$cmbBank,$cmbBranch,$recName,$amount,$recAccount)
    {
        
     $id=0;
     $rows = array();
     $dbObject = new db();  
     $mysqli = $dbObject->getConnection();          

    
        if($cmbAccountNo != null)
        {
         
            $sql="INSERT INTO tbltransaction(accountId,transactionType,toAccount,accountHolderName,bank,branch,amount,transactionStatus) VALUES (?,?,?,?,?,?,?,?)";

                try
                {
                    $transactionType = 'debit';
                    $status = 'success';
                    $accountNo = rand(100000000,999999999);

                  $stmtPaxInfo = $mysqli->prepare($sql);
                  if (false===$stmtPaxInfo ) {

                  }

                  $rc =$stmtPaxInfo->bind_param("isssssds",$cmbAccountNo,$transactionType,$recAccount,$recName,$cmbBank,$cmbBranch,$amount,$status);
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

    public function getTransaction()
    {

        $rows = array();
        $dbObject = new db();  
        $mysqli = $dbObject->getConnection(); 

        $sql = "select a.*,c.customerName from tblaccount a join tblcustomer c on c.customerId = a.customerId";
      
	    $stmt = $mysqli->prepare($sql);
           
        $stmt->execute();
        $result = $stmt->get_result();
                 $stmt->close();
                 

                 while($row = $result->fetch_assoc()) {
                  $rows[] = $row;
                }
        
        return $rows;
    
    }
    
    public function getTransactionsByAccountNo($accountNo)
    {

        $rows = array();
        $dbObject = new db();  
        $mysqli = $dbObject->getConnection(); 

        $sql = "select * from tbltransaction where accountId=?";
      
	    $stmt = $mysqli->prepare($sql);
         $rc =$stmt->bind_param("i",$accountNo);
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