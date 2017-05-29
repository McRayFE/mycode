function Stack(){
  var items = [];
  this.push = function(element){
    items.push(element);
  }
  this.pop = function(){
    return items.pop();
  }
  this.peek = function(){
    return items[items.length-1];
  }
  this.isEmpty = function(){
    return items.length == 0;
  }
}
var s1 = new Stack();
var s2 = new Stack();
function push(node){
  s1.push(node);
}
function pop(){
  if(s1.isEmpty() && s2.isEmpty()){
    throw new Error('Queue is empty');
  }
  if(s2.isEmpty()){
    while(!s1.isEmpty()){
      s2.push(s1.pop());
    }
  }
  return s2.pop();
}
