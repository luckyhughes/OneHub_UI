// JavaScript Document
$(document).ready(function() {
 
  

$("#submitButton").click(function(){

	// Ids of Input Field
	$name=$("#id_FirstName");
	$last=$("#id_LastName");
	$email=$("#id_Email");
	$password=$("#id_password");
	$company=$("#id_Company");
	$phone=$("#id_Phone");
	
	// Validation Message
	$error_name=$("#firstname_error");
	$error_last=$("#lastname_error");
	$error_email=$("#email_error");
	$error_password=$("#password_error");
	$error_account=$("#account_name_error");
	$error_phone=$("#phone_no_error");
	
	
	$error_name.html("");
	$error_last.html("");
	$error_email.html("");
	$error_password.html("");
	$error_account.html("");
	$error_phone.html("");
	$check=0;
    if($name.val()=="")
	{
		$error_name.html("Please enter your first name.");
	    $check=1;
    
	}
	
	 if($last.val()=="")
	{
		$error_last.html("Please enter your last name.");
		$check=1;
    
	}
	
	 if($email.val()=="")
	{
		$error_email.html("Please enter your email id.");
		$check=1;
    
	}
	
	 if($password.val()=="")
	{
		$error_password.html("Please enter your password.");
		$check=1;
    
	}
	
	 if($company.val()=="")
	{
		$error_account.html("Please enter your company name.");
		$check=1;
    
	}
	
	 if($phone.val()=="")
	{
		$error_phone.html("lease enter your phone number.");
		$check=1;
    
	}


	if($password.val().length<=6 && $password.val()!="")
	{
		$error_password.html("Your password must be at least 6 characters long.");
		$check=1;
    
	}
	
	passRegEx = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*([a-zA-Z0-9-]+)?@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
    if( !passRegEx.test($email.val()) &&$email.val()!="" )
	{
		$error_email.html("Please enter a valid email address.");
		$check=1;
    
	}
 
	if($check==0)
	$("#registration-form").submit();
});
  
	//return false;
});