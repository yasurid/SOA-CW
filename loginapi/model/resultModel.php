<?php
include_once '../database/db.php';

class resultModel
{
    public function getPassengerInfo($arrivalDate)
    {
        
     $id=0;
     $rows = array();
     $dbObject = new db();  
     $mysqli = $dbObject->getConnection();          

    
        if($arrivalDate != null)
        {
         
           $sql="SELECT refNo,passportNo,phiStatus,nationality,dob,flightNo,departureDate,gender FROM tblpassenger WHERE cast(actualArrivalTime as date) =?";

            try
            {
              $stmt = $mysqli->prepare($sql);
            
              $stmt->bind_param("s",$arrivalDate);
                $stmt->execute();

             
                $result = $stmt->get_result();
                 $stmt->close();
                 if($result->num_rows === 0) exit('No rows');

                 while($row = $result->fetch_assoc()) {
                  $rows[] = $row;
                }



            }
            catch (SomeException $e)
            {
             
               
              return $rows;

            }
            finally
            {
              
                return $rows;
            }



        }
        else
        {
            return $rows;   
        }
    
    }


    
}

?>