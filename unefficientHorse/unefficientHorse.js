'use strict';

function horseSteps(points) {
	var xDist = Math.abs(points.x1 - points.x2);
	var yDist = Math.abs(points.y1 - points.y2);
	var maxDist;
	if((isEven(points.x1 + points.y1) && isEven(points.x2 + points.y2)) || (isOdd(points.x1 + points.y1) && isOdd(points.x2 + points.y2))) { //it is possibility
		if(xDist > yDist){
			maxDist = xDist;
		}
		else {
			maxDist = yDist;
		}
		if(maxDist > 20000) {// if distance more than 20000 leagues under the sea.
			return -2;
		}
		else {
			return maxDist;
		}
	}
	else {
		return -1;
	}
}

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}


function test(points) {
	console.log('for points :', points, 'result :', horseSteps(points));
}

test( { x1: 0, y1: 4, x2: 0, y2: 0} ); //even sum
//  4 steps

test( { x1: 0, y1: 2, x2: 5, y2: 5} ); //even sum
//  5 steps

test( { x1: 1, y1: 5, x2: 5, y2: 3} ); //even sum
//  4 steps

test( { x1: 5, y1: 3, x2: 1, y2: 5} ); //even sum
//  4 steps

test( { x1: 5, y1: 0, x2: 5, y2: 2} ); //odd sum
//  2 steps

test( { x1: 5, y1: 0, x2: 5, y2: 4} ); //odd sum
//  4 steps

test( { x1: 5, y1: 0, x2: 3, y2: 4} ); //odd sum
//  4 steps

test( { x1: 5, y1: 5, x2: 3, y2: 5} ); //even sum
//  2 steps

test( { x1: 4, y1: 5, x2: 0, y2: 5} ); //odd sum
//  4 steps

test( { x1: 4, y1: 0, x2: 0, y2: 5} ); //both sums not odd or even
//  no steps -1

test( { x1: 4, y1: 5, x2: 0, y2: 4} ); //both sums not odd or even
//  no steps -1

test( { x1: 4, y1: 100000, x2: 0, y2: 79998} ); //more than 20000 steps
//  no steps -2

test( { x1: 4, y1: 100000, x2: 0, y2: 80002} ); //more than 20000 steps
//  no steps -2

test( { x1: 4, y1: 100000, x2: 0, y2: 80003} ); //more than 20000 steps
//  no steps -2
