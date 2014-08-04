var secondGreatLow = function (nums) {
	nums.sort(function(a,b){return a-b});
	var greatest = nums.pop();
	var smallest = nums.shift();
	var newNums = nums.filter(function(value, index){
		if (value !== greatest && value !== smallest) {
			return value;
		}
		return false;
	});

	newNums.sort(function(a,b){return a-b});
	
	console.log(newNums.shift() + ' ' + newNums.pop());
}

// secondGreatLow([98, 7, 12, 7, 106]);

var timeConvert = function(num){
	console.log(Math.floor(num/60)+':'+(num % 60));
};

// timeConvert(63);

var bracketMatcher = function(str){
	
};