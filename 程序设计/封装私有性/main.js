var fn = (function (cal) {
  cal.one = function (a, b) {
    return a + b;
  }
  cal.two = function (a, b) {
    return a * b;
  }
  return cal;
})(window.fn || {})