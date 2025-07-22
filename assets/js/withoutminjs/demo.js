function requestdemo(){

    

    var errCount = validatedemodetails();

   

    if (errCount == 0) {

        var fullname = $("#fullname").val();
        var companyName = $("#companyName").val();
        var email = $("#email").val();
        var mobilenum = $("#mobilenum").val();
        var businessarea = $("#businessarea").val();
   

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "PublicInsertDemo.aspx/InsertDemo",
            data: '{ "fullname" : "' + fullname + '","companyName" : "' + companyName + '","email" : "' + email + '","mobilenum" : "' + mobilenum + '","businessarea" : "' + businessarea + '"}',
            dataType: "json",
            success: function (data) {
                console.log(data);
                var Message = data.d;

                if (Message.indexOf('successfully') >= 0) {
                                      
                    location.href = "ThankYou.html";
                }
               
            },
            error: function (result) {
                alert(result.status + ' ' + result.statusText);
            }
        });


    }
}








function contactUs() {

    

    var errCount = validateContactdetails();



    if (errCount == 0) {

        var fullname = $("#txtCName").val();
        var email = $("#txtCEmail").val();
        var mobilenum = $("#txtCContact").val();
        var businessarea = $("#txtCMessage").val();
        


        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "PublicInsertDemo.aspx/InsertContact",
            data: '{ "fullname" : "' + fullname + '","email" : "' + email + '","mobilenum" : "' + mobilenum + '","businessarea" : "' + businessarea + '"}',
            dataType: "json",
            success: function (data) {
                console.log(data);
                var Message = data.d;

                if (Message.indexOf('successfully') >= 0) {

                    location.href = "ThankYou.html";
                }

            },
            error: function (result) {
                alert(result.status + ' ' + result.statusText);
            }
        });


    }
}




function CareerwithUS() {

  
    var errCount = validateCareerdetails();



    if (errCount == 0) {

        var fullname = $("#txtCFName").val()+' '+ $("#txtCLName").val();
        var email = $("#txtCCEmail").val();
        var mobilenum = $("#txtCCContact").val();
        var businessarea = $("#ddloption").val();



        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "PublicInsertDemo.aspx/InsertCareer",
            data: '{ "fullname" : "' + fullname + '","email" : "' + email + '","mobilenum" : "' + mobilenum + '","businessarea" : "' + businessarea + '"}',
            dataType: "json",
            success: function (data) {
                console.log(data);
                var Message = data.d;

                if (Message.indexOf('successfully') >= 0) {

                    location.href = "ThankYou.html";
                }

            },
            error: function (result) {
                alert(result.status + ' ' + result.statusText);
            }
        });


    }
}



function isNumberKey(e) {

 

    var r = e.which ? e.which : event.keyCode;
    return r > 31 && (48 > r || r > 57) ? !1 : void 0
}
function validatedemodetails() {


    var fullname = $("#fullname").val();
    var companyName = $("#companyName").val();
    var emailid = $("#email").val();
    var phonenum = $("#mobilenum").val();
    var businessarea = $("#businessarea").val();


    var errMsg = "";
    var errCount = 0;
    if (fullname.length <= 0)
    {
        errCount++;
        document.getElementById("fullname").style.borderColor = "#FF0000";
    }
    else
    {
        document.getElementById("fullname").style.borderColor = "#008000";
        
    }
    if (companyName.length <= 0) {
        errCount++;
        document.getElementById("companyName").style.borderColor = "#FF0000";
    }
    else {
        document.getElementById("companyName").style.borderColor = "#008000";

    }
    

    if (emailid.length <= 0) {
        errCount++;
        errMsg += "<li>Please enter Email.</li>";
        document.getElementById("email").style.borderColor = "#FF0000";
        //$("#celblerrormsg").text("Please enter email");
        //document.getElementById("celblerrormsg").style.color = "#FF0000";


    }
    else {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid)) {
            document.getElementById("email").style.borderColor = "#008000";
            //$("#celblerrormsg").text("");

        }
        else {
            errCount++;
            //$("#celblerrormsg").text("You have entered an invalid email address!");
            //document.getElementById("celblerrormsg").style.color = "#FF0000";

        }

    }

    if (phonenum.length <= 0) {

        errCount++;
        document.getElementById("mobilenum").style.borderColor = "#FF0000";
        //$("#cplblerrormsg").text("Please enter valid Mobile No.");
        //document.getElementById("cplblerrormsg").style.color = "#FF0000";
    }
    else {
        //alert(phonenum.length);
        if (/^\d{10}$/.test(phonenum)) {
            document.getElementById("mobilenum").style.borderColor = "#008000";
            //$("#cplblerrormsg").text("");
        } else {

            errCount++;
            //$("#cplblerrormsg").text("Invalid number; must be ten digits");

        }




    }

   


    if (errCount > 0) {

       

    }
    return errCount;

    //alert(errCount);
}



function validateContactdetails() {


    var fullname = $("#txtCName").val();
    var emailid = $("#txtCEmail").val();
    var phonenum = $("#txtCContact").val();
    
    var errMsg = "";
    var errCount = 0;
    if (fullname.length <= 0) {
        errCount++;
        document.getElementById("txtCName").style.borderColor = "#FF0000";
    }
    else {
        document.getElementById("txtCName").style.borderColor = "#008000";

    }
    
    if (emailid.length <= 0) {
        errCount++;
        errMsg += "<li>Please enter Email.</li>";
        document.getElementById("txtCEmail").style.borderColor = "#FF0000";
        //$("#celblerrormsg").text("Please enter email");
        //document.getElementById("celblerrormsg").style.color = "#FF0000";


    }
    else {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid)) {
            document.getElementById("txtCEmail").style.borderColor = "#008000";
            //$("#celblerrormsg").text("");

        }
        else {
            errCount++;
            //$("#celblerrormsg").text("You have entered an invalid email address!");
            //document.getElementById("celblerrormsg").style.color = "#FF0000";

        }

    }

    if (phonenum.length <= 0) {

        errCount++;
        document.getElementById("txtCContact").style.borderColor = "#FF0000";
        //$("#cplblerrormsg").text("Please enter valid Mobile No.");
        //document.getElementById("cplblerrormsg").style.color = "#FF0000";
    }
    else {
        //alert(phonenum.length);
        if (/^\d{10}$/.test(phonenum)) {
            document.getElementById("txtCContact").style.borderColor = "#008000";
            //$("#cplblerrormsg").text("");
        } else {

            errCount++;
            //$("#cplblerrormsg").text("Invalid number; must be ten digits");

        }




    }




    if (errCount > 0) {



    }
    return errCount;

    //alert(errCount);
}


function validateCareerdetails() {

    var Fname = $("#txtCFName").val()
    var Lname=$("#txtCLName").val();
    var emailid = $("#txtCCEmail").val();
    var phonenum = $("#txtCCContact").val();
    var businessarea = $("#ddloption").val();


    var errMsg = "";
    var errCount = 0;
    if (Fname.length <= 0) {
        errCount++;
        document.getElementById("txtCFName").style.borderColor = "#FF0000";
    }
    else {
        document.getElementById("txtCFName").style.borderColor = "#008000";

    }
    if (Lname.length <= 0) {
        errCount++;
        document.getElementById("txtCLName").style.borderColor = "#FF0000";
    }
    else {
        document.getElementById("txtCLName").style.borderColor = "#008000";

    }
    
    if (emailid.length <= 0) {
        errCount++;
        errMsg += "<li>Please enter Email.</li>";
        document.getElementById("txtCCEmail").style.borderColor = "#FF0000";
        //$("#celblerrormsg").text("Please enter email");
        //document.getElementById("celblerrormsg").style.color = "#FF0000";


    }
    else {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid)) {
            document.getElementById("txtCCEmail").style.borderColor = "#008000";
            //$("#celblerrormsg").text("");

        }
        else {
            errCount++;
            //$("#celblerrormsg").text("You have entered an invalid email address!");
            //document.getElementById("celblerrormsg").style.color = "#FF0000";

        }

    }

    if (phonenum.length <= 0) {

        errCount++;
        document.getElementById("txtCCContact").style.borderColor = "#FF0000";
        //$("#cplblerrormsg").text("Please enter valid Mobile No.");
        //document.getElementById("cplblerrormsg").style.color = "#FF0000";
    }
    else {
        //alert(phonenum.length);
        if (/^\d{10}$/.test(phonenum)) {
            document.getElementById("txtCCContact").style.borderColor = "#008000";
            //$("#cplblerrormsg").text("");
        } else {

            errCount++;
            //$("#cplblerrormsg").text("Invalid number; must be ten digits");

        }




    }

    if (businessarea.length <= 0) {
        errCount++;
        document.getElementById("ddloption").style.borderColor = "#FF0000";
    }
    else {
        document.getElementById("ddloption").style.borderColor = "#008000";

    }



    if (errCount > 0) {



    }
    return errCount;

    //alert(errCount);
}