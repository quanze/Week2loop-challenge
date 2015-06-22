var input = 25;
var inputDigits = input.toString();
inputDigits = inputDigits.length;
var spaceChar="";
var output = "";
var currentDigit;

for (var i = 1; i < input + 1; i++) {
	
	currentDigit = i.toString();
	currentDigit = currentDigit.length;
	for(var p = inputDigits - currentDigit + 1; p > 0; p-- ){
		spaceChar = spaceChar + " ";
	}//determines number of space between numbers
 
    for (var k = input - i; k > 0; k--) {
        output = output + "  ";
    }//spaces before numbers

    for (var q = i; q > 0; q--) {
        output = output + spaceChar + i;
    }//numbers and spaces between them

    output = output + "\n";
    console.log(output);
    var output = "";
    spaceChar="";
    //resets
}
