/* Good job.  */
function alternate(func) {
	var message = '';
	var count = 1;
	//var message;
	/* You don't need to worry about message. the message variable
	 * is already handled by the test specs. All you need to do
	 * is call func() which will end up modifying message in the specs. */
	return function () {

		if (count != 0 && (count % 2 === 0)) {

			count++;
			return message;

		}
		else {

			count++;
			/* If you are modifying count in both the if and the else blocks, you should
			 * consider moving it outside of them and only writing it once. */
			return message += func();
		}
	}
}

/* This looks great. Well done. */
function twice(func) {
	var counter = 0;
	return function () {
		if (counter < 2) {
			counter++
			return func();
		}
		else { return 0; }
	}
}
