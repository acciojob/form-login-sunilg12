function getFormvalue() {
    //Write your code here
	const inputFname = document.getElementById("fname");
	const inputLname = document.getElementById("lname");

	if(!inputFname || !inputLname){
		alert("input fields are not found");
		return;
	}
	
	const fname = inputFname.value.trim();
	const lname =  inputLname.value.trim();
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
