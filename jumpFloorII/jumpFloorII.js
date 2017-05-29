function jumpFloorII(number)
{
    // write code here
    if(number == 1){
        return 1;
    }else{
        return 2*jumpFloorII(number-1);
    }
}
module.exports = {
    jumpFloorII : jumpFloorII
};
