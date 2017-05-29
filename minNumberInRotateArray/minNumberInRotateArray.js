function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length <= 0){
        throw new Error('数组为空的');
    }
    var index1 = 0;
    var index2 = rotateArray.length-1;
    var indexMid = index1;
    while(rotateArray[index2] <= rotateArray[index1]){
        if(index2 - index1 == 1){
            indexMid = index2;
            break;
        }
        indexMid = Math.floor((index1 + index2)/2);
        if(rotateArray[index1] == rotateArray[index2] && rotateArray[indexMid] == rotateArray[index1]){
            return MinInOrder(rotateArray);
        }
        if(rotateArray[indexMid]>=rotateArray[index1]){
            index1 = indexMid;
        }else if(rotateArray[indexMid] <= rotateArray[index2]){
            index2 = indexMid;
        }
    }
    return rotateArray[indexMid];
}
function MinInOrder(rotateArray){
    var result = rotateArray[0];
    for(var i=0;i<=rotateArray.length;i++){
        if(result > rotateArray[i]){
            result = rotateArray[i];
        }
    }
    return result;
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};
