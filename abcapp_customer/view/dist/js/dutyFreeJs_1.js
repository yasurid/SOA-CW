//Tenderboard uploader
 $("body").on("click", "#upload", function () {
     
        //Reference the FileUpload element.
        var fileUpload = $("#fileUpload")[0];
 
        //Validate whether File is valid Excel file.
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
 
                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        ProcessExcel(e.target.result);
                    };
                    reader.readAsBinaryString(fileUpload.files[0]);
                } else {
                    //For IE Browser.
                    reader.onload = function (e) {
                        var data = "";
                        var bytes = new Uint8Array(e.target.result);
                        for (var i = 0; i < bytes.byteLength; i++) {
                            data += String.fromCharCode(bytes[i]);
                        }
                        ProcessExcel(data);
                    };
                    reader.readAsArrayBuffer(fileUpload.files[0]);
                }
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid Excel file.");
        }
    });

 $("body").on("click", "#uploadCurrency", function () {
     
    
        //Reference the FileUpload element.
        var fileUpload = $("#fileUpload2")[0];
 
        //Validate whether File is valid Excel file.
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
 
                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        ProcessExcel2(e.target.result);
                    };
                    reader.readAsBinaryString(fileUpload.files[0]);
                } else {
                    //For IE Browser.
                    reader.onload = function (e) {
                        var data = "";
                        var bytes = new Uint8Array(e.target.result);
                        for (var i = 0; i < bytes.byteLength; i++) {
                            data += String.fromCharCode(bytes[i]);
                        }
                        ProcessExcel2(data);
                    };
                    reader.readAsArrayBuffer(fileUpload.files[0]);
                }
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid Excel file.");
        }
    });
    
    function ProcessExcel(data) {
        //Read the Excel File data.
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
        //Fetch the name of First Sheet.
        var firstSheet = workbook.SheetNames[0];
 
        //Read all rows from First Sheet into an JSON array.
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
        //Create a HTML Table element.
        var table = $("<table id='tblExel' class='table table-striped' />");
        //table[0].border = "1";
 
        //Add the header row.
        var row = $(table[0].insertRow(-1));
 
       //Add the header cells.
        var headerCell = $("<th />");
        headerCell.html("CONCESSIONAR NAME");
        row.append(headerCell);
 
        var headerCell = $("<th />");
        headerCell.html("SHOP ID");
        row.append(headerCell);
 
        var headerCell = $("<th />");
        headerCell.html("SHOP NAME");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("LOCATION");
        row.append(headerCell);
        
         var headerCell = $("<th />");
        headerCell.html("INVOICE NUMBER");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("TRANSACTION DATE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("TRANSACTION TIME");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("PRODUCT NAME");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("PRODUCT CATEGORY");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("PRODUCT SUB-CATEGORY");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("BRAND NAME");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("QUANTITY");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("UNIT PRICE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("TOTAL AMOUNT BEFORE DISCOUNT");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("DISCOUNT AMOUNT");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("DISCOUNT TYPE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("TOTAL AMOUNT AFTER DISCOUNT");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("SALES TAX PERCENTAGE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("SALES TAX");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("NET SALES");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("MINUS TAX");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("PAYMENT METHOD");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("CURRENCY");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("ACTUAL PAYMENT CURRENCY TYPE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("TRANSACTION TYPE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("VOID CANCELATION TYPE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("FLIGHT");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("FLIGHT DATE TIME");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("AIRPORT ORG");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("AIRPORT DES");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("AIRPORT DES2");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("AIRPORT DES3");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("PASSENGER ID NAME");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("NATIONALITY");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("PASSPORT ID");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("NATIONAL ID");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("BIRTHDATE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("GENDER");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("apiFunction");
        row.append(headerCell);
        
         var headerCell = $("<th />");
        headerCell.html("Key");
        row.append(headerCell);
 
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            //Add the data row.
            var row = $(table[0].insertRow(-1));
 
            //Add the data cells.
            var cell = $("<td />");
            cell.html(excelRows[i].CONCESSIONAR_NAME);
            row.append(cell);
 
            cell = $("<td />");
            cell.html(excelRows[i].SHOP_ID);
            row.append(cell);
 
            cell = $("<td />");
            cell.html(excelRows[i].SHOP_NAME);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].LOCATION);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].INVOICE_NUMBER);
            row.append(cell);
            
            
            cell = $("<td />");
            cell.html(excelRows[i].TRANSACTION_DATE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].TRANSACTION_TIME);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].PRODUCT_NAME);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].PRODUCT_CATEGORY);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].PRODUCT_SUB_CATEGORY);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].BRAND_NAME);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].QUANTITY);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].UNIT_PRICE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].TOTAL_AMOUNT_BEFORE_DISCOUNT);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].DISCOUNT_AMOUNT);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].DISCOUNT_TYPE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].TOTAL_AMOUNT_AFTER_DISCOUNT);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].SALES_TAX_PERCENTAGE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].SALES_TAX);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].NET_SALES);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].MINUS_TAX);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].PAYMENT_METHOD);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].CURRENCY);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].ACTUAL_PAYMENT_CURRENCY_TYPE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].TRANSACTION_TYPE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].VOID_CANCELATION_TYPE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].FLIGHT);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].FLIGHT_DATE_TIME);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].AIRPORT_ORG);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].AIRPORT_DES);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].AIRPORT_DES2);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].AIRPORT_DES3);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].PASSENGER_ID_NAME);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].NATIONALITY);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].PASSPORT_ID);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].NATIONAL_ID);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].BIRTHDATE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].GENDER);
            row.append(cell);
            
             cell = $("<td />");
            cell.html(excelRows[i].apiFunction);
            row.append(cell);
            
             cell = $("<td />");
            cell.html(excelRows[i].Key);
            row.append(cell);
            
                cell = $("<td />");
            cell.html(excelRows[i].shopId);
            row.append(cell);
        }
 
        var dvExcel = $("#dvExcel");
        dvExcel.html("");
        dvExcel.append(table);
    };

    function ProcessExcel2(data) {
        
         
        //Read the Excel File data.
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
        //Fetch the name of First Sheet.
        var firstSheet = workbook.SheetNames[0];
 
        //Read all rows from First Sheet into an JSON array.
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
        //Create a HTML Table element.
        var table = $("<table id='tblExel2' class='table table-striped' />");
        //table[0].border = "1";
 
        //Add the header row.
        var row = $(table[0].insertRow(-1));
 
       //Add the header cells.
        var headerCell = $("<th />");
        headerCell.html("SHOP ID");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("INVOICE NUMBER");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("PAYMENT TYPE");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("CURRENCY");
        row.append(headerCell);
        
        var headerCell = $("<th />");
        headerCell.html("AMOUNT");
        row.append(headerCell);

        var headerCell = $("<th />");
        headerCell.html("apiFunction");
        row.append(headerCell);
        
         var headerCell = $("<th />");
        headerCell.html("Key");
        row.append(headerCell);
 
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            //Add the data row.
            var row = $(table[0].insertRow(-1));
 
            //Add the data cells.
            var cell = $("<td />");
            cell.html(excelRows[i].shopId);
            row.append(cell);
 
            cell = $("<td />");
            cell.html(excelRows[i].INVOICE_NUMBER);
            row.append(cell);
 
            cell = $("<td />");
            cell.html(excelRows[i].CURRENCY_TYPE);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].CURRENCY);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].AMOUNT);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].apiFunction);
            row.append(cell);
            
            cell = $("<td />");
            cell.html(excelRows[i].Key);
            row.append(cell);
            
            
           
        }
 
        var dvExcel = $("#dvExcel2");
        dvExcel.html("");
        dvExcel.append(table);
    };

//Convert html table to json
function storeTblValues()
    {
            var TableData = new Array();

            $('#tblExel tr').each(function(row, tr){
                TableData[row]={
                    "CONCESSIONAR_NAME" :$(tr).find('td:eq(0)').text()
                     ,"SHOP_ID" :$(tr).find('td:eq(1)').text()
                     ,"SHOP_NAME" : $(tr).find('td:eq(2)').text()
                     ,"LOCATION": $(tr).find('td:eq(3)').text()
                     ,"INVOICE_NUMBER": $(tr).find('td:eq(4)').text()
                     ,"TRANSACTION_DATE": $(tr).find('td:eq(5)').text()
                     ,"TRANSACTION_TIME": $(tr).find('td:eq(6)').text()
                     ,"PRODUCT_NAME": $(tr).find('td:eq(7)').text()
                     ,"PRODUCT_CATEGORY": $(tr).find('td:eq(8)').text()
                     ,"PRODUCT_SUB_CATEGORY": $(tr).find('td:eq(9)').text()
                     ,"BRAND_NAME": $(tr).find('td:eq(10)').text()
                     ,"QUANTITY": $(tr).find('td:eq(11)').text()
                     ,"UNIT_PRICE": $(tr).find('td:eq(12)').text()
                     ,"TOTAL_AMOUNT_BEFORE_DISCOUNT": $(tr).find('td:eq(13)').text()
                     ,"DISCOUNT_AMOUNT": $(tr).find('td:eq(14)').text()
                     ,"DISCOUNT_TYPE": $(tr).find('td:eq(15)').text()
                     ,"TOTAL_AMOUNT_AFTER_DISCOUNT": $(tr).find('td:eq(16)').text()
                     ,"SALES_TAX_PERCENTAGE": $(tr).find('td:eq(17)').text()
                     ,"SALES_TAX": $(tr).find('td:eq(18)').text()
                     ,"NET_SALES": $(tr).find('td:eq(19)').text()
                    ,"MINUS_TAX": $(tr).find('td:eq(20)').text()
                    ,"PAYMENT_METHOD": $(tr).find('td:eq(21)').text()
                    ,"CURRENCY": $(tr).find('td:eq(22)').text()
                    ,"ACTUAL_PAYMENT_CURRENCY_TYPE": $(tr).find('td:eq(23)').text()
                    ,"TRANSACTION_TYPE": $(tr).find('td:eq(24)').text()
                    ,"VOID_CANCELATION_TYPE": $(tr).find('td:eq(25)').text()
                    ,"FLIGHT": $(tr).find('td:eq(26)').text()
                    ,"FLIGHT_DATE_TIME": $(tr).find('td:eq(27)').text()
                    ,"AIRPORT_ORG": $(tr).find('td:eq(28)').text()
                    ,"AIRPORT_DES": $(tr).find('td:eq(29)').text()
                    ,"AIRPORT_DES2": $(tr).find('td:eq(30)').text()                  
                    ,"AIRPORT_DES3": $(tr).find('td:eq(31)').text()
                    ,"PASSENGER_ID_NAME": $(tr).find('td:eq(32)').text()
                    ,"NATIONALITY": $(tr).find('td:eq(33)').text()
                    ,"PASSPORT_ID": $(tr).find('td:eq(34)').text()
                    ,"NATIONAL_ID": $(tr).find('td:eq(35)').text()
                    ,"BIRTHDATE": $(tr).find('td:eq(36)').text()
                    ,"GENDER": $(tr).find('td:eq(37)').text()
                    ,"apiFunction": $(tr).find('td:eq(38)').text()
                    ,"Key": $(tr).find('td:eq(39)').text()
                     ,"shopId": $(tr).find('td:eq(40)').text()
                }    
            });     
            
        TableData.shift();  // first row will be empty - so remove
        return TableData;
    }


function storeTblValues2()
    {
            var TableData = new Array();

            $('#tblExel2 tr').each(function(row, tr){
                TableData[row]={
                    "shopId" :$(tr).find('td:eq(0)').text()
                     ,"INVOICE_NUMBER" :$(tr).find('td:eq(1)').text()
                     ,"CURRENCY_TYPE" : $(tr).find('td:eq(2)').text()
                     ,"CURRENCY": $(tr).find('td:eq(3)').text()
                     ,"AMOUNT": $(tr).find('td:eq(4)').text()
                     ,"apiFunction": $(tr).find('td:eq(5)').text()
                     ,"Key": $(tr).find('td:eq(6)').text()
                 }    
            });     
            
        TableData.shift();  // first row will be empty - so remove
        return TableData;
    }

//
$("#btnDutyFree").click(function(){
     
var TableData2 = new Array();
TableData2=storeTblValues();
 $.each(TableData2, function(i, data){
   
    var CONCESSIONAR_NAME = data.CONCESSIONAR_NAME;
    var SHOP_ID = data.SHOP_ID;
    var SHOP_NAME = data.SHOP_NAME;
    var LOCATION= data.LOCATION;
    var INVOICE_NUMBER= data.INVOICE_NUMBER;
    var TRANSACTION_DATE= data.TRANSACTION_DATE;
    var TRANSACTION_TIME= data.TRANSACTION_TIME;
    var PRODUCT_NAME= data.PRODUCT_NAME;
    var PRODUCT_CATEGORY= data.PRODUCT_CATEGORY;
    var PRODUCT_SUB_CATEGORY= data.PRODUCT_SUB_CATEGORY;
    var BRAND_NAME= data.BRAND_NAME;
    var QUANTITY= data.QUANTITY;
    var UNIT_PRICE= data.UNIT_PRICE;
    var TOTAL_AMOUNT_BEFORE_DISCOUNT= data.TOTAL_AMOUNT_BEFORE_DISCOUNT;
    var DISCOUNT_AMOUNT= data.DISCOUNT_AMOUNT;
    var DISCOUNT_TYPE= data.DISCOUNT_TYPE;
    var TOTAL_AMOUNT_AFTER_DISCOUNT= data.TOTAL_AMOUNT_AFTER_DISCOUNT;
    var SALES_TAX_PERCENTAGE= data.SALES_TAX_PERCENTAGE;
    var SALES_TAX= data.SALES_TAX;
    var NET_SALES= data.NET_SALES;
    var MINUS_TAX= data.MINUS_TAX;
    var PAYMENT_METHOD= data.PAYMENT_METHOD;
    var CURRENCY= data.CURRENCY;
    var ACTUAL_PAYMENT_CURRENCY_TYPE= data.ACTUAL_PAYMENT_CURRENCY_TYPE;
    var VOID_CANCELATION_TYPE= data.VOID_CANCELATION_TYPE;
    var FLIGHT= data.FLIGHT;
    var FLIGHT_DATE_TIME= data.FLIGHT_DATE_TIME;
    var AIRPORT_ORG= data.AIRPORT_ORG;
    var AIRPORT_DES= data.AIRPORT_DES;
    var AIRPORT_DES2= data.AIRPORT_DES2;
    var PASSENGER_ID_NAME= data.PASSENGER_ID_NAME;
    var NATIONALITY= data.NATIONALITY;
    var PASSPORT_ID= data.PASSPORT_ID;
    var NATIONAL_ID= data.NATIONAL_ID;
    var BIRTHDATE= data.BIRTHDATE;
    var GENDER= data.GENDER;
    var apiFunction= data.apiFunction;
    var Key= data.Key;
      var shopId= data.shopId;
//   alert(NET_SALES);
var dataString = '{"CONCESSIONAR_NAME":"'+CONCESSIONAR_NAME+'","SHOP_ID":"'+SHOP_ID+'","SHOP_NAME":"'+SHOP_NAME+'","LOCATION":"'+LOCATION+'","INVOICE_NUMBER":"'+INVOICE_NUMBER+'","TRANSACTION_DATE":"'+TRANSACTION_DATE+'","TRANSACTION_TIME":"'+TRANSACTION_TIME+'","PRODUCT_NAME":"'+PRODUCT_NAME+'","PRODUCT_CATEGORY":"'+PRODUCT_CATEGORY+'","PRODUCT_SUB_CATEGORY":"'+PRODUCT_SUB_CATEGORY+'","BRAND_NAME":"'+BRAND_NAME+'","QUANTITY":'+QUANTITY+',"UNIT_PRICE":'+UNIT_PRICE+',"TOTAL_AMOUNT_BEFORE_DISCOUNT":'+TOTAL_AMOUNT_BEFORE_DISCOUNT+',"DISCOUNT_AMOUNT":'+DISCOUNT_AMOUNT+',"DISCOUNT_TYPE":"'+DISCOUNT_TYPE+'","TOTAL_AMOUNT_AFTER_DISCOUNT":'+TOTAL_AMOUNT_AFTER_DISCOUNT+',"SALES_TAX_PERCENTAGE":'+SALES_TAX_PERCENTAGE+',"SALES_TAX":'+SALES_TAX+',"NET_SALES":'+NET_SALES+',"MINUS_TAX":'+MINUS_TAX+',"PAYMENT_METHOD":"'+PAYMENT_METHOD+'","CURRENCY":"'+CURRENCY+'","ACTUAL_PAYMENT_CURRENCY_TYPE":"'+ACTUAL_PAYMENT_CURRENCY_TYPE+'","VOID_CANCELATION_TYPE":"'+VOID_CANCELATION_TYPE+'","FLIGHT":"'+FLIGHT+'","FLIGHT_DATE_TIME":"'+FLIGHT_DATE_TIME+'","AIRPORT_ORG":"'+AIRPORT_ORG+'","AIRPORT_DES":"'+AIRPORT_DES+'","AIRPORT_DES2":"'+AIRPORT_DES2+'","PASSENGER_ID_NAME":"'+PASSENGER_ID_NAME+'","PASSPORT_ID":"'+PASSPORT_ID+'","NATIONAL_ID":"'+NATIONAL_ID+'","BIRTHDATE":"'+BIRTHDATE+'","GENDER":"'+GENDER+'","apiFunction":"bill","Key":"'+Key+'","shopId":'+shopId+'}';
     
  //   alert(dataString); 
   
      $.ajax({
            url: 'https://pos.airport.lk:8005/monthlySaleAPI/salesController/',
            type: 'post',
            data: dataString,
            dataType: 'json',
            contentType: 'application/json',
            success: function () {
             
            },
           
        }); 
     
   //alert(data);
 });

    
    
    
       
    }); 


$("#btnDutyFree2").click(function(){
     
var TableData2 = new Array();
TableData2=storeTblValues2();
 $.each(TableData2, function(i, data){
 
    var shopId = data.shopId;
    var INVOICE_NUMBER = data.INVOICE_NUMBER;
    var CURRENCY_TYPE = data.CURRENCY_TYPE;
    var CURRENCY= data.CURRENCY;
    var AMOUNT= data.AMOUNT;
    var apiFunction= data.apiFunction;
    var Key= data.Key;

//   alert(NET_SALES);
var dataString = '{"INVOICE_NUMBER":"'+INVOICE_NUMBER+'","CURRENCY_TYPE":"'+CURRENCY_TYPE+'","CURRENCY":"'+CURRENCY+'","AMOUNT":"'+AMOUNT+'","Key":"'+Key+'","shopId":'+shopId+',"apiFunction":"'+apiFunction+'"}';
     
  //   alert(dataString); 
   
      $.ajax({
            url: 'https://pos.airport.lk:8005/monthlySaleAPI/salesController/',
            type: 'post',
            data: dataString,
            dataType: 'json',
            contentType: 'application/json',
            success: function () {
             
            },
           
        }); 
     
   //alert(data);
        });
    }); 

