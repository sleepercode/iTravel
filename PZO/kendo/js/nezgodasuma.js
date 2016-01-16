function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "5000"){
		var optionArray = ["10000|10000"];
	} else if(s1.value == "10000"){
		var optionArray = ["20000|20000"];
	} else if(s1.value == "15000"){
		var optionArray = ["30000|30000"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}