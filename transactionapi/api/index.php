<?php
require_once("../controller/transactionController.php");

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
            $transactionControllerObj = new transactionController(); 
    
            
            $cusMethod = $array['accMethod'];
            
            if($cusMethod == "create")
            {

                $cmbAccountNo = $array['cmbAccountNo'];
                $cmbBank =$array['cmbBank'];
                $cmbBranch = $array['cmbBranch'];
                $recName= $array['recName'];
                $amount= $array['amount'];
                $recAccount=$array['recAccount'];
                
                $res = $transactionControllerObj->setTransaction($cmbAccountNo,$cmbBank,$cmbBranch,$recName,$amount,$recAccount);


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
                $res = $transactionControllerObj->getTransaction();
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
                $res = $transactionControllerObj->getTransactionsByAccountNo($accNo);
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
