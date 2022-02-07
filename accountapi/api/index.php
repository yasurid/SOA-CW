<?php
require_once("../controller/accountController.php");

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
            $accountControllerObj = new accountController(); 
    
            
            $cusMethod = $array['accMethod'];
            
            if($cusMethod == "create")
            {
                
                $customerId = $array['CustomerId'];
                $AccountCategory =$array['AccountCategory'];
                $AccountType = $array['AccountType'];
                 $OpeningBalance = $array['OpeningBalance'];
                $res = $accountControllerObj->setAccount($customerId,$AccountCategory,$AccountType,$OpeningBalance);


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
                $res = $accountControllerObj->getAccount();
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
            else if($cusMethod == "one")
            {
                $accNo= $array['accNo'];
                $len = 0;
                $res = $accountControllerObj->getAccountByAccountNo($accNo);
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
