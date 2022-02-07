$(document).ready(function() {
   window.addEventListener('load', getAccountInfo(), false);
   window.addEventListener('load', getCustomerInfo(), false);
   window.addEventListener('load', getUserInfo(), false);

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
      
                            
                      }
              
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert(textStatus);
               
          } 

              
        });

}

function getUserInfo()
{
      var logObject = {
      key:'1111',
      logMethod:'all'      
    }
    
    var myJSON = JSON.stringify(logObject);
      
            $.ajax({
            type: "POST",
            url: '../../loginapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              {  
                    $("#tblUserBody").empty(); 
                      var len = 0;
                      if(data != undefined)
                      {

                      
                       len= data.length;  

                        for( var i = 0; i<len; i++){
                        
                            var empName = data[i]['empName'];
                            var empUserName = data[i]['empUserName'];
                            var empUserType= data[i]['empUserType'];
                          
                           
            
                              tr = $('<tr/>');
                              tr.append("<td>" + empName + "</td>");
                              tr.append("<td>" + empUserName + "</td>");
                             tr.append("<td>" + empUserType + "</td>");                           
                            
                            $('#tblUserBody').append(tr);
                       
                           
                            }
      
                            
                      }
              
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert(textStatus);
               
          } 

              
        });

}
    
function getAccountInfo()
{
      var logObject = {
      key:'1111',
      accMethod:'all'      
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
                      var len = 0;
                      if(data != undefined)
                      {

                         
                       len= data.length;  

                        for( var i = 0; i<len; i++){
                        

                            var accountId = data[i]['accountId'];
                            var accountNo = data[i]['accountNo'];
                            var customerName= data[i]['customerName'];
                            var overdraft= data[i]['overdraft'];
                            var accountType= data[i]['accountType'];
                            var accountCategory= data[i]['accountCategory'];
                            var accountStatus= data[i]['accountStatus'];
                           
            
                              tr = $('<tr/>');
                              tr.append("<td>" + accountId + "</td>");
                              tr.append("<td>" + accountNo + "</td>");
                             tr.append("<td>" + customerName + "</td>");                            
                             tr.append("<td>" + overdraft + "</td>");
                             tr.append("<td>" + accountType + "</td>");
                             tr.append("<td>" + accountCategory + "</td>");
                             tr.append("<td>" + accountStatus + "</td>");
                            $('#accountBody').append(tr);
                       
                           
                            }
      
                            $('#example2').DataTable({
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

  $("#txtPassword2")
  .focusout(function() {
     // alert("Hi");
   var dd = $("#txtPassword2").val();
   var dd2 = $("#txtPassword").val();
   
   if(dd != dd2)
   {
    alert("Password mismatch!");
   // paswordMissMatch = true;
   // $("#lblPasswordMismatch").show();

   }
   else
   {
   // paswordMissMatch = false;
  //  $("#lblPasswordMismatch").hide();

   }
  })

//Login validation
  $('#btnLogin').on('click', function () {

    var logObject = {
      key:'1111',
      username: $("#txtEmail").val(),
      password:$("#txtPassword").val(),
      loginType:'admin'
     
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
                  
                  var username = data[0].empName;
                  var userType = data[0].empUserType;
                  window.location.href = 'home.php?username=' + username+'&usertype='+userType;
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
    
  $('#btnCreateUser').on('click', function () {

    var logObject = {
      key:'1111',
      logMethod:'create',
      username: $("#txtLoginUser").val(),
      password:$("#txtPassword").val(),
      userType:$("#cmbUserType").val(),
      empId:$("#cmbEmpId").val()
  }
   
    var myJSON = JSON.stringify(logObject);

        $.ajax({
            type: "POST",
            url: '../../loginapi/api/',             
            dataType: "json",
            data:myJSON,
            success: function(data) 
              { 
                  
                if(data >0)
                {
                  
                    alert("User succssfully created!");
                     $("#txtLoginUser").val("");
                    $("#txtPassword").val("");
                    $("#cmbUserType").val("");
                    getUserInfo();
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


});
    
  