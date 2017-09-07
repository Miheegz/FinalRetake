/* Nice job. */
function vowelsCount(str) {

	var counter = 0;
	for (var i = 0; i < str.length; i++) {
		/* Rather than having to write str[i].toLowerCase === several times, you could do something like this:
		 * var letter = str[i].toLowerCase();
		 * if (letter === 'a' || letter === 'i' ...) */
		if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'u') {
			counter++;
		}
	}
	return counter;
}
