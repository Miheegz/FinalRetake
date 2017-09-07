/* great job.  */
function reduceRight(arr, start, func) {
	if (arr.length === 0)
		return start;
	else
		return reduceRight(arr.slice(0, arr.length - 1), func(start, arr[arr.length - 1]), func);
}

<<<<<<< HEAD
  var reduceRightRecursive = function (collection, accumulatedValue, iterator) {

        // Base case
        if (collection.length === 0) {
            return accumulatedValue;
        }

        var pertinentElement = collection[collection.length - 1];
        var result = iterator(accumulatedValue, pertinentElement);

        return reduceRightRecursive(
            collection.slice(0, -1),
            result,
            iterator
        );

    };
=======
/* This all looks very good except for one minor issue */
function reduceRightRecursive(arr, start, func) {
	var copy = arr;

	if (copy.length === 0) {
		return start;
	}
	else {
		/* You accidentally wrote reduceRight instead of reduceRightRecursive. */
		return reduceRight(copy.slice(0, copy.length - 1), func(start, copy[copy.length - 1]), func);
	};
}
>>>>>>> 279d5812a468b57265ea1d99b53d46fb3a72974b

