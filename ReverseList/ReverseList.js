function ReverseList(pHead){
  var pre = null;
  var next = null;
  while(pHead != null){
    next = pHead.next;
    pHead.next = pre;
    pre = pHead;
    pHead = next;
  }
  return pre;
}
