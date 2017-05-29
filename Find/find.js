function Find(target,array){
  var i = array.length-1;
  var j = 0;
  while(i >= 0 && j < array[0].length){
    if(target > array[i][j]){
      j++;
    }eles if(target < array[i][j]){
      i--;
    }else{
      return true;
    }
  }
  return false;
}
