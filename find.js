function findUserByUsername(arr, val) {
    return arr.find(function(obj){
      return obj.username === val;
    })
  }

  function removeUser(arr, val) {
    let foundIndex = arr.findIndex(function(obj){
      return obj.username === val;
    })
    if(foundIndex === -1) return;
  
    return arr.splice(foundIndex,1)[0];
  }