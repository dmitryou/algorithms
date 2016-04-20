'use strict';

function majorityVote(nums) {
	var numberOfMembers = nums.length;
	var candidate = nums[0];
	var counter = 0;

	nums.forEach(function(num) {
		if (counter === 0) {
			candidate = num;
			counter = 1;
		} else if (candidate === num) {
			counter++;
		} else {
			counter--;
		}
	});

	// count the number of times the candidate appears
	counter = 0;
	nums.forEach(function(num) {
		if (num === candidate) {
			counter++;
		}
	});
	if (counter < (numberOfMembers + 1) / 2) {
		return -1;
	}
	return candidate;
}

function test(nums) {
	console.log('for :', nums, 'result :', majorityVote(nums));
}

// equal number of occurrences for all for [1, 2, 3] result -1
test([1, 2, 3]);

// 2 a clear majority. outputs 2
test([1, 2, 2, 2, 2, 2, 4]);

// 1 a clear majority. outputs 1
test([1, 1, 1, 2, 2, 2, 1, 2, 1]);

// here, 2 has the highest number of occurrences (mode) but not the majority
// (aka half the length of the array). outputs -1
test([2, 1, 1, 2, 3, 3, 2, 4, 4, 2, 5, 5]);