$(document).ready(function() {
   window.addEventListener('load', getAccountInfo(0), false);
   window.addEventListener('load', getCustomerInfo(), false);
var balanceAccount=0;
//$('#btnDutyFree').prop("disabled",true);

    //get shop list
function getCustomerInfo()
{
      var logObject = {
      key:'1111',
      cusMethod:'all'      
    }
    var myJSON = JSON.stringify(logObject);
      
            $.ajax({
            type: "POST",
            url: '../../customerapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              {  
                    $("#tableBody").empty(); 
                      var len = 0;
                      if(data != undefined)
                      {

                         
                       len= data.length;  

                        for( var i = 0; i<len; i++){
                        
                            var customerId = data[i]['customerId'];
                            var customerName = data[i]['customerName'];
                            var address= data[i]['address'];
                            var contactNo= data[i]['contactNo'];
                            var status= data[i]['status'];
                           
            
                              tr = $('<tr/>');
                              tr.append("<td>" + customerId + "</td>");
                              tr.append("<td>" + customerName + "</td>");
                             tr.append("<td>" + address + "</td>");                            
                             tr.append("<td>" + contactNo + "</td>");
                             tr.append("<td>" + status + "</td>");
                            $('#tableBody').append(tr);
                       
                           
                            }
      
                           /* $('#example1').DataTable({
                              'paging'      : true,
                              'lengthChange': true,
                              'searching'   : true,
                              'ordering'    : true,
                              'info'        : true,
                              'autoWidth'   : false,
                              'order': [[ 0, "desc" ]]
                            });*/
                      }
              
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert(textStatus);
               
          } 

              
        });

}

function getAccountInfo($va)
{
    balanceAccount=0;
    acType = '';
    if($va==0)
    {
        acType = 'all';
    }
    else
    {
        acType = 'one';
    }
      var logObject = {
      key:'1111',
      accMethod:acType,
      accNo:$va
    }
    var myJSON = JSON.stringify(logObject);
      
            $.ajax({
            type: "POST",
            url: '../../accountapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              {  
                  
                    $("#accountBody").empty(); 
                   $("#custaccountBody").empty(); 
                      var len = 0;
                      if(data != undefined)
                      {

                         
                       len= data.length;  

                        for( var i = 0; i<len; i++){
                        
                            var customerName = '';
                            var accountId = data[i]['accountId'];
                            var accountNo = data[i]['accountNo'];
                            
                            if($va ==0)
                            {
                                 
                                 customerName= data[i]['customerName'];
                            }
                            else
                            {
                                 balanceAccount = data[i]['accountBalance'];
                                 customerName= data[i]['accountBalance'];
                                
                            }
                           
                            
                           
                            var overdraft= data[i]['overdraft'];
                            var accountType= data[i]['accountType'];
                            var accountCategory= data[i]['accountCategory'];
                            var accountStatus= data[i]['accountStatus'];
                           
            
                              tr = $('<tr/>');
                              tr.append("<td>" + accountId + "</td>");
                              tr.append("<td>" + accountNo + "</td>");
                            
                            if($va ==0)
                            {
                                 
                                  tr.append("<td>" + customerName + "</td>");                            
                                  tr.append("<td>" + overdraft + "</td>");
                            }
                            else
                            {
                                                               
                            }
                            
                             tr.append("<td>" + accountType + "</td>");
                             tr.append("<td>" + accountCategory + "</td>");
                             tr.append("<td>" + accountStatus + "</td>");
                            
                            if($va ==0)
                            {
                                 
                                  $('#accountBody').append(tr);
                            }
                            else
                            {
                                $('#custaccountBody').append(tr);
                            }
                           
                       
                           
                            }
      
                            /*$('#example2').DataTable({
                              'paging'      : true,
                              'lengthChange': true,
                              'searching'   : true,
                              'ordering'    : true,
                              'info'        : true,
                              'autoWidth'   : false,
                              'order': [[ 0, "desc" ]]
                            });*/
                      }
              
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert(textStatus);
               
          } 

              
        });
    
}

function getTransactionInfo($va)
{
    
    acType = '';
    if($va==0)
    {
        acType = 'all';
    }
    else
    {
        acType = 'one';
    }
      var logObject = {
      key:'1111',
      accMethod:acType,
      accNo:$va
    }
    var myJSON = JSON.stringify(logObject);
      
            $.ajax({
            type: "POST",
            url: '../../transactionapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              {  
                  
                    $("#custTransacDetails").empty(); 
                  
                      var len = 0;
                      if(data != undefined)
                      {

                         
                       len= data.length;  
                          totDebit = 0;
                          totCredit=0;
                        for( var i = 0; i<len; i++){
                        
 
                           
                            var accountHolderName= data[i]['accountHolderName'];
                            var amount= data[i]['amount'];
                            var bank= data[i]['bank'];
                            var toAccount= data[i]['toAccount'];
                             var branch= data[i]['branch'];
                             var transactionStatus= data[i]['transactionStatus'];
                             var transactionTime= data[i]['transactionTime'];
                             var transactionType= data[i]['transactionType'];
                           
            
                            if(transactionType =='debit')
                            {
                               
                                totDebit=totDebit+amount;
                            }
                            else if(transactionType =='credit')
                            {
                                totCredit=totCredit+amount;
                            }
                            
                            balanceAccount = balanceAccount + totCredit - totDebit;
                            
                             tr = $('<tr/>');
                              tr.append("<td>" + accountHolderName + "</td>");
                              tr.append("<td>" + amount + "</td>");
                             tr.append("<td>" + bank + "</td>");                            
                             tr.append("<td>" + toAccount + "</td>");
                             tr.append("<td>" + transactionStatus + "</td>");
                             tr.append("<td>" + transactionTime + "</td>");
                             tr.append("<td>" + transactionType + "</td>");
                            
                            $('#custTransacDetails').append(tr);
                       
                           
                            }
      
                          $("#txtFinalBalance").val(balanceAccount);
                            $('#example4').DataTable({
                              'paging'      : true,
                              'lengthChange': true,
                              'searching'   : true,
                              'ordering'    : true,
                              'info'        : true,
                              'autoWidth'   : false,
                              'order': [[ 0, "desc" ]]
                            });
                      }
              
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert(textStatus);
               
          } 

              
        });
    
}
//click on shop body

$('body').on('click', '.shopItm', function () {
    var id= this.id;

    if(id >0)
    {
        window.location.href = "sales.php?id="+id;
    }
   

});

var curPassword = false;
var paswordMissMatch = false; 
var emptyFields = false;
$("#lblInvalidCurrentPassword").hide();
$("#lblPasswordMismatch").hide();
$("#lblAllErors").hide();

$('#btnPasswordReset').on('click', function () {

    var currentPassword = $("#currentPassword").val();
    var pwd = $("#pwd").val();
    var pwd2 = $("#pwd2").val();
    if(currentPassword == '')
    {
        emptyFields = true;
       
        $("#lblAllErors").show();
    }
    else
    {
        emptyFields = false;
       
        $("#lblAllErors").hide();
    }

    if(pwd == '')
    {
        emptyFields = true;
       
        
        $("#lblAllErors").show();
    }
    else
    {
        emptyFields = false;
        
        $("#lblAllErors").hide();
    }

    if(pwd2 == '')
    {
        emptyFields = true;
       
        $("#lblAllErors").show();
    }
    else
    {
        emptyFields = false;
       
        $("#lblAllErors").hide();
    }


    if(curPassword == false && paswordMissMatch == false && emptyFields== false)
    {
        $("#lblAllErors").hide();
        var dd = $("#pwd2").val();
        $.ajax({
            type: "POST",
            url: '../controller/userController.php',             
            dataType: "json",
            data: { "resetPassword": dd},
            success: function(data) 
              { 
                     if(data.result == 1)
                     {
                       alert("Successfully Updated!");
                       $("#pwd2").val("");
                       $("#pwd").val("");
                       $("#currentPassword").val("");
                       
                     }   
                     else
                     {
                        alert("Error");
                     }  
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) { 
           
              } 
           
            });

        
    }
    else
    {
       // $("#lblAllErors").show();
    }

});


$( "#currentPassword" ).focusout(function() {
   var dd = $("#currentPassword").val();
   
   $.ajax({
    type: "POST",
    url: '../controller/userController.php',             
    dataType: "json",
    data: { "currPassword": dd},
    success: function(data) 
      { 
             if(data.result == 1)
             {
                curPassword = false;
                $("#lblInvalidCurrentPassword").hide();
             }   
             else
             {
                curPassword = true;
                $("#lblInvalidCurrentPassword").show();
                //alert("Invalid Current Password");
             }  
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
   
      } 
   
    });

  })

  $("#pwd2")
  .focusout(function() {
     // alert("Hi");
   var dd = $("#pwd2").val();
   var dd2 = $("#pwd").val();
   
   if(dd != dd2)
   {
    //alert("Password mismatch!");
    paswordMissMatch = true;
    $("#lblPasswordMismatch").show();

   }
   else
   {
    paswordMissMatch = false;
    $("#lblPasswordMismatch").hide();

   }
  })

//Login validation
  $('#btnLogin').on('click', function () {

    var logObject = {
      key:'5555',
      username: $("#txtEmail").val(),
      password:$("#txtPassword").val(),
      loginType:'customer'
     
  }
    var myJSON = JSON.stringify(logObject);

        $.ajax({
            type: "POST",
            url: '../../loginapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              { 
                if(data.length >0)
                {
                  
                  var username = data[0].custUserName;
                  var customerId = data[0].customerId;
                    
                 
                  window.location.href = 'home.php?username=' + username+'&customerId='+customerId;
                }
                else
                {
                  alert("Username or password is incorrect!");
                }
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) { 
           
              } 
           
            });

});
    

//Create customer
  $('#btnCustCreate').on('click', function () {

    var logObject = {
      key:'1111',
      cusMethod:'create',
      custName: $("#custName").val(),
      custAddress:$("#custAddress").val(),
      custContactNo:$("#custContactNo").val()
  }
   
    var myJSON = JSON.stringify(logObject);

        $.ajax({
            type: "POST",
            url: '../../customerapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              { 
                  
                if(data >0)
                {
                  
                    alert("Customer succssfully created!");
                     $("#custName").val("");
                    $("#custAddress").val("");
                    $("#custContactNo").val("");
                    getCustomerInfo();
                }
                else
                {
                  alert("Error when registering customer information!");
                } 
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) { 
           
              } 
           
            });

});
  $('#btnCreateAccount').on('click', function () {

    var logObject = {
      key:'1111',
      accMethod:'create',
      CustomerId: $("#cmbCustomerId").val(),
      AccountCategory:$("#cmbAccountCategory").val(),
      AccountType:$("#cmbAccountType").val(),
      OpeningBalance:$("#txtOpeningBalance").val()
        
  }
   
    var myJSON = JSON.stringify(logObject);

        $.ajax({
            type: "POST",
            url: '../../accountapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              { 
                  
                if(data >0)
                {
                  
                    alert("Account succssfully created!");
                     $("#custName").val("");
                    $("#custAddress").val("");
                    $("#custContactNo").val("");
                    getAccountInfo();
                }
                else
                {
                  alert("Error when registering customer information!");
                } 
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) { 
           
              } 
           
            });

});


$("#cmbAccountNo").change(function () {
        var accountNo = this.value;
    
        getAccountInfo(accountNo);
    getTransactionInfo(accountNo);
    });
    
    
    
$('#btnTransaction').on('click', function () {

    var acc = $("#cmbAccountNo").val();
    var logObject = {
      key:'1111',
      accMethod:'create',
      cmbAccountNo: $("#cmbAccountNo").val(),
      recAccount:$("#recAccount").val(),
      cmbBank:$("#cmbBank").val(),
      cmbBranch:$("#cmbBranch").val(),
      recName:$("#recName").val(),
      amount:$("#amount").val()
        
  }
   
    var myJSON = JSON.stringify(logObject);

        $.ajax({
            type: "POST",
            url: '../../transactionapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              { 
                  
                if(data >0)
                {
                  
                    alert("Transaction is successfull!");
                      $("#cmbAccountNo").val(""),
                      $("#recAccount").val(""),
                      $("#cmbBank").val(""),
                      $("#cmbBranch").val(""),
                      $("#recName").val(""),
                      $("#amount").val("")
                      getTransactionInfo(acc);
                }
                else
                {
                  alert("Error when registering customer information!");
                } 
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) { 
           
              } 
           
            });

});

    
});
    
  