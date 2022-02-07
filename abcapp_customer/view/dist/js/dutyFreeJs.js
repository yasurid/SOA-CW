//Tenderboard uploader
 $("body").on("click", "#upload", function () {
    $('#btnDutyFree').prop("disabled",false);
        //Reference the FileUpload element.
        var fileUpload = $("#fileToUpload")[0];
 
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
        var fileUpload = $("#fileToUpload2")[0];
 
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
            alert("Please upload a valid Excel file. File Name should be without brackets!");
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
        var table = $("<table id='tblExel' class='table' />");
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
            
            var dateStr = moment(excelRows[i].TRANSACTION_DATE, 'MM DD YYYY').format('YYYY-MM-DD');
         
            cell = $("<td />");
            cell.html(dateStr);
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
   // $("#frmFileUpload").attr('action', '../controller/fileController.php');
      document.getElementById("frmFileUpload").submit(); 
    
       
});  


$("#btnDutyFree2").click(function(){
    document.getElementById("frmFileUpload2").submit();   

}); 

$(".refbtn").click(function(){
   window.location.href = "upload.php";
  

    }); 

