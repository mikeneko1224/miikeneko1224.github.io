const message = 'Hello world' 
console.log(message)

var list = ["apple", "mango", "banana"]
console.log(list)

for(var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

function plus(n, sum) {
  for(i = 1; i <= n; i++){
    sum += i;
  } 
  return sum
}

var sum1 = plus(100, 0)
console.log(sum1)