/* this is a count down function*/
function countdown(num) {
	let counter = setInterval(function() {
		num = num - 1;
		if (num > 0) {
			console.log(num);
		} else {
			console.log('done');
			clearInterval(counter);
		}
	}, 1000);
}
countdown(20);
/********************************************************************** */
/* this is a random game*/
function randomGame() {
	let num;
	let times = 0;
	let timer = setInterval(function() {
		num = Math.random();
		console.log(times);
		times++;
		if (num > 0.75) {
			console.log(times);
			console.log('done');
			clearInterval(timer);
		}
	}, 1000);
}
