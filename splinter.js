var splinterArray = [];
function splinter(number, anotherNumber) {
	var z = number * anotherNumber;
	splinterArray = [number,anotherNumber,z];
	return splinterArray;
}

console.log(splinter(1,2));

