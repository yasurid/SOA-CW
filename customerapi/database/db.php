<?php
class db{
    public function getConnection()
    {
        //Database information
    
    
        $host = "localhost";
        $username = "danushika_cw";
        $password = "vpYoFxv59P";
        $db = "danushika_cw";


        
      
        
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        //Error handling
        try {
                 $mysqli = new mysqli($host,$username, $password, $db);
                // $mysqli->set_charset("utf8mb4");

                if($mysqli)
                {
                   // echo 'conntected';
                }
                else
                {

                   // echo 'not';
                }
               
                 return $mysqli;

        } catch(Exception $e) {
            
       // header("Location:error.php?id=".$e->getMessage());
          error_log($e->getMessage());
          exit('Error connecting to database'); //Should be a message a typical user could understand
        }
        
    }
   
}
?>