$(document).ready(function(){
    $("#btn1").click(function(e){
       e.preventDefault();
           var name = $("#name1").val();
           var Uname= $("#email").val();
            var pass = $("#pwd").val();
            var cnf_pwd = $("#pwd1").val();
            var collName = $("#collegeName").val();
            var rollNo = $("#CollegeId").val();
          var data =  {
                "Name" :name,
                "Email" :Uname,
                "Password":pass,
                "Confirm_Password":cnf_pwd,
                "College_Name":collName,
                "College_Id":rollNo,
                };
        $.ajax({
           
            type:"POST",
            url:"http://localhost:61226/api/user",
            dataType:"JSON",
            
            contentType:"application/json;charset=utf-8",
            data: JSON.stringify(data),
            success:function(_data,success){
              window.location.replace("login.html");
            }
           error:function(){
                window.alert("Username not found")
            }
        });
    });
});