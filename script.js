function getFormvalue() {
    //Write your code here
	const fname = document.getElementById("fname").value.trim();
	const lname = document.getElementById("lname").value.trim();

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
