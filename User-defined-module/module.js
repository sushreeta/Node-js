var counter= function(arr){
    return 'Elements'+arr.length;
}

var adder = function(a,b){
    return a+b;
}

module.exports = {
    counter: counter,
    adder: adder,
}