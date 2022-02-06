<?php

include '../model/resultModel.php';

class resultController
{
    public function getPassengerInfo($arrivalDate)
    {
            
            $rows = array();
            $resultModelObj = new resultModel(); 
    
            
            $res = $resultModelObj->getPassengerInfo($arrivalDate);

            return $res;
    }

}
?>