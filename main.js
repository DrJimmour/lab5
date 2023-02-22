
let column_1 = [7, 1, 4, 4, 2, 8, 8, 4, 10, 9, 7, 5, 4, 3, 10, 3, 6, 5, 2, 8, 2, 3, 1, 7, 2, 1, 7, 5, 10, 6];
let column_2 = [10, 3, 1, 7, 3, 2, 1, 2, 7, 7, 8, 2, 5, 4, 6, 9, 10, 10, 3, 8, 10, 6, 3, 8, 1, 4, 6, 3, 7, 3];
let column_3 = [42, 77, 55, 95, 76, 76, 81, 96, 96, 96, 98, 53, 40, 67, 93, 57, 48, 66, 55, 41, 90, 59, 67, 50, 72, 94, 61, 93, 67, 53];
let column_4 = [53, 84, 98, 57, 47, 98, 54, 40, 95, 83, 50, 58, 45, 95, 42, 79, 56, 68, 90, 73, 100, 69, 76, 59, 63, 69, 47, 66, 68, 56];

let sum_1 = 0;
let sum_2 = 0;
let sum_3 = 0;
let sum_4 = 0;

for (let i = 0; i < column_1.length; i++) {
    sum_1 += column_1[i];
}

for (let i = 0; i < column_2.length; i++) {
    sum_2 += column_2[i];
}

for (let i = 0; i < column_3.length; i++) {
    sum_3 += column_3[i];
}

for (let i = 0; i < column_4.length; i++) {
    sum_4 += column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];
let total = sum_1+sum_2+sum_3+sum_4;

const results = {
	col1: column_1,	
	col2: column_2, 
    col3: column_3,
    col4: column_4,
	sums: sums, 	// array of sums of each column
	total_score: total	// computed total score
}

console.log(results);