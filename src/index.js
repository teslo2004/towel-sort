
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return [];
  for (var i=0; i < matrix.length;i++){
        if(i%2 != 0){
            matrix[i].reverse();
        }else {
            matrix[i];
        }
    }
    return matrix.reduce(function(a,b){
    return a.concat(b)
    },[])
}
