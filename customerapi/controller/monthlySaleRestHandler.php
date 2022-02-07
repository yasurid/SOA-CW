<?php
require_once("../controller/SimpleRest.php");
include "../controller/resultController.php";
		
class monthlySaleRestHandler extends SimpleRest {

	function getPassengerInfo($arrivalDate) {	

        $statusCode = 200;
		$rawData='';
		$rawData2='';
		$res = array();
		$resultController = new resultController();
		$rawData = $resultController->getPassengerInfo($arrivalDate);
	
		
		
		if(empty($rawData)) {
			$res['key'] ='1';
			$res['id'] =0;
			$res['status'] = 'fail';	
		} else {
			$statusCode = 200;
		}

		

		if($rawData >0)
		{
			$res['key'] ='2';
			$res['id'] =$rawData;
			$res['status'] = 'success';

		}
		else
		{
			$res['key'] ='3';
			$res['id'] =0;
			$res['status'] = 'fail';
		} 

		$requestContentType = $_SERVER['HTTP_ACCEPT'];
		$this ->setHttpHeaders($requestContentType, $statusCode);
				
		if(strpos($requestContentType,'application/json') !== false){
			$response = $this->encodeJson($rawData);
			echo $response;
		} else if(strpos($requestContentType,'text/html') !== false){
			$response = $this->encodeHtml($rawData);
			echo $response;
		} else if(strpos($requestContentType,'application/xml') !== false){
			$response = $this->encodeXml($rawData);
			echo $response;
		}
        else if(strpos($requestContentType,'application/x-www-form-urlencoded') !== false){
			$response = $this->encodeJson($rawData);
			echo $response;
		}
        
        return $rawData;
	}
	

	
	public function encodeHtml($responseData) {
	
		$htmlResponse = "<table border='1'>";
		foreach($responseData as $key=>$value) {
    			$htmlResponse .= "<tr><td>". $key. "</td><td>". $value. "</td></tr>";
		}
		$htmlResponse .= "</table>";
		return $htmlResponse;		
	}
	
	public function encodeJson($responseData) {
		$jsonResponse = json_encode($responseData);
		return $jsonResponse;		
	}
	
	public function encodeXml($responseData) {
		// creating object of SimpleXMLElement
		$xml = new SimpleXMLElement('<?xml version="1.0"?><mobile></mobile>');
		foreach($responseData as $key=>$value) {
			$xml->addChild($key, $value);
		}
		return $xml->asXML();
	}


	
}
?>