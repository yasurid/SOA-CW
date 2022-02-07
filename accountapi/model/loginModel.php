<?php
include_once '../database/db.php';

class loginModel
{
    public function getLogin($userName,$password,$key)
    {

        $rows = array();
        $dbObject = new db();  
        $mysqli = $dbObject->getConnection(); 

        $sql = "select empName,empUserType from tblemployee e join tblemplogin l on l.empLoginId = e.empId WHERE empUserName=? AND empPassword =? AND securityKey =?";
      
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
    
}

?>