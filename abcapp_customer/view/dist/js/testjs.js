$(document).ready(function() {
$("#weeklydiv").hide();

//document.getElementById("btnUploader").disabled = true;
 
  //Initialize the datePicker(I have taken format as mm-dd-yyyy, you can     //have your owh)
  $("#weeklyDatePicker").datepicker({
       calendarWeeks: true
  });

   //Get the value of Start and End of Week
$('#weeklyDatePicker').datepicker().on('changeDate', function(e) {
   var d = new Date(document.getElementById('weeklyDatePicker').value);
   var week= getWeekNumber(d);
   
   
});
    
Date.prototype.getWeek = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

function getDateRangeOfWeek(weekNo,d){
    var d1 = d;
    numOfdaysPastSinceLastMonday = eval(d1.getDay()- 1);
    d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
    var weekNoToday = d1.getWeek();
    var weeksInTheFuture = eval( weekNo - weekNoToday );
    d1.setDate(d1.getDate() + eval( 7 * weeksInTheFuture ));
    var rangeIsFrom = eval(d1.getMonth()+1) +"/" + d1.getDate() + "/" + d1.getFullYear();
    d1.setDate(d1.getDate() + 6);
    var rangeIsTo = eval(d1.getMonth()+1) +"/" + d1.getDate() + "/" + d1.getFullYear() ;
    
    $("#weeklydiv").text("You have selected the week from " + rangeIsFrom + " to " +rangeIsTo);
    $("#weeklydiv").show();
  //  return rangeIsFrom + " to "+rangeIsTo;
};
    
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
  //  return [d.getUTCFullYear(), weekNo];
    
    var ff = getDateRangeOfWeek(weekNo,d);
   
}
  function Upload() {
        //Reference the FileUpload element.
        var fileUpload = document.getElementById("fileUpload");
 
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
    };
    
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
        var table = document.createElement("table");
        table.border = "1";
        table.id = "tblExel";
       
      
        //Add the header row.
        var row = table.insertRow(-1);
 									

        //Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "CONCESSIONAR_NAME";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "SHOP_ID";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "SHOP_NAME";
        row.appendChild(headerCell);
        
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "LOCATION";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "INVOICE_NUMBER";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "TRANSACTION_DATE";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "TRANSACTION_TIME";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "PRODUCT_NAME";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "PRODUCT_CATEGORY";
        row.appendChild(headerCell);
    										   
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "PRODUCT_SUB_CATEGORY";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "BRAND_NAME";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "QUANTITY";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "UNIT_PRICE";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "TOTAL_AMOUNT_BEFORE_DISCOUNT";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "DISCOUNT_AMOUNT";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "DISCOUNT_TYPE";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "TOTAL_AMOUNT_AFTER_DISCOUNT";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "SALES_TAX_PERCENTAGE";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "SALES_TAX";
        row.appendChild(headerCell);
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "NET_SALES";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "MINUS_TAX";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "PAYMENT_METHOD";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "CURRENCY";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "ACTUAL_PAYMENT_CURRENCY_TYPE";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "TRANSACTION_TYPE";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "VOID_CANCELATION_TYPE";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "FLIGHT";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "FLIGHT_DATE_TIME";
        row.appendChild(headerCell);
				  
        
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "AIRPORT_ORG.";
        row.appendChild(headerCell);
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "AIRPORT_DES.";
        row.appendChild(headerCell);
        
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "AIRPORT_DES3.";
        row.appendChild(headerCell);
        
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "PASSENGER_ID_NAME";
        row.appendChild(headerCell);
        
        
         headerCell = document.createElement("TH");
        headerCell.innerHTML = "NATIONALITY";
        row.appendChild(headerCell);
        
          headerCell = document.createElement("TH");
        headerCell.innerHTML = "PASSPORT_ID";
        row.appendChild(headerCell);
        
          headerCell = document.createElement("TH");
        headerCell.innerHTML = "NATIONAL_ID";
        row.appendChild(headerCell);
        
          headerCell = document.createElement("TH");
        headerCell.innerHTML = "BIRTHDATE";
        row.appendChild(headerCell);
        
          headerCell = document.createElement("TH");
        headerCell.innerHTML = "GENDER";
        row.appendChild(headerCell);
        
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            //Add the data row.
            var row = table.insertRow(-1);
							
         //   alert(excelRows[i].Date);
            //Add the data cells.
            var cell = row.insertCell(-1);
            cell.innerHTML = formatDate(excelRows[i].CONCESSIONAR_NAME);
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].SHOP_ID;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].SHOP_NAME;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].LOCATION;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].INVOICE_NUMBER;
            
             cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].TRANSACTION_DATE;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].TRANSACTION_TIME;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].PRODUCT_NAME;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].PRODUCT_CATEGORY;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].PRODUCT_SUB_CATEGORY;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].BRAND_NAME;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].QUANTITY;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].UNIT_PRICE;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].TOTAL_AMOUNT_BEFORE_DISCOUNT;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].DISCOUNT_AMOUNT;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].DISCOUNT_TYPE;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].TOTAL_AMOUNT_AFTER_DISCOUNT;

            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].SALES_TAX_PERCENTAGE;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].SALES_TAX;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].NET_SALES;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].MINUS_TAX;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].PAYMENT_METHOD;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].CURRENCY;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].ACTUAL_PAYMENT_CURRENCY_TYPE;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].VOID_CANCELATION_TYPE;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].FLIGHT;
            		
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].FLIGHT;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].FLIGHT_DATE_TIME;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].AIRPORT_ORG;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].AIRPORT_DES;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].AIRPORT_DES2;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].AIRPORT_DES3;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].PASSENGER_ID_NAME;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].NATIONALITY;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].PASSPORT_ID;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].NATIONAL_ID;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].BIRTHDATE;
            
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].GENDER;
            
        }
 
        $(table).addClass("table");
        $(table).addClass("table-striped");
        var dvExcel = document.getElementById("divExcel");
        dvExcel.innerHTML = "";
        dvExcel.appendChild(table);
    };
    
//Convert html table to json
    function storeTblValues()
    {
        var shopId = $('#txtShopId').val();
        if(shopId == '')
        {
            alert("Please enter shop Id");
        }
        else
        {
            var TableData = new Array();

            var count=0;
            $('#tblExel tr').each(function(row, tr){
                
                if(count >0)
                {
                    var view = 'setMonthlySale'; 
                    
                    var DateTime =$(tr).find('td:eq(0)').text();
                    var invoiceFrom = $(tr).find('td:eq(1)').text();
                    var invoiceTo =$(tr).find('td:eq(2)').text();
                    var paymentType =$(tr).find('td:eq(3)').text();
                    var currencyName =$(tr).find('td:eq(4)').text();
                    var currencyAmount =$(tr).find('td:eq(5)').text();
                    var currencyRateUSDoller = $(tr).find('td:eq(6)').text();
                    var totalInvoiceValue = $(tr).find('td:eq(7)').text();
                    var DollerToLRKRate = $(tr).find('td:eq(8)').text();
                    var TotalValueLKR = $(tr).find('td:eq(9)').text();

                   
                    $.ajax({
                        url:'RestController.php',
                        type: 'POST',
                        dataType: 'json',
                       // contentType: 'application/json; charset=utf-8',
                        data:{view:view,shopId:shopId,DateTime:DateTime,invoiceFrom:invoiceFrom,invoiceTo:invoiceTo,paymentType:paymentType,currencyName:currencyName,currencyAmount:currencyAmount,currencyRateUSDoller:currencyRateUSDoller,totalInvoiceValue:totalInvoiceValue,DollerToLRKRate:DollerToLRKRate,TotalValueLKR:TotalValueLKR} , 
                        success: function (result) {

                            if(result > 0)
                            {
                                alert("Excel was uploaded succssfully!");
                            }
                        },
                        error: function (error) {

                        }
                    });
                    
                }
                
                 count++;
                
            });     
            
            
        }

       
      
    }
    

    
    $("#btnUploader").click( function()
    {
          var shopId = $('#txtShopId').val();
      
        storeTblValues();
        

    });
    
    $("#btnUpload").click( function()
    {
        Upload();
        document.getElementById("btnUploader").disabled = false;

    }); 
    

    
    function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
    
    $("form#data").submit(function(e) {
    e.preventDefault();    
    var formData = new FormData(this);

    $.ajax({
       
        type: 'POST',
        data: formData,
        success: function (data) {
            alert(data)
        },
        cache: false,
        contentType: false,
        processData: false
    });
        
        var file_data = $('.file').prop('files')[0];
            if(file_data != undefined) {
                var form_data = new FormData();                  
                form_data.append('file', file_data);
                $.ajax({
                    type: 'POST',
                    url:'https://www1.airport.lk/monthlySaleAPI/RestController.php',
                    contentType: false,
                    processData: false,
                    data: form_data,
                    success:function(response) {
                        if(response == 'success') {
                            alert('File uploaded successfully.');
                        } else {
                            alert('Something went wrong. Please try again.');
                        }
  
                        $('.file').val('');
                    }
                });
            }
    
        
});
});
    
  