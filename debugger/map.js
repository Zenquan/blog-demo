var map = function (a, f) {
  var result = [];
  for (var i = 0, len = a.length; i < len; i++) {
    debugger;
    if (i in a) result[i] = f.call(null, a[i], i, a);
  }
  return result;
};

map([1, 2, 3], function (x) {
  return x * x;
});
