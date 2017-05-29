function Fibonacci(n)
{
    // write code here
    if(n < 2){
        return n;
    }
    var fibNMinusOne = 0;
    var fibNMinusTwo = 1;
    var fibN = 0;
    for(var i=2; i<=n; i++){
        fibN = fibNMinusOne + fibNMinusTwo;
        fibNMinusOne = fibNMinusTwo;
        fibNMinusTwo = fibN;
    }
    return fibN;
}
module.exports = {
    Fibonacci : Fibonacci
};
