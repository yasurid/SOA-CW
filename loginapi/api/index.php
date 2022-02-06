<?php

require_once("../controller/monthlySaleRestHandler.php");
require_once("../controller/loginController.php");
require_once("../controller/resultController.php");

if(isset($_POST))
{
    $len=0;
   
    $res2 = array();
    $res3 = array();

    $request = file_get_contents("php://input"); // gets the raw data
    $array = json_decode($request, true);

    if (!empty($array)) {

        if(!empty($array['key']))
        {
            $logMethod = '';
            $res = 0;
            $loginControllerObj = new loginController(); 
            $rows = array();    
            $logMethod =isset($array['logMethod']) ? $array['logMethod'] : "";
            $username = isset($array['username']) ? $array['username'] : "";
            $password =isset($array['password']) ? $array['password'] : ""; 
            $key = $array['key'];
            $loginType =isset($array['loginType']) ? $array['loginType'] : "";
            $userType =isset($array['userType']) ? $array['userType'] : "";
            $empId =isset($array['empId']) ? $array['empId'] : "";
            $key = $array['key'];
            
            if($logMethod =='create')
            {
                $res = $loginControllerObj->setLogin($username,$password,$userType,$empId,$key);
                
                if($res >0)
                {
                    
                     echo json_encode($res);
                }
                else
                    {
                    $res2['key'] ='4';
                    $res2['id'] =0;
                    $res2['status'] = 'login fail';

                    echo json_encode($res2);
                }
            }
            else if($logMethod =='all')
            {
                $res3 = $loginControllerObj->getLoginAll();
                 
                $len = count($res3);

                if($len >0)
                {

                   // $arrayPassenger = $array["resultDetails"];
                    //$res2 = setResult($array);

                    echo json_encode($res3);

                }
                else
                {
                $res2['key'] ='4';
                $res2['id'] =0;
                $res2['status'] = 'login fail';

                echo json_encode($res2);
                }
            }
            else
            {
                
                $res3 = $loginControllerObj->getLogin($username,$password,$key,$loginType);
                 
                $len = count($res3);

                if($len >0)
                {

                   // $arrayPassenger = $array["resultDetails"];
                    //$res2 = setResult($array);

                    echo json_encode($res3);

                }
                else
                {
                $res2['key'] ='4';
                $res2['id'] =0;
                $res2['status'] = 'login fail';

                echo json_encode($res2);
                }
            }
            
           
           
    
            
           
        }
        else
        {
            $res2['key'] ='3';
            $res2['id'] =0;
            $res2['status'] = 'fail';

           
            echo json_encode($res2);
        }
        
        
        
    }
}

function setAccount($array)
{
    $Id = 0;
    $passportNo ='';
    $date ='';
    $result='';
    
    $len = count($array);


        $monthlySaleRestHandler = new monthlySaleRestHandler();      
       // $passportNo = $array['passportNo'];
        $arrivalDate = $array['arrivalDate'];
        
        $Id= $monthlySaleRestHandler->getPassengerInfo($arrivalDate);
       
        
 
    return $Id;

}


?>
