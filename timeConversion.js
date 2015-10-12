// time conversion exercise
//
// max

var converter = function(t){

	var out = ("Time is: " + t);
	var time = t.slice(0,8),
		suffix = t.slice(8,10),
		hours = t.slice(0,2),
		noHours = t.slice(2,8);
	
	if(suffix == "AM"){
		if(hours == '12'){
			return ('00' + noHours);
		}
		return time;
	}	
	else{
		return (parseInt(hours) + 12) + noHours;
	}
	
	//return suffix + time + "\n" + hours;
}




console.log(converter("12:00:00AM"));
console.log(converter("01:00:00PM"));

