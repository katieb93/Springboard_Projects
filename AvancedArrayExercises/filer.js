function doubleValues (array) {
    return array.map (function(value) {
        return value * 2;
    });
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }