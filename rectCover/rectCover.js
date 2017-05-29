function rectCover(number)
{
    // write code here
    if(number <= 2){
        return number;
    }
    var one = 1;
    var two = 2;
    var result = 1;
    for(var i=3; i<=number; i++){
        result = one + two;
        one = two;
        two = result;
    }
    return result;
}
module.exports = {
    rectCover : rectCover
};
