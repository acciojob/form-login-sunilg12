function getFormvalue() {
    //Write your code here
	const fname = document.getElementById("fname").value;
	const lname = document.getElementById("lnfame").value;

	if(fname === "" || lname === ""){
		alert("Please enter both FirstName and LastName");
		return;
	}

	// /^[A-Za-z\s'-]+$/;
	const nameRegex =  /^[A-Za-z\s'-]+$/;

	if(!nameRegex.test(fname) || !nameRegex.test(lname)){
		alert("Name contains only letters, hyphens, spaces and apostrophes");
		return;
	}
	
	alert(fname+" "+lname);
}
