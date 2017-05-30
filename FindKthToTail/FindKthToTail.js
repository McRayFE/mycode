function FindKthToTail(head,k){
  if(head == null){
    return false;
  }
  var arr = [];
  while(head){
    arr.push(head);
    head = head.next;
  }
  if(k > arr.length){
    return false;
  }
  return arr[arr.length - k];
}
