function reOrderArray(array){
  var even = [];
  var odd = [];
  for(var i=0;i<array.length;i++){
    if(array[i] & 0x1 == 1){
      odd.push(array[i]);
    }else{
      even.push(array[i]);
    }
  }
  return odd.concat(even);
}
