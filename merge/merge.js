/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    if(pHead1 === null){
        return pHead2;
    }
    if(pHead2 === null){
        return pHead1;
    }
    var pHead3 = null;
    if(pHead1.val < pHead2.val){
        pHead3 = pHead1;
        pHead3.next = Merge(pHead1.next,pHead2);
    }else{
        pHead3 = pHead2;
        pHead3.next = Merge(pHead1,pHead2.next);
    }
    return pHead3;
}
