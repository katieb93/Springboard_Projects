function hasOddNumber(arr){
    return arr.some(function(val){
      return val % 2 !== 0;
    })
  }

function hasAZero(num) {
    const newArr = Array.from(String(num), Number);
        return newArr.some(function(val){
            return val < 1;
    });
  }

 function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
      return val % 2 !== 0;
    })
  }

  function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }

function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }

  function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
  }