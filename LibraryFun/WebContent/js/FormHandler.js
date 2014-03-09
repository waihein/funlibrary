function checkForm()
{
	
	var id =  document.getElementById("id").value;
	var name = document.getElementById("name").value;
	var ssn = document.getElementById("ssn").value;
	var role = document.getElementById("role").value;
	
	if ( id == null || id == ""  )
	{
		alert("Name field cannot be empty");
		return false;
	
	}
	
	else if ( name == null || name == "")
	{
		alert("Name cannot be empty");
		return false;
	}
	
	else if ( ssn == null || ssn == "")
	{
		alert("ssn cannot be empty");
		return false;
	}
	else if ( role == null || role == "")
	{
		alert("role cannot be empty");
		return false;
	}
	
	
	return true;
	
}