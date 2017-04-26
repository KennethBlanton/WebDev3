var parseAwesome = function(str) { 
	var array = str.split(""); 
	i=0;
	var num = ""; 
	while(i<array.length-1){
		if(array[i] === "0" || array[i] === "1" || array[i] === "2" || array[i] === "3" || array[i] === "4" || array[i] === "5" || array[i] === "6" || array[i] === "7" || array[i] === "8" || array[i] === "9" || array[i] === "-"){ 
			num = num +""+ array[i]; 
			i++;
		}else {
			i++;
		}
	} 
	return parseFloat(num); 
}  