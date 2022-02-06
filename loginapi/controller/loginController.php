<?php
include '../model/loginModel.php';

class loginController
{
    public function getLogin($userName,$password,$key,$loginType)
    {
           
            $res = 0;
            $loginModelObj = new loginModel(); 
    
           // echo 'jjjjk';
            $res = $loginModelObj->getLogin($userName,$password,$key,$loginType);
            return $res;
    }
    
    public function setLogin($username,$password,$userType,$empId,$key)
    {
           
            $res = 0;
            $loginModelObj = new loginModel(); 
            $res = $loginModelObj->setLogin($username,$password,$userType,$empId,$key);
            return $res;
    }
    public function getLoginAll()
    {
           
            $res = array();
            $loginModelObj = new loginModel(); 
            $res = $loginModelObj->getLoginAll();
            return $res;
    }
    
    
    
    
}

?>