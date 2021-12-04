// let num = 1;
// function add(){
//     num++;
//     console.log(num)
// }

// setInterval(() => add()

// , 1000);

// var fibonacci = function(){
//     var memo = [0,1];
//     var fib = function(n){
//       var result = memo[n];
//       if(typeof result !== 'number'){
//         result = fib(n - 1) + fib(n - 2);
//         memo[n] = result;
//       }
//       return result;
//     }
//     return fib;
//   }();
  
//   for(var i = 0; i <= 10; i++){
//     var fibona = fibonacci(i);
//     console.log(fibona)
//   }

(function (num) {
    let arr = []
    arr[0] = 1
    arr[1] = 1
    for(let i = 2; i < num; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    console.log(arr)
})(10)