var interleave = function () {

      var strs = [].slice.call(arguments);


      var longestStringLength = strs.reduce(function (longest, str) {
          if (str.length > longest) {
              return str.length;
          } else {
              return longest;
          }
      }, 0);

      var interleavedString = '';

      for (var i = 0; i < longestStringLength; i++) {


          strs.forEach(function (str) {
              if (str[i]) {
                  interleavedString += str[i];
              }
          });
      }

      return interleavedString;

  };
