function printMatrix(matrix)
{
    // write code here
    int row = matrix.length;
    int col = matrix[0].length;
    if(matrix === null || col <= 0 || row <= 0){
        return false;
    }
    int start = 0;
    while(col>start*2 && row>start*2){
        printMatrixInCircle(matrix,col,row,start);
        ++start;
    }
}
function printMatrixInCircle(matrix,col,row,start){
    int endX = col - 1 - start;
    int endY = row - 1 - start;
    for(var i = 0; i<=endX; ++i){
        var number = matrix[start][i];
        console.log(number+' ');
    }
    if(start < endY){
        for(var i=start+1;i<=endY;++i){
            var number = matrix[i][endX];
            console.log(number+' ');
        }
    }
    if(start < endX && start < endY){
        for(var i=endX - 1;i>=start;--i){
            var number = matrix[endY][i];
            console.log(number+' ');
        }
    }
    if(start < endX && start < endY - 1){
        for(var i=endY-1;i>=start+1;--i){
            var number = matrix[i][start];
            console.log(number+' ');
        }
    }
}
module.exports = {
    printMatrix : printMatrix
};
