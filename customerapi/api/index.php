<?php
require_once("../controller/customerController.php");

if(isset($_POST))
{
    $res=0;
    
    $res2 = array();
    $res3 = array();

    $request = file_get_contents("php://input"); // gets the raw data
    $array = json_decode($request, true);

    if (!empty($array)) {

        if(!empty($array['key']))
        {
          
            
            $rows = array();
            $CustomerControllerObj = new customerController(); 
    
            
           $cusMethod = $array['cusMethod'];
            
            if($cusMethod == "create")
            {
                $custName = $array['custName'];
                $custAddress =$array['custAddress'];
                $custContactNo = $array['custContactNo'];

                $res = $CustomerControllerObj->setCustomer($custName,$custAddress,$custContactNo);


                if($res >0)
                {

                    $res2['key'] ='4';
                    $res2['id'] =$res;
                    $res2['status'] = 'success';


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
            else if($cusMethod == "all")
            {
               
                $len = 0;
                $res = $CustomerControllerObj->getCustomer();
                $len = count($res);

                if($len >0)
                {

                   // $arrayPassenger = $array["resultDetails"];
                    //$res2 = setResult($array);

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








?>
